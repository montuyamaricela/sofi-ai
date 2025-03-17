'use client';

import React, { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import SplashScreen from './SplashScreen';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Chatbot from './Chatbot';
export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className='bg-black'>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div
          className={`animate-fadeIn relative ${
            isHome ? 'animate-slideUp' : ''
          }`}
          style={{
            animation: isHome ? 'fadeIn 0.6s ease-in-out forwards' : '',
          }}
        >
          <NavigationBar />
          {children}
          <Footer />
          <Chatbot />
        </div>
      )}
    </div>
  );
}
