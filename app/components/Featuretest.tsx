'use client';
import React, { useState, useEffect } from 'react';
import { Container } from './common/Container';
import { features } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { animationVariant } from '@/utils/animation';
// import useViewportWidth from '@/lib/useViewportWidth';

export default function FeatureTest() {
  const [showAll, setShowAll] = useState(false);
  const [currentRows, setCurrentRows] = useState([0, 1]);
  //   const [isAnimating, setIsAnimating] = useState(false);
  //   const viewportWidth = useViewportWidth();
  const itemsPerRow = 3;
  //   const rowHeight = viewportWidth && viewportWidth < 768 ? 450 : 380; // Mobile vs Desktop height

  // Create row chunks from features array
  const rows = features.reduce((acc, _, index) => {
    if (index % itemsPerRow === 0) {
      acc.push(features.slice(index, index + itemsPerRow));
    }
    return acc;
  }, [] as (typeof features)[]);

  const totalRows = rows.length;

  // Autoplay effect
  useEffect(() => {
    if (showAll) return;

    const timer = setInterval(() => {
      setCurrentRows((prev) => {
        const [first, second] = prev;
        const nextSecond = (second + 1) % totalRows;
        const nextFirst = (first + 1) % totalRows;
        return [nextFirst, nextSecond];
      });
    }, 4000); // Increased time to allow for full animation

    return () => clearInterval(timer);
  }, [showAll, totalRows]);

  //   // Get visible rows
  //   const visibleRows = showAll
  //     ? rows
  //     : currentRows.map((rowIndex) => ({
  //         data: rows[rowIndex],
  //         index: rowIndex,
  //       }));

  return (
    <Container id='features' className='lg:w-4/5 mx-auto'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        <motion.div variants={animationVariant('y', -20)}>
          <p className='text-primary-color tracking-widest uppercase text-center'>
            Our Service
          </p>
          <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
            Experience our <span className='text-primary-color'>features</span>
          </h2>
        </motion.div>

        <motion.div variants={animationVariant('x', -20)}>
          <div
            className='relative overflow-hidden'
            // style={{ height: `${rowHeight * 2}px` }}
          >
            <div className='relative w-full'>
              <AnimatePresence initial={false} mode='popLayout'>
                {currentRows.map((rowIndex, displayIndex) => (
                  <motion.div
                    key={`row-${rowIndex}`}
                    // initial={{
                    //   y: rowHeight * 1.5,
                    //   opacity: 0,
                    //   scale: 0.95,
                    // }}
                    // animate={{
                    //   y: displayIndex * rowHeight,
                    //   opacity: 1,
                    //   scale: 1,
                    //   transition: {
                    //     y: {
                    //       type: 'tween',
                    //       duration: 0.8,
                    //       ease: 'easeOut',
                    //     },
                    //     opacity: {
                    //       duration: 0.4,
                    //       ease: 'easeOut',
                    //     },
                    //     scale: {
                    //       duration: 0.4,
                    //       ease: 'easeOut',
                    //     },
                    //   },
                    // }}
                    // exit={{
                    //   y: -rowHeight,
                    //   opacity: 0,
                    //   scale: 1,
                    //   transition: {
                    //     y: {
                    //       type: 'tween',
                    //       duration: 0.8,
                    //       ease: 'easeIn',
                    //     },
                    //     opacity: {
                    //       duration: 0.3,
                    //       delay: 0.3,
                    //     },
                    //   },
                    // }}
                    className='absolute w-full'
                    style={{
                      zIndex: displayIndex === 0 ? 1 : 2,
                    }}
                  >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-4 md:px-0'>
                      {rows[rowIndex].map((item, itemIndex) => (
                        <motion.div
                          key={item.id}
                          initial={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              duration: 0.4,
                              delay: itemIndex * 0.1,
                              ease: 'easeOut',
                            },
                          }}
                          className={`
                            bg-white/10 p-6 md:p-10 rounded-md transition-all duration-300 relative
                            ${
                              showAll || displayIndex === 0
                                ? 'hover:border-primary-color/50 hover:shadow-xl hover:shadow-primary-color/20'
                                : ''
                            }
                          `}
                        >
                          <div className='flex flex-col h-full'>
                            <div className='flex flex-col gap-3'>
                              <span
                                className='w-14 p-3 rounded-full h-14 text-primary-color/70 bg-primary-gray/10'
                                dangerouslySetInnerHTML={{
                                  __html: item.icon.replace(
                                    '<svg',
                                    '<svg class="w-full h-full fill-current"'
                                  ),
                                }}
                              />
                              <p className='text-xl md:text-2xl font-bold mb-3 md:mb-5 text-primary-color'>
                                {item.title}
                              </p>
                            </div>
                            <div
                              className='flex-grow text-sm md:text-base'
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                            <div className='mt-3 md:mt-5'>
                              <p className='text-primary-grayText/40 font-bold text-base md:text-lg'>
                                {item.id}
                              </p>
                            </div>
                          </div>

                          {displayIndex === 1 && !showAll && (
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent from-10% via-black/50 via-30% to-black/90 pointer-events-none rounded-md'></div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {!showAll && (
              <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none'></div>
            )}
          </div>
        </motion.div>

        {features.length > 6 && (
          <motion.div
            variants={animationVariant('y', 20)}
            className='flex justify-center mt-8'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='bg-primary-color/20 hover:bg-primary-color/30 text-primary-color px-6 py-3 rounded-md transition-all duration-300'
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </Container>
  );
}
