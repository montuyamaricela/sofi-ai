import Link from "next/link";
import { Container } from "./common/Container";

export default function CallToAction() {
  return (
    <Container
      id='solutions'
      className='bg-gradient-to-br from-gray-950 via-black to-gray-950 py-10 lg:py-0'
    >
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='absolute inset-0 z-10'>
          <div className='absolute -top-40 -left-20 w-96 h-96 bg-primary-color/20 rounded-full blur-[120px] z-10 '></div>
          <div className='absolute -bottom-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] z-10'></div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 relative'>
          <h2 className='text-white text-4xl lg:text-6xl font-bold text-center'>
            START SMART <span className='text-primary-color'>WITH SOFI</span>
          </h2>
          <Link
            href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09J3y1Vn26ezSqOVH8zuujqHnA43Ks41SmISgRGjFvTo3TqiMezwT0hrp2FpF3uX8OSdxGVHhQ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='border mx-auto border-primary-color text-white px-8 py-3 rounded hover:bg-primary-color hover:text-white transition-colors duration-300 z-40 relative '>
              SCHEDULE A CALL NOW
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
