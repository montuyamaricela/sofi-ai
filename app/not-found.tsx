import Link from "next/link";
import Image from "next/image";
import "./(pages)/globals.css";
import logo from "@/public/logo/logo-with-name.png";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <html lang='en'>
      <head>
        <title>404 - Page Not Found | SOFI AI</title>
      </head>
      <body className='bg-black'>
        <main className='min-h-screen flex items-center justify-center px-4'>
          <div className='text-center'>
            {/* Logo */}
            <div className='mb-8'>
              <Image
                src={logo}
                alt='SOFI AI Logo'
                width={200}
                height={80}
                className='w-auto h-20 mx-auto'
                priority
              />
            </div>

            {/* 404 Message */}
            <h1 className='text-7xl font-bold text-primary-color mb-4'>404</h1>
            <h2 className='text-2xl font-semibold text-white'>
              Oops! Page Not Found
            </h2>
            <p className='text-gray-400 my-5 max-w-md mx-auto'>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            {/* Back to Home Button */}
            <Link href='/'>
              <Button className='border-transparent hover:bg-white hover:text-primary-color border transition-colors duration-500 text-base px-8 py-6 rounded-sm uppercase font-bold bg-primary-color'>
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

export const dynamic = "force-static";
