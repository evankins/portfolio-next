import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import "./animations.css";
import { ShadCnNavigationMenuDesktop } from "@/app/ShadCnNavigationMenuDesktop"
import { ShadCnNavigationMenuMobile } from "./ShadCnNavigationMenuMobile";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Evan Kinsey's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-0 flex flex-col justify-center items-center"> 
          <div className="flex-grow mt-4 relative w-11/12 md:w-[700px] lg:w-[800px] move-down-fast"> 
            <div className="absolute top-0 right-0 hidden md:block">
              <ShadCnNavigationMenuDesktop />
            </div>

            <div className="absolute top-0 right-0 block md:hidden">
              <ShadCnNavigationMenuMobile />
            </div>
          </div>
        </div>


        {children}
      </body>
    </html>
  );
}
