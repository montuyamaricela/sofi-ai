"use client";

import React from "react";
import { Container } from "./common/Container";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { integrations } from "../data";
import logo from "@/public/images/logo/logo-white.png";
import Image from "next/image";

export default function Integration() {
  // Randomize integrations using Fisher-Yates shuffle algorithm
  const randomizeArray = (array: typeof integrations) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const randomizedIntegrations = randomizeArray(integrations);

  return (
    <Container id='integrations'>
      <div className='text-center mb-5 lg:mb-10 overflow-hidden'>
        <h2 className='text-sm text-primary-color uppercase tracking-wide mb-3'>
          Integrations
        </h2>
        <h3 className='text-4xl md:text-5xl font-bold mb-6'>
          Connect SOFI AI with the <br />{" "}
          <span className='text-primary-color'>your everyday tasks</span>
        </h3>
      </div>
      <div className='relative w-full overflow-hidden flex flex-col items-center justify-center'>
        <div className='absolute mx-auto w-40 h-40 lg:w-80 lg:h-80 rounded-full flex items-center justify-center bg-black border-white/30  border z-40 animate-[spin-clockwise_20s_linear_infinite]'>
          <Image src={logo} alt='logo' className='w-14 lg:w-28 h-14 lg:h-28 ' />
        </div>
        <InfiniteMovingCards
          items={randomizedIntegrations}
          speed='slow'
          direction='left'
        />
        <InfiniteMovingCards
          items={randomizedIntegrations}
          speed='slow'
          direction='right'
        />
      </div>
    </Container>
  );
}
