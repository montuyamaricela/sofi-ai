"use client";

import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import SplashScreen from "./SplashScreen";

export default function Main({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className='bg-black'>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <div
          className='animate-fadeIn'
          style={{
            animation: "fadeIn 0.6s ease-in-out forwards",
          }}
        >
          <NavigationBar />
          {children}
        </div>
      )}
    </div>
  );
}
