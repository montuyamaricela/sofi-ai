import React from "react";
import { Container } from "./common/Container";
import { whyChooseUs } from "../data";

export default function WhyChooseUs() {
  return (
    <Container className='bg-primary-color'>
      <div className=''>
        <p className='text-white tracking-widest uppercase text-center'>
          Why Choose Us?
        </p>
        <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
          Let SOFI AI Reply <br /> for You!
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:w-3/4 mx-auto'>
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className='bg-black/40 p-10 rounded-md transform transition-transform duration-300 hover:-translate-y-2'
            >
              <p className='text-white text-center'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
