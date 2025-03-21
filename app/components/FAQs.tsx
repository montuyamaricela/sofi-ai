'use client';
import { Container } from './common/Container';
import { faqs } from '../data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { animationVariant } from '@/utils/animation';
import Link from 'next/link';

export default function FAQs() {
  return (
    <Container id='faqs' className='overflow-hidden'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute top-20 left-10 w-96 h-96 bg-primary-color/20 rounded-full blur-[120px]'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-10 lg:gap-0'>
            <motion.div variants={animationVariant('x', -20)}>
              <h2 className='text-white text-4xl lg:text-6xl font-bold my-4'>
                Frequently asked{' '}
                <span className='text-primary-color'>questions</span>
              </h2>
              <Link
                href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09J3y1Vn26ezSqOVH8zuujqHnA43Ks41SmISgRGjFvTo3TqiMezwT0hrp2FpF3uX8OSdxGVHhQ'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='border-transparent hover:bg-white hover:text-primary-color  border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-bold bg-primary-color'>
                  Contact Now
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={animationVariant('x', 20)}>
              <Accordion type='single' collapsible className='space-y-4'>
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${faq.id}`}
                    className='bg-[#1A1A1A] rounded-lg border-none data-[state=open]:bg-[#1A1A1A]'
                  >
                    <AccordionTrigger className='text-white font-semibold p-7 text-base md:text-lg [&[data-state=open]>svg]:rotate-180 hover:no-underline'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-gray-400 mx-6 border-t border-gray-700 pt-5 text-base'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
