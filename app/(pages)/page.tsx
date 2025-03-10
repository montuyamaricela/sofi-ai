import Hero from "@/app/components/Hero";
import Video from "@/app/components/Video";
import About from "@/app/components/About";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Features from "@/app/components/Features";
import Testimonials from "@/app/components/Testimonials";
import HowItWorks from "@/app/components/HowItWorks";
import FAQs from "@/app/components/FAQs";
import CallToAction from "@/app/components/CallToAction";
import Integration from "@/app/components/Integration";
import Testimonial from "@/app/components/Testimonial";
export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <About />
      <WhyChooseUs />
      <Features />
      <HowItWorks />
      <Integration />
      {/* <Testimonials /> */}
      <Testimonial />
      <FAQs />
      <CallToAction />
    </>
  );
}
