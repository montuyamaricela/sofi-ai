import React from "react";
import { Container } from "./common/Container";
import { features } from "../data";
export default function Features() {
  return (
    <Container>
      <div>
        <p className='text-primary-color tracking-widest uppercase text-center'>
          Our Service
        </p>
        <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
          Experience our <br />{" "}
          <span className='text-primary-color'>features</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto b'>
          {features.map((item) => (
            <div key={item.id} className='bg-white/10 p-10 rounded-md'>
              <p className='text-primary-color text-2xl font-bold'>
                {item.title}
              </p>
              <p className='text-primary-grayText'>{item.description}</p>
              <div className='mt-5'>
                <p className='text-primary-grayText/40 font-bold'>{item.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
