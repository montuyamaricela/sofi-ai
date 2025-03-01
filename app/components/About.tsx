import React from "react";
import { Container } from "./common/Container";
import aboutImage from "@/public/images/about-image.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
export default function About() {
  return (
    <Container id='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center'>
        <div className='relative'>
          <Image src={aboutImage} alt='placeholder' className='mx-auto' />
        </div>
        <div className=''>
          <p className='text-primary-color tracking-widest uppercase'>
            About us
          </p>
          <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5'>
            Transforming Businesses with AI{" "}
            <span className='text-primary-color'>Innovation</span>
          </h2>
          <p className='text-primary-grayText'>
            At SOFI AI, we are dedicated to{" "}
            <span className='text-primary-color'>
              revolutionizing customer interactions{" "}
            </span>
            through{" "}
            <span className='text-primary-color'>intelligent automation.</span>{" "}
            Our mission is to empower businesses with
            <span className='text-primary-color'>AI-driven solutions</span> that
            enhance efficiency, improve user experience, and streamline
            operations.
          </p>
          <div className='mt-5 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-5'>
            <Link href='/about'>
              <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-7 rounded-sm uppercase font-bold bg-primary-color'>
                Know More
              </Button>
            </Link>
            <div className='flex items-center gap-2'>
              <p className='text-primary-color font-bold text-4xl lg:text-5xl'>
                5.0
              </p>
              <div className='flex flex-col items-start gap-2'>
                <p className='text-yellow-400 flex'>
                  <Star fill='currentColor' className='w-4 h-4 lg:w-5 lg:h-5' />
                  <Star fill='currentColor' className='w-4 h-4 lg:w-5 lg:h-5' />
                  <Star fill='currentColor' className='w-4 h-4 lg:w-5 lg:h-5' />
                  <Star fill='currentColor' className='w-4 h-4 lg:w-5 lg:h-5' />
                  <Star fill='currentColor' className='w-4 h-4 lg:w-5 lg:h-5' />
                </p>
                <p className='text-primary-grayText font-light text-sm'>
                  Customer rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
