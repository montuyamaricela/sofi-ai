import { useEffect } from 'react';

export function useSectionObserver(onSectionChange: (section: string) => void) {
  useEffect(() => {
    const sections = document.querySelectorAll('[id]');
    const options = {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionChange(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [onSectionChange]);
}
