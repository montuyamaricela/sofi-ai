"use client";
import React from "react";
import { Container } from "./common/Container";
import { howItWorks } from "../data";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";
export default function HowItWorks() {
  return (
    <Container
      id='solutions'
      className='bg-gradient-to-br from-gray-950 via-black to-gray-950'
    >
      {/* <motion.div initial='offscreen' whileInView='onscreen' className='w-full'> */}
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-20 left-10 w-96 h-96 bg-primary-color/20 rounded-full blur-[120px]'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]'></div>
        </div>
        <div className='mb-10 lg:mb-12'>
          <motion.div variants={animationVariant("x", -20)}>
            <p className='text-primary-color uppercase tracking-widest'>
              HOW IT WORKS
            </p>
            <h2 className='text-white text-4xl lg:text-6xl font-bold mt-4'>
              SOFI AI <br />
              <span className='text-primary-color'>ONBOARDING PROCESS</span>
            </h2>
          </motion.div>
          <motion.div variants={animationVariant("y", 20)}>
            <Link
              href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09J3y1Vn26ezSqOVH8zuujqHnA43Ks41SmISgRGjFvTo3TqiMezwT0hrp2FpF3uX8OSdxGVHhQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='mt-8 border border-primary-color text-white px-8 py-3 rounded hover:bg-primary-color hover:text-white transition-colors duration-300'>
                ONBOARD NOW!
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={animationVariant("y", 20)}>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8'>
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className='bg-white/5 backdrop-blur-3xl p-8 rounded-lg border border-white/30 hover:border-primary-color/30 hover:bg-white/10 hover:backdrop-blur-2xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
              >
                <div className='mb-4'>
                  <span className='bg-primary-color/30 text-white px-4 py-1 rounded-full text-sm'>
                    Step {String(item.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className='text-white text-2xl font-bold mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-400'>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </Container>
  );
}
