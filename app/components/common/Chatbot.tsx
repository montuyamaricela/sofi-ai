import React from 'react';
import Logo from '@/public/images/logo/logo.png';
import Image from 'next/image';

export default function Chatbot() {
  return (
    <div className='fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group cursor-pointer'>
      <div className='absolute bottom-full right-0 mb-2 hidden group-hover:block'>
        <div className='bg-white text-black px-3 py-1 rounded-md text-sm whitespace-nowrap shadow-lg'>
          SOFI AI Chatbot
          {/* Triangle pointer */}
          <div className='absolute -bottom-1 right-7 w-2 h-2 bg-white transform rotate-45'></div>
        </div>
      </div>
      <div className='rounded-full w-14 h-14 md:w-16 md:h-16 p-3 bg-white'>
        <Image src={Logo} alt='logo' className='w-full h-full' />
      </div>
    </div>
  );
}
