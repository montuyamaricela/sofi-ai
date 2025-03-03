import React from "react";
import { Container } from "./common/Container";
import { whyChooseUs } from "@/app/data";

export default function WhyChooseUs() {
  return (
    <Container className='relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-primary-color/20 to-transparent' />

      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-sm text-primary-color uppercase tracking-wide mb-3'>
            Why Choose Us?
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-6'>
            Let <span className='text-primary-color'>SOFI AI</span> Reply
            <br />
            for You!
          </h3>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-4/5 mx-auto'>
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className='group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-color/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-color/20'
            >
              {/* Content */}
              <div
                className='text-lg text-white/90 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: item.description }}
              />

              {/* Hover effect gradient */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary-color/0 via-primary-color/5 to-primary-color/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
