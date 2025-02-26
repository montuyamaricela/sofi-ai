/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import svgLogo from "@/public/logo/vector-logo.png";
import { useEffect, useState } from "react";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        finishLoading();
      }, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
      w-full h-screen bg-black flex items-center justify-center z-50 fixed inset-0 overflow-hidden
      transition-all duration-700 ease-in-out
      ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
    >
      <div>
        <div className='relative m-auto'>
          <Image
            src={svgLogo}
            priority
            alt='Logo'
            className='w-56 h-56 lg:w-56 lg:h-56 2xl:w-56 2xl:h-56 opacity-90 grayscale object-contain'
          />
          <Image
            src={svgLogo}
            priority
            alt='Animated Logo'
            className='absolute top-0 left-0 opacity-5 w-56 h-56 lg:w-56 lg:h-56 2xl:w-56 2xl:h-56 animate-wipeAnimation object-contain'
          />
          <Image
            src={svgLogo}
            priority
            alt='Animated Logo'
            className='absolute top-0 left-0 w-56 h-56 lg:w-56 lg:h-56 2xl:w-56 2xl:h-56 animate-wipeAnimation2 object-contain'
          />
        </div>
      </div>
    </div>
  );
}
