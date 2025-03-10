"use client";

import React from "react";
import { Container } from "./common/Container";
import { testimonials } from "../data";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";

export default function Testimonial() {
  return (
    <Container id='testimonials'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        <div className='text-center mb-5 lg:mb-10'>
          <motion.div variants={animationVariant("x", -20)}>
            <h2 className='text-sm text-primary-color uppercase tracking-wide mb-3'>
              Testimonials
            </h2>
          </motion.div>
          <motion.div variants={animationVariant("x", 20)}>
            <h3 className='text-4xl md:text-5xl font-bold'>
              What Our <span className='text-primary-color'>Clients</span> Say
            </h3>
          </motion.div>
        </div>

        <motion.div variants={animationVariant("y", 20)}>
          <Swiper
            className='max-w-[80vw] lg:max-w-7xl'
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true, // Add this line to pause on hover
            }}
            loop={true}
            pagination={{
              clickable: true,
              enabled: true, // Enable pagination by default
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              enabled: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 20,
                // navigation: {
                //   enabled: false,
                // },
                // pagination: {
                //   enabled: false, // Disable pagination on small screens
                // },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                navigation: {
                  enabled: false,
                },
                pagination: {
                  enabled: true, // Enable pagination on medium screens
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                  enabled: true,
                },
                pagination: {
                  enabled: true, // Enable pagination on large screens
                },
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard
                  client={item.client}
                  author={item.author}
                  testimonial={item.testimonial}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </Container>
  );
}
