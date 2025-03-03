"use client";

// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Container } from "./common/Container";
import { testimonials } from "@/app/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Container className='relative bg-secondary-lightGrayBg mx-5 md:mx-10 rounded-xl'>
      <div className='overflow-hidden'>
        <div className='mb-12 px-4'>
          <p className='text-primary-color tracking-widest uppercase text-center'>
            Testimonials
          </p>
          <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
            What our respectable <br />
            <span className='text-primary-color'>clients says</span>
          </h2>
        </div>

        <Swiper
          className='lg:!pb-12 px-4 max-w-[80vw] lg:max-w-7xl mx-auto '
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={false}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
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
              spaceBetween: 20,
              navigation: {
                enabled: false,
              },
              pagination: {
                enabled: false, // Disable pagination on small screens
              },
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
            <SwiperSlide
              key={item.id}
              className='p-8 bg-[#1A1A1A] rounded-lg shadow'
            >
              <div className='flex flex-col '>
                <div className='flex gap-1 mb-4'>
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className='w-5 h-5 text-yellow-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                <p className='text-gray-300 mb-6 text-lg'>{item.testimonial}</p>

                <div className='flex items-center gap-3 mt-auto'>
                  <div className='flex-shrink-0'>
                    <Image
                      src={item.image}
                      alt={item.client}
                      width={50}
                      height={50}
                      className='rounded-full'
                    />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>{item.author}</h4>
                    <p className='text-sm text-gray-400'>{item.client}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
