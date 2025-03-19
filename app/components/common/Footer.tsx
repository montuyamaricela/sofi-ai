import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, legalLinks } from '@/app/data';
import logo from '@/public/images/logo/logo-with-name.png';
export default function Footer() {
  return (
    <footer className='bg-secondary-lightGray'>
      <div className='container mx-auto pt-10 lg:pt-20 pb-10 px-5'>
        <div className='w-full'>
          {/* Logo */}

          <div>
            <Link href='/' className='w-fit'>
              <Image
                src={logo}
                alt='SOFI AI Logo'
                className='h-14 md:h-20 w-auto mx-auto lg:mx-0'
              />
            </Link>
            <div className='flex flex-col lg:flex-row items-center lg:gap-4 lg:justify-between'>
              <p className='text-sm md:text-base mt-3 md:w-2/4 text-white/60 text-center lg:text-left'>
                Empowering businesses with AI-driven solutions to enhance
                efficiency, streamline operations, and revolutionize customer
                interactions. Experience the future of intelligent automation
                with SOFI AI.
              </p>
              {/* Social Links */}
              <div className='flex gap-4 mt-5'>
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='bg-[#1A1A1A] p-3 rounded-full hover:bg-primary-gray/10 bg-primary-gray/5 border border-primary-gray/10 transition-colors group'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className=' text-white  rounded-full'>
                      <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </div>
                    <span className='sr-only'>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-white/10 my-5' />

          {/* Bottom Section */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © 2025{' '}
              <span className='text-primary-color'>
                SOFI AI Tech Solution Inc.
              </span>{' '}
              All rights reserved.
            </p>

            <div className='flex items-center gap-4'>
              {legalLinks.map((item, index) => (
                <div key={item.name} className='flex items-center'>
                  <Link
                    href={item.href}
                    className='text-primary-color hover:text-primary-color/80 transition-colors text-sm'
                  >
                    {item.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className='text-primary-color mx-4'>|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
