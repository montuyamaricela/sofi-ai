/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Container } from "./common/Container";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import phoneImage from "@/public/images/phone-image.png";
import { TypewriterEffect } from "./ui/typewriter";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";

export default function Hero() {
  const greetings = [
    {
      text: "Hello Sissy!",
      className: "text-primary-color",
    },
    {
      text: "Maayong adlaw! Kumusta?",
      className: "text-primary-color",
    },
    {
      text: "안녕하세요! 잘 지내세요?",
      className: "text-primary-color",
    },
    {
      text: "こんにちは！お元気ですか？",
      className: "text-primary-color",
    },
    {
      text: "Bonjour ! Comment ça va",
      className: "text-primary-color",
    },
    {
      text: "Mustah knah? 😜",
      className: "text-primary-color",
    },
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Calculate total animation duration based on text length
    const getAnimationDuration = (text: string) => {
      // Base duration of 1.5 seconds + 100ms per character
      return 1500 + text.length * 100;
    };

    const rotateGreetings = () => {
      const currentText = greetings[currentGreetingIndex].text;
      const duration = getAnimationDuration(currentText);

      const timeout = setTimeout(() => {
        setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
        setKey((prev) => prev + 1);
      }, duration);

      return () => clearTimeout(timeout);
    };

    return rotateGreetings();
  }, [currentGreetingIndex, greetings]);

  return (
    <Container className='flex items-center lg:h-[85vh]' id='hero'>
      {/* <motion.div initial='offscreen' whileInView='onscreen'> */}
      <div className='grid gap-10 md:gap-5 lg:gap-0 md:grid-cols-2 items-center'>
        <div className='space-y-5 lg:space-y-8'>
          <motion.div variants={animationVariant("y", -20)}>
            <div className='flex items-center gap-1 text-primary-color'>
              <MessageCircle className='w-8 h-8' fill='currentColor' />
              <TypewriterEffect
                key={key}
                words={[greetings[currentGreetingIndex]]}
              />
            </div>
          </motion.div>
          <motion.div variants={animationVariant("x", -20)}>
            <h1 className='text-4xl xl:text-5xl font-bold'>
              Unlock the{" "}
              <span className='text-primary-color'>Full Potential</span> of AI
              for Your Brand
            </h1>
          </motion.div>
          <motion.div variants={animationVariant("y", 20)}>
            {" "}
            <p className=' text-primary-grayText'>
              Revolutionize your brand&apos;s customer experience with
              intelligent, AI-powered automation. Boost efficiency, enhance
              customer engagement, and scale effortlessly with SOFI AI.
            </p>{" "}
          </motion.div>

          <motion.div variants={animationVariant("x", 20)}>
            <div className='flex gap-5 items-center'>
              <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-bold bg-primary-color'>
                Book Now
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div variants={animationVariant("x", 20)}>
          <div className='relative'>
            <Image
              src={phoneImage}
              alt='phone image'
              className='mx-auto w-96 md:w-full xl:w-3/5'
            />
          </div>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </Container>
  );
}
