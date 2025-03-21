import Hero from '@/app/components/Hero';
import Video from '@/app/components/Video';
import About from '@/app/components/About';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Features from '@/app/components/Features';
import HowItWorks from '@/app/components/HowItWorks';
import FAQs from '@/app/components/FAQs';
import CallToAction from '@/app/components/CallToAction';
import Integration from '../components/Integration';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <section id='home'>
        <Hero />
      </section>
      <section id='video'>
        <Video />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='why-choose-us'>
        <WhyChooseUs />
      </section>
      <section id='features'>
        <Features />
        {/* <FeatureTest /> */}
      </section>
      <section id='how-it-works'>
        <HowItWorks />
      </section>
      <section id='integration'>
        <Integration />
      </section>
      <section id='testimonial'>
        <Testimonial />
      </section>
      <section id='faqs'>
        <FAQs />
      </section>
      <section id='call-to-action'>
        <CallToAction />
      </section>
    </>
  );
}
