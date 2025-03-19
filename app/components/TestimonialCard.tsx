'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TestimonialCardProps {
  client: string;
  author: string;
  testimonial: string;
  image: StaticImageData;
}

export default function TestimonialCard({
  client,
  author,
  testimonial,
  image,
}: Readonly<TestimonialCardProps>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        // Compare the actual content height with the container height (140px)
        const hasTextOverflow = contentRef.current.scrollHeight > 140;
        setHasOverflow(hasTextOverflow);
      }
    };

    // Check on mount and when content changes
    checkOverflow();
    // Also check after images load and fonts render
    window.addEventListener('load', checkOverflow);
    // Check on window resize
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('load', checkOverflow);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [testimonial]);

  return (
    <div
      className={`bg-white/5 p-6 rounded-lg border border-white/10 hover:border-primary-color/50 transition-all duration-300 ${
        isExpanded ? 'h-auto' : 'h-[280px]'
      }`}
    >
      {/* Header - Fixed height */}
      <div className='flex items-center gap-4 h-[60px]'>
        <Image
          src={image}
          alt={client}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div className='flex flex-col items-start justify-between gap-2 w-full'>
          <div>
            <h4 className='font-semibold text-sm'>{client}</h4>
            <p className='text-sm text-primary-grayText'>{author}</p>
          </div>
          <div className='flex gap-1 items-center justify-center'>
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
        </div>
      </div>

      {/* Content area */}
      <div
        className={`relative overflow-hidden
          data-[state=closed]:animate-accordion-up 
          data-[state=open]:animate-accordion-down`}
        data-state={isExpanded ? 'open' : 'closed'}
      >
        <div
          className={`${
            isExpanded ? 'h-auto' : 'h-[140px]'
          } overflow-hidden transition-all duration-300`}
        >
          <div
            ref={contentRef}
            className=' text-sm leading-relaxed mt-3 md:mt-2'
            dangerouslySetInnerHTML={{ __html: testimonial }}
          />
        </div>

        {/* Button area - Only show if content overflows */}
        {hasOverflow && (
          <div className='h-[40px] flex items-center'>
            {!isExpanded && (
              <div className='absolute bottom-[40px] left-0 right-0 h-12 bg-gradient-to-t from-[#000000] to-transparent' />
            )}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant='link'
              className='text-primary-color hover:text-primary-color/80 flex items-center gap-1 px-0'
            >
              {isExpanded ? (
                <>
                  Hide <ChevronUp className='w-4 h-4' />
                </>
              ) : (
                <>
                  See More <ChevronDown className='w-4 h-4' />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
