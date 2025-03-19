'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/logo/logo-with-name.png';
import Link from 'next/link';
import { navigationItems } from '@/app/data';
import { Button } from '../ui/button';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href.toLowerCase());
  };

  useEffect(() => {
    if (pathname === '/about') {
      setActiveLink('/#about');
    } else {
      setActiveLink(pathname.toLowerCase());
    }
  }, [pathname]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-500 px-5 ${
        isScrolled
          ? 'bg-secondary-grayBg border-4 border-secondary-lightGray'
          : 'bg-black border-4 border-transparent'
      }`}
    >
      <div className='flex justify-between items-center container mx-auto py-5 md:py-6 font-poppins'>
        <Link
          href='/'
          onClick={() => setActiveLink('/')}
          className='flex items-center'
        >
          <Image src={logo} alt='logo' className='w-20 sm:w-28' />
        </Link>

        <div
          className={`hidden lg:flex gap-5 uppercase bg-secondary-gray border transition-colors duration-500 border-secondary-lightGray px-10 py-4 rounded-lg ${
            isScrolled
              ? 'bg-secondary-lightGrayBg border-secondary-lightGray'
              : 'bg-secondary-grayBg border-secondary-lightGray'
          }`}
        >
          {navigationItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={` transition-colors duration-500  font-medium ${
                  activeLink === item.href.toLowerCase()
                    ? 'text-primary-color hover:text-primary-color'
                    : 'text-primary-grayText hover:text-primary-color'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className='hidden lg:flex gap-5'>
          <Button className='border-primary-color hover:bg-primary-color hover:text-white border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-medium bg-transparent'>
            Try now
          </Button>
          <Link
            href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ09J3y1Vn26ezSqOVH8zuujqHnA43Ks41SmISgRGjFvTo3TqiMezwT0hrp2FpF3uX8OSdxGVHhQ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-bold bg-primary-color'>
              Book Now
            </Button>
          </Link>
        </div>

        <div className='lg:hidden'>
          <div className='relative'>
            {/* Menu Trigger Button */}
            <div onClick={() => setIsMenuOpen(true)} className='cursor-pointer'>
              <Menu className='h-6 w-6' />
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className='fixed inset-0 bg-black/50 z-50 transition-opacity duration-300'
                  onClick={handleCloseMenu}
                  style={{
                    opacity: isClosing ? 0 : 1,
                  }}
                />

                {/* Menu Content */}
                <div
                  className={`fixed top-0 right-0 h-full w-[350px] sm:w-[400px] bg-secondary-darkGray text-white z-50 ${
                    isClosing ? 'animate-slide-out' : 'animate-slide-in'
                  }`}
                >
                  <div className='flex flex-col gap-4 mt-2'>
                    <Link href='/' className='text-lg p-6'>
                      <Image src={logo} alt='logo' className='w-28' />
                    </Link>
                    <div className='flex flex-col border-t border-secondary-border'>
                      {navigationItems.map((item) => (
                        <Link
                          className='hover:text-primary-color font-medium border-b rounded-none bg-transparent text-primary-grayText py-5 hover:bg-transparent px-6 uppercase text-left cursor-pointer'
                          key={item.href}
                          href={item.href}
                          onClick={handleCloseMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
