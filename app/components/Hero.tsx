import React from "react";
import { Container } from "./common/Container";
import { Button } from "./ui/button";
import { MessageCircle, PlayIcon } from "lucide-react";
import Image from "next/image";
import phoneImage from "@/public/images/phone-image.png";

export default function Hero() {
  return (
    <Container className='lg:h-[85vh] flex items-center' id=''>
      <div className='grid gap-10 md:gap-5 lg:gap-0 md:grid-cols-2 items-center'>
        <div className='space-y-5 lg:space-y-8'>
          <div className='flex items-center gap-1 text-primary-color'>
            <MessageCircle className='w-6 h-6' fill='currentColor' />
            <p className='text-lg'>Hey Sissy! </p>
          </div>
          <h1 className='text-4xl lg:text-6xl font-bold'>
            Unlock the{" "}
            <span className='text-primary-color'>Full Potential</span> of AI for
            Your Brand
          </h1>
          <p className=' text-primary-grayText'>
            Revolutionize your brand&apos;s customer experience with
            intelligent, AI-powered automation. Boost efficiency, enhance
            customer engagement, and scale effortlessly with SOFI AI.
          </p>
          <div className='flex gap-5 items-center'>
            <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-bold bg-primary-color'>
              Book Now
            </Button>
            <Button className='border-transparent h-10 w-10 hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base p-6 rounded-full uppercase font-bold bg-primary-color'>
              <PlayIcon fill='currentColor' />
            </Button>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={phoneImage}
            alt='placeholder'
            className='mx-auto w-full'
          />
          {/* <div className='lg:block hidden absolute -bottom-10 left-0 bg-black border border-primary-color pt-20 pb-8 px-5 w-72 rounded-xl text-3xl font-bold'>
            <p>SMART.</p>
            <p>OPTIMIZED.</p>
            <p>FUNCTIONAL.</p>
            <p>INTELLIGENCE.</p>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
