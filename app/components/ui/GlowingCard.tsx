/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { GlowingEffect } from './GlowingEffect';
import useViewportWidth from '@/lib/useViewportWidth';
import { features } from '@/app/data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { animationVariant } from '@/utils/animation';

export function GlowingCard() {
  const [showAll, setShowAll] = useState(false);
  const viewportWidth = useViewportWidth();
  const isMobile = viewportWidth !== null ? viewportWidth < 768 : false;

  const displayedFeatures = showAll
    ? features
    : features.slice(0, isMobile ? 3 : 6); // Show only 6 items initially (2 rows)

  const gridAreas = [
    'md:[grid-area:1/1/2/5]', // First row
    'md:[grid-area:1/5/2/9]',
    'md:[grid-area:1/9/2/13]',
    'md:[grid-area:2/1/2/5]', // Second row
    'md:[grid-area:2/5/2/9]',
    'md:[grid-area:2/9/2/13]',
    'md:[grid-area:3/1/3/5]', // Third row
    'md:[grid-area:3/5/3/9]',
    'md:[grid-area:3/9/3/13]',
  ];

  return (
    <div className='mx-5'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        <div className='max-w-7xl mx-auto'>
          <motion.div variants={animationVariant('y', -20)}>
            <p className='text-primary-color tracking-widest uppercase text-center'>
              Our Service
            </p>
            <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
              Experience our{' '}
              <span className='text-primary-color'>features</span>
            </h2>
          </motion.div>

          <motion.div variants={animationVariant('x', -20)}>
            <div className='relative'>
              <ul
                className={`grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-4 ${
                  showAll ? 'md:grid-rows-3' : 'md:grid-rows-2'
                }`}
              >
                {displayedFeatures.map((feature, index) => (
                  <GridItem
                    key={feature.id}
                    area={gridAreas[index]}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    id={feature.id}
                  />
                ))}
              </ul>

              {!showAll && features.length > 6 && (
                <div className='absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none'></div>
              )}
            </div>

            {features.length > 6 && (
              <div className='flex justify-center mt-10'>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className='bg-primary-color/20 hover:bg-primary-color/30 text-primary-color px-6 py-3 rounded-md transition-all duration-300'
                >
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: any;
  title: string;
  description: string;
  id: string;
}

const GridItem = ({ area, icon, title, description, id }: GridItemProps) => {
  return (
    <li
      className={`min-h-[14rem] list-none ${area} transition-all duration-300`}
    >
      <div className='relative h-full border-2 bg-[#0f0f0f] border-white/20 p-2 rounded-3xl md:p-3'>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className='relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6'>
          <div className='flex flex-col h-full'>
            <div className='flex flex-col gap-3'>
              <span
                className='w-14 p-3 rounded-full h-14 text-primary-color/70 bg-primary-gray/10'
                dangerouslySetInnerHTML={{
                  __html: icon.replace(
                    '<svg',
                    '<svg class="w-full h-full fill-current"'
                  ),
                }}
              />

              <p className='text-xl md:text-2xl font-bold mb-3 md:mb-5 text-primary-color'>
                {title}
              </p>
            </div>
            <div
              className='flex-grow text-sm md:text-base'
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className='mt-3 md:mt-5'>
              <p className='text-primary-grayText/40 font-bold text-base md:text-lg'>
                {id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
