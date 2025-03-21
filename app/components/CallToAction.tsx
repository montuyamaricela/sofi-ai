'use client';
import Link from 'next/link';
import { Container } from './common/Container';
import { motion } from 'framer-motion';
import { animationVariant } from '@/utils/animation';

export default function CallToAction() {
  return (
    <div className='relative overflow-hidden'>
      {/* Bottom gradient overlay */}
      <div className='absolute top-0 left-0 right-0 h-20 z-10 bg-gradient-to-b from-black pointer-events-none'></div>
      <Container>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          className='w-full'
        >
          <div className='max-w-7xl mx-auto relative z-10'>
            {/* <div className='absolute inset-0 z-10'>
              <div className='absolute -top-40 -left-20 w-96 h-96 bg-primary-color/20 rounded-full blur-[120px] z-10 '></div>
              <div className='absolute -bottom-40 right-10 w-96 h-96 bg-primary-color/20 rounded-full blur-[120px] z-10 hidden md:block'></div>
            </div> */}
            <div className='flex flex-col items-center justify-center gap-5 relative'>
              <motion.div variants={animationVariant('y', -20)}>
                <h2 className='text-white text-4xl lg:text-6xl font-bold text-center'>
                  START SMART{' '}
                  <span className='text-primary-color'>WITH SOFI</span>
                </h2>
              </motion.div>
              <motion.div variants={animationVariant('y', 20)}>
                <Link
                  href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09J3y1Vn26ezSqOVH8zuujqHnA43Ks41SmISgRGjFvTo3TqiMezwT0hrp2FpF3uX8OSdxGVHhQ'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='border mx-auto border-primary-color text-white px-8 py-3 rounded hover:bg-primary-color hover:text-white transition-colors duration-300 z-40 relative '>
                    SCHEDULE A CALL NOW
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
