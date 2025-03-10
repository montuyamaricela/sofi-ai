"use client";
import React, { useState } from "react";
import { Container } from "./common/Container";
import { features } from "../data";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";

export default function Features() {
  const [showAll, setShowAll] = useState(false);
  const displayedFeatures = showAll ? features : features.slice(0, 6);

  return (
    <Container id='features'>
      <motion.div initial='offscreen' whileInView='onscreen' className='w-full'>
        <motion.div variants={animationVariant("y", -20)}>
          <p className='text-primary-color tracking-widest uppercase text-center'>
            Our Service
          </p>
          <h2 className='lg:text-5xl text-3xl font-bold mt-2 mb-5 lg:mb-10 text-center'>
            Experience our <span className='text-primary-color'>features</span>
          </h2>
        </motion.div>

        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto]'>
            {displayedFeatures.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className={`bg-white/10 p-10 rounded-md transition-all duration-300 relative ${
                  showAll || index < 3
                    ? "hover:border-primary-color/50 hover:shadow-xl hover:shadow-primary-color/20"
                    : ""
                }`}
              >
                <div className='flex flex-col h-full'>
                  <p className='text-primary-color text-2xl font-bold mb-5'>
                    {item.title}
                  </p>
                  <div
                    className='flex-grow'
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className='mt-5'>
                    <p className='text-primary-grayText/40 font-bold text-lg'>
                      {item.id}
                    </p>
                  </div>
                </div>

                {!showAll && index >= 3 && (
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent from-10% via-black/50 via-30% to-black/90 pointer-events-none rounded-md'></div>
                )}
              </motion.div>
            ))}
          </div>

          {!showAll && features.length > 6 && (
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none'></div>
          )}
        </div>

        {features.length > 6 && (
          <motion.div
            variants={animationVariant("y", 20)}
            className='flex justify-center mt-8'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='bg-primary-color/20 hover:bg-primary-color/30 text-primary-color px-6 py-3 rounded-md transition-all duration-300'
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </motion.div>
    </Container>
  );
}
