import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/common/NavigationBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SOFI AI",
  description: "SOFI AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
        style={{ fontFamily: "var(--font-poppins), Arial, sans-serif" }}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
