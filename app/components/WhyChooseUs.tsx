"use client";
import React from "react";
import { Container } from "./common/Container";
import { whyChooseUs } from "@/app/data";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";

export default function WhyChooseUs() {
  return (
    <Container className='relative overflow-hidden'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        {/* Background gradient */}
        <div className='absolute inset-0 bg-gradient-to-b from-primary-color/20 to-transparent' />

        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='text-center mb-10'>
            <motion.div variants={animationVariant("y", -20)}>
              <h2 className='text-sm text-primary-color uppercase tracking-wide mb-3'>
                Why Choose Us?
              </h2>
              <h3 className='text-4xl md:text-5xl font-bold mb-6'>
                Let <span className='text-primary-color'>SOFI AI</span> Reply
                <br />
                for You!
              </h3>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-4/5 mx-auto'>
            {whyChooseUs.map((item) => (
              <motion.div
                variants={animationVariant("y", 20)}
                key={item.id}
                className='group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-color/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-color/20'
              >
                {/* Content */}
                <div
                  className='text-lg text-white/90 leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* Hover effect gradient */}
                <div className='absolute inset-0 bg-gradient-to-r from-primary-color/0 via-primary-color/5 to-primary-color/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
