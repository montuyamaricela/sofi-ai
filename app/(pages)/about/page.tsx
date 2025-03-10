"use client";
import { Container } from "@/app/components/common/Container";
import { achievements } from "@/app/data";
import CallToAction from "@/app/components/CallToAction";
import { motion } from "framer-motion";
import { animationVariant } from "@/utils/animation";
export default function AboutPage() {
  return (
    <main className=''>
      <Container>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          className='w-full'
        >
          <div className='text-center mb-10 lg:mb-20'>
            <motion.div variants={animationVariant("x", -20)}>
              {" "}
              <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
                About <span className='text-primary-color'>Us</span>
              </h1>
            </motion.div>
            <motion.div variants={animationVariant("x", 20)}>
              <p className='text-primary-grayText max-w-2xl mx-auto'>
                Discover our story and meet the innovative minds behind SOFI
                AI&apos;s success
              </p>
            </motion.div>
          </div>

          {/* Mission Section */}
          <div className='rounded-2xl bg-gradient-to-br from-primary-color/10 via-transparent to-white/5 p-5 lg:p-8'>
            <div className='lg:w-3/4 mx-auto'>
              <motion.div variants={animationVariant("y", 20)}>
                <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                  Our <span className='text-primary-color'>Mission</span>
                </h2>
                <p className='text-primary-grayText mb-6 text-justify'>
                  At SOFI AI, we are dedicated to revolutionizing customer
                  interactions through intelligent automation. Our mission is to
                  empower businesses with AI-driven solutions that enhance
                  efficiency, improve user experience, and streamline
                  operations.
                </p>
                <p className='text-primary-grayText text-justify'>
                  With seamless integrations, smart automation, and a deep
                  understanding of brand communication, SOFI AI adapts to your
                  needs—whether it&apos;s personalized chat, voice assistance,
                  or e-commerce automation. Our AI is built to learn, evolve,
                  and optimize every customer interaction, ensuring your
                  business stays ahead in the digital landscape.
                </p>
              </motion.div>
              <motion.div variants={animationVariant("y", -20)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className='bg-white/5 backdrop-blur-3xl p-6 rounded-lg border border-white/30 text-center'
                    >
                      <div className='text-3xl lg:text-4xl font-bold text-primary-color mb-2'>
                        {achievement.number}
                      </div>
                      <div className='text-primary-grayText text-sm'>
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
      <CallToAction />
    </main>
  );
}
