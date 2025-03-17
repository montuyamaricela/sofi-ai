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
  },
  {
    id: '02',
    title: 'Smart Sales Assistance',
    description: 'Boost conversions with real-time product recommendations.',
  },

  {
    id: '03',
    title: 'Multilingual Capabilities',
    description:
      'Communicate with customers in multiple languages for global expansion.',
  },
  {
    id: '04',
    title: 'Voice AI Integration',
    description:
      'Enable hands-free interactions with advanced and seamless voice support.',
  },
  {
    id: '05',
    title: 'Automated Data Collection',
    description:
      'Gather business insights with smart AI-driven data automation.',
  },
  {
    id: '06',
    title: 'Comment Replies',
    description: 'Reply to comment sections, and initiate private messages.',
  },
  {
    id: '07',
    title: 'Broadcast',
    description: 'Send broadcast messages for subscribed customers.',
  },

  {
    id: '08',
    title: 'AI-Powered Booking System',
    description:
      'Automate scheduling with seamless and efficient reservations.',
  },
  {
    id: '09',
    title: 'Unlimited Replies',
    description:
      'No restrictions on the number of messages, ensuring smooth and continuous interactions.',
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
