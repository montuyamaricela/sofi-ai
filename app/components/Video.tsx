import React from "react";
import { Container } from "./common/Container";

export default function Video() {
  return (
    <Container className='bg-secondary-grayBg'>
      <h2 className='lg:text-5xl text-3xl font-bold '>
        What is <span className='text-primary-color'>SOFI?</span>
      </h2>
      <div className='mt-5 lg:mt-10 w-full max-w-[900px] mx-auto relative aspect-video'>
        <iframe
          src='https://www.sofitech.ai/videos/landscape_english_wcaption.mp4'
          frameBorder='0'
          allowFullScreen
          title='SOFI Video'
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>
    </Container>
  );
}
