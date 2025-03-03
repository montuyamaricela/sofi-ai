import { Container } from "@/app/components/common/Container";
import { achievements, values } from "@/app/data";
import { CheckCircle } from "lucide-react";
import CallToAction from "@/app/components/CallToAction";
export default function AboutPage() {
  return (
    <main className=''>
      <Container>
        <div className='text-center mb-20'>
          <h1 className='text-4xl lg:text-6xl font-bold mb-4'>
            About <span className='text-primary-color'>Us</span>
          </h1>
          <p className='text-primary-grayText max-w-2xl mx-auto'>
            Discover our story and meet the innovative minds behind SOFI
            AI&apos;s success
          </p>
        </div>

        {/* Mission Section */}
        <div className='mb-20 rounded-2xl bg-gradient-to-br from-primary-color/10 via-transparent to-white/5 p-8'>
          <div className='w-3/4 mx-auto'>
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
                Our <span className='text-primary-color'>Mission</span>
              </h2>
              <p className='text-primary-grayText mb-6'>
                At SOFI AI, we are dedicated to revolutionizing customer
                interactions through intelligent automation. Our mission is to
                empower businesses with AI-driven solutions that enhance
                efficiency, improve user experience, and streamline operations.
              </p>
              <p className='text-primary-grayText'>
                With seamless integrations, smart automation, and a deep
                understanding of brand communication, SOFI AI adapts to your
                needs—whether it&apos;s personalized chat, voice assistance, or
                e-commerce automation. Our AI is built to learn, evolve, and
                optimize every customer interaction, ensuring your business
                stays ahead in the digital landscape.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-10'>
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
          </div>
        </div>

        {/* Values Section */}
        <div className='py-10 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-color/30  via-transparent to-primary-color/30 p-8'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-10 text-center'>
            Our <span className='text-primary-color'>Values</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-3xl p-6 rounded-lg border border-white/30'
              >
                <CheckCircle className='text-primary-color w-8 h-8 mb-4' />
                <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                <p className='text-primary-grayText text-sm'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <CallToAction />
    </main>
  );
}
