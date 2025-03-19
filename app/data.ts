import bigZLogo from '@/public/images/logo/testimonial/bigz.jpg';
import bailiwickLogo from '@/public/images/logo/testimonial/bailwick.jpg';
import kippapLogo from '@/public/images/logo/testimonial/kippap.jpg';
import pawsToHeavenLogo from '@/public/images/logo/testimonial/pawsToHeaven.jpg';
import refferLogo from '@/public/images/logo/testimonial/reffer.jpg';
import staycationHavenLogo from '@/public/images/logo/testimonial/staycationHaven.png';

import facebook from '@/public/images/logo/integrations/facebook.png';
import instagram from '@/public/images/logo/integrations/instagram.png';
import gmail from '@/public/images/logo/integrations/gmail.png';
import googleCalendar from '@/public/images/logo/integrations/googlecalendar.png';
import messenger from '@/public/images/logo/integrations/messenger.png';
import meta from '@/public/images/logo/integrations/meta.png';
import mysql from '@/public/images/logo/integrations/mysql.png';
import openai from '@/public/images/logo/integrations/openai.png';
import shopify from '@/public/images/logo/integrations/shopify.png';
import telegram from '@/public/images/logo/integrations/telegram.png';
import pancake from '@/public/images/logo/integrations/12.png';
import xendit from '@/public/images/logo/integrations/8.png';
import paymongo from '@/public/images/logo/integrations/9.png';

export const navigationItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Features',
    href: '/#features',
  },
  {
    label: 'Solutions',
    href: '/#solutions',
  },
  {
    label: 'Integrations',
    href: '/#integrations',
  },
  {
    label: 'FAQs',
    href: '/#faqs',
  },
];

export const whyChooseUs = [
  {
    id: 1,
    description:
      "<p>Provides <span class='text-primary-color'>24/7 real-time support </span>to your customers</p>",
  },
  {
    id: 2,
    description:
      "<p>Adapts to your brand's <span class='text-primary-color'>tone and personality</span></p>",
  },
  {
    id: 3,
    description:
      "<p><span class='text-primary-color'>Seamless integrate</span> with other platforms and business tools</p>",
  },
];

export const features = [
  {
    id: '01',
    title: '24/7 AI Chat Support',
    description: 'Always available to provide real-time customer assistance.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>',
  },
  {
    id: '02',
    title: 'Smart Sales Assistance',
    description: 'Boost conversions with real-time product recommendations.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z"/></svg>',
  },

  {
    id: '03',
    title: 'Multilingual Capabilities',
    description:
      'Communicate with customers in multiple languages for global expansion.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/></svg>',
  },
  {
    id: '04',
    title: 'Voice AI Integration',
    description:
      'Enable hands-free interactions with advanced and seamless voice support.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>',
  },
  {
    id: '05',
    title: 'Automated Data Collection',
    description:
      'Gather business insights with smart AI-driven data automation.',
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>',
  },
  {
    id: '06',
    title: 'Comment Replies',
    description: 'Reply to comment sections, and initiate private messages.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>',
  },
  {
    id: '07',
    title: 'Broadcast',
    description: 'Send broadcast messages for subscribed customers.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"/></svg>',
  },

  {
    id: '08',
    title: 'AI-Powered Booking System',
    description:
      'Automate scheduling with seamless and efficient reservations.',
    // icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>',
  },
  {
    id: '09',
    title: 'Unlimited Replies',
    description:
      'No restrictions on the number of messages, ensuring smooth and continuous interactions.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
  },
];

export const testimonials = [
  {
    id: 1,
    client: 'Grace B. Parazo',
    author: 'The Bailiwick Academy',
    testimonial: `<p>SOFI has been a game-changer for our business, especially during peak hours and off-hours when immediate responses are needed.

The learning curve is surprisingly manageable—it's all about <span class='text-primary-color font-bold'>providing the right information upfront</span>. What amazes me is how it sometimes gives spot-on answers even for things we haven't explicitly covered!

The best part? <span class='text-primary-color font-bold'>It captures our brand voice perfectly, making it sound authentically "me" </span> when responding. It's reliable enough that <span class='text-primary-color font-bold'>It can confidently leave it to handle interactions</span>.

Plus, knowing that there's always a supportive team ready to help makes the experience even better

<span class='text-primary-color font-bold'>It's truly been an invaluable addition to our business operations.</span>
</p>`,
    image: bailiwickLogo,
    rating: 5,
  },
  {
    id: 2,
    client: 'Victor Joseph Villafuerte',
    author: 'Kippap Civil Engineering',
    testimonial:
      "<p>Sofi AI has become one of the must-haves for our business, especially during the holidays. We get hundreds of inquiries every day, but I still get to <span class='text-primary-color font-bold'>enjoy the Christmas break worry-free</span> because Sofi AI can answer most questions and even convert inquiries into customers.</p>",
    image: kippapLogo,
    rating: 5,
  },
  {
    id: 3,
    client: 'Michael Gonzalez',
    author: 'BigZ Burger',
    testimonial:
      "<p>Using SOFI AI, <span class='text-primary-color font-bold'>we save time</span>, benefit from efficient data organization, and <span class='text-primary-color font-bold'>experience significant growth in client acquisition.</span></p>",
    image: bigZLogo,
    rating: 5,
  },
  {
    id: 4,
    client: 'Carla Salamat',
    author: 'Staycation Haven',
    testimonial:
      "<p>SOFI AI is my little business fairy! It <span class='text-primary-color font-bold'>answers messages 24/7</span>, helps me book more stays, and ensures my business is always growing and thriving. In just six months, I went from 1 to 10 units—like, what?! Small team, big wins, all thanks to SOFI AI! If you want to glow up your business, this is the secret sauce.</p>",
    image: staycationHavenLogo,
    rating: 5,
  },
  {
    id: 5,
    client: 'Sandra Tan',
    author: 'Paws to Heaven',
    testimonial:
      "<p>Since implementing Sofi AI, our staff has been able to <span class='text-primary-color font-bold'>prioritize the immediate concerns of grieving pet owners</span> who contact us. This allows us to <span class='text-primary-color font-bold'>provide them with the compassion</span> and support they need during this difficult time. Additionally, Sofi AI has streamlined our ability to respond to inquiries on our Facebook page in a timely manner, ensuring that <span class='text-primary-color font-bold'>all our clients receive the prompt attention they deserve</span>. Overall, it has made a huge difference in how we serve our clients</p>",
    image: pawsToHeavenLogo,
    rating: 5,
  },
  {
    id: 6,
    client: 'Pia Ty',
    author: 'Reefer',
    testimonial:
      "<p>Not gonna lie, running a streetwear brand is dope but crazy—so many DMs, so many orders, and keeping up with customers 24/7? Yeah, impossible. But then we got SOFI Ai, and bro, it's a game-changer. It answers messages instantly, which means <span class='text-primary-color font-bold'>no more missed sales</span>, and it's helped us reach way more people without needing a big team. Sales? Up. Engagement? Up. Stress? Down. If you're trying to <span class='text-primary-color font-bold'>scale without burning out</span>, this is it.</p>",
    image: refferLogo,
    rating: 5,
  },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Brand Turnover',
    description:
      'Provide essential brand details, including company profile, FAQs, media assets, pricing, and guidelines. This ensures a smooth integration process tailored to your business needs',
  },
  {
    step: 2,
    title: 'Testing & Refinement',
    description:
      'SOFI AI undergoes an initial testing phase to verify brand alignment, refine response tone, and ensure seamless information flow.',
  },
  {
    step: 3,
    title: 'Integration & Training',
    description:
      'SOFI AI is connected to your platform, and training is provided on managing AI interactions, adding knowledge, and ensuring smooth operation.',
  },
];

export const integrations = [
  {
    id: 1,
    image: facebook,
    name: 'Facebook',
  },
  {
    id: 2,
    image: instagram,
    name: 'Instagram',
  },
  {
    id: 3,
    image: gmail,
    name: 'Gmail',
  },
  {
    id: 4,
    image: googleCalendar,
    name: 'Google Calendar',
  },
  {
    id: 5,
    image: messenger,
    name: 'Messenger',
  },
  {
    id: 6,
    image: meta,
    name: 'Meta',
  },
  {
    id: 7,
    image: mysql,
    name: 'MySQL',
  },
  {
    id: 8,
    image: openai,
    name: 'OpenAI',
  },
  {
    id: 9,
    image: shopify,
    name: 'Shopify',
  },
  {
    id: 10,
    image: telegram,
    name: 'Telegram',
  },
  {
    id: 11,
    image: pancake,
    name: 'Pancake API',
  },
  {
    id: 12,
    image: xendit,
    name: 'Xendit',
  },
  {
    id: 13,
    image: paymongo,
    name: 'Pay mongo',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Can I customize SOFI AI to match my brand?',
    answer:
      "Absolutely! 🎨 We can create a custom AI persona that aligns with your brand's tone, style, and personality. Just let us know what vibe you're going for!",
  },
  {
    id: 2,
    question: 'Do I need to set it up myself?',
    answer:
      'Nope! We handle everything for you. Sit back, relax, and let us do the work. Your AI assistant will be up and running in no time! 🚀',
  },
  {
    id: 3,
    question: 'What if I need to make changes later?',
    answer:
      "No worries! You can edit and update SOFI AI's knowledge base anytime to keep things fresh and aligned with your business.",
  },
  {
    id: 4,
    question: 'How will SOFI AI help my brand?',
    answer:
      'Think of SOFI AI as your 24/7 super assistant—it engages customers, answers questions, books appointments, and even helps with sales! More efficiency, fewer headaches. 😊',
  },
  {
    id: 5,
    question: 'How long does it take to set up?',
    answer:
      "The setup time depends on your business needs and complexity. More advanced integrations may take longer, but don't worry—we'll make the process as smooth and efficient as possible! 🚀",
  },
  {
    id: 6,
    question: 'What languages does SOFI AI understand?',
    answer:
      "SOFI AI's got you covered! 🌍 It understands over 50 languages, including Taglish, Bisaya, Ilocano, and various dialects—so you can connect with your audience effortlessly! 😊",
  },
  {
    id: 7,
    question: 'How is SOFI AI different from other chatbots?',
    answer:
      "SOFI AI isn't just a chatbot—it's smart, adaptive, and always evolving. Unlike basic bots that rely on keywords, SOFI AI understands context, learns from interactions, and provides natural, human-like responses.",
  },
];

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1Bbb7eyccj/?mibextid=wwXIfr',
    icon: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4V13.5z"/></svg>`,
  },
  {
    name: 'Tiktok',
    href: 'https://www.tiktok.com/@sofi.ai_tech?_t=ZS-8uSAc1zRyiX&_r=1',
    icon: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sofi-ai-tech-solution/?viewAsMember=true',
    icon: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>`,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sofi_ai_tech?igsh=OHpuMGM5NDU2cG15',
    icon: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>`,
  },
];

export const legalLinks = [
  {
    name: 'Terms & Conditions',
    href: '/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

export const achievements = [
  { number: '100%', label: 'Answered clients' },
  { number: '50+', label: 'Languages and Dialects' },
  { number: '24/7', label: 'Chat support' },
  { number: '1,000,000+', label: 'Inquiries Handled' },
];

export const greetings = [
  {
    text: 'Hello Sissy!',
    className: 'text-primary-color',
  },
  {
    text: 'Maayong adlaw! Kumusta?',
    className: 'text-primary-color',
  },
  {
    text: '안녕하세요! 잘 지내세요?',
    className: 'text-primary-color',
  },
  {
    text: 'こんにちは！お元気ですか？',
    className: 'text-primary-color',
  },
  {
    text: 'Bonjour ! Comment ça va',
    className: 'text-primary-color',
  },
  {
    text: 'Mustah knah? 😜',
    className: 'text-primary-color',
  },
];
