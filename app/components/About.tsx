'use client';
import React from 'react';
import { Container } from './common/Container';
import aboutImage from '@/public/images/about-image.png';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { animationVariant } from '@/utils/animation';
export default function About() {
  return (
    <div className='relative'>
      <Container id='about'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          className='w-full'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center'>
            <motion.div variants={animationVariant('x', -20)}>
              <div className='relative'>
                <Image src={aboutImage} alt='placeholder' className='mx-auto' />
              </div>
            </motion.div>
            <div className=''>
              <motion.div variants={animationVariant('y', -20)}>
                <p className='text-primary-color tracking-widest uppercase'>
                  About us
                </p>
                <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5'>
                  Transforming Businesses with AI{' '}
                  <span className='text-primary-color'>Innovation</span>
                </h2>
              </motion.div>

              <motion.div variants={animationVariant('x', 20)}>
                <p className='text-primary-grayText'>
                  At SOFI AI, we are dedicated to{' '}
                  <span className='text-primary-color'>
                    revolutionizing customer interactions{' '}
                  </span>
                  through{' '}
                  <span className='text-primary-color'>
                    intelligent automation.
                  </span>{' '}
                  Our mission is to empower businesses with{' '}
                  <span className='text-primary-color'>
                    AI-driven solutions
                  </span>{' '}
                  that enhance efficiency, improve user experience, and
                  streamline operations.
                </p>
              </motion.div>
              <motion.div variants={animationVariant('y', 20)}>
                <div className='mt-5 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-5'>
                  <Link href='/about'>
                    <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-7 rounded-sm uppercase font-bold bg-primary-color'>
                      Know More
                    </Button>
                  </Link>
                  <div className='flex items-center gap-2'>
                    <p className='text-primary-color font-bold text-4xl lg:text-5xl'>
                      5.0
                    </p>
                    <div className='flex flex-col items-start gap-2'>
                      <p className='text-yellow-400 flex'>
                        <Star
                          fill='currentColor'
                          className='w-4 h-4 lg:w-5 lg:h-5'
                        />
                        <Star
                          fill='currentColor'
                          className='w-4 h-4 lg:w-5 lg:h-5'
                        />
                        <Star
                          fill='currentColor'
                          className='w-4 h-4 lg:w-5 lg:h-5'
                        />
                        <Star
                          fill='currentColor'
                          className='w-4 h-4 lg:w-5 lg:h-5'
                        />
                        <Star
                          fill='currentColor'
                          className='w-4 h-4 lg:w-5 lg:h-5'
                        />
                      </p>
                      <p className='text-primary-grayText font-light text-sm'>
                        Customer rating
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom gradient overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-black to-primary-color/20 pointer-events-none'></div>
    </div>
  );
}
