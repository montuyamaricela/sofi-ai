"use client";
import React from "react";
import { Container } from "./common/Container";
import { motion } from "framer-motion";
import { halfFlipAnimation } from "@/utils/animation";

export default function Video() {
  return (
    <Container className='bg-secondary-grayBg'>
      {/* <motion.div initial='offscreen' whileInView='onscreen' className='w-full'> */}
      <motion.div variants={halfFlipAnimation()}>
        <h2 className='lg:text-5xl text-3xl font-bold text-center'>
          What is <span className='text-primary-color'>SOFI?</span>
        </h2>
      </motion.div>
      {/* <motion.div variants={animationVariant("y", 20)}> */}
      <div className='mt-5 lg:mt-10 w-full max-w-[900px] mx-auto relative aspect-video'>
        <iframe
          src='https://www.sofitech.ai/videos/landscape_english_wcaption.mp4'
          frameBorder='0'
          allowFullScreen
          title='SOFI Video'
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>
      {/* </motion.div> */}
      {/* </motion.div> */}
    </Container>
  );
}
