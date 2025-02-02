import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/animations.css";
import { ShadCnNavigationMenuDesktop } from "@/components/ShadCnNavigationMenuDesktop";
import { ShadCnNavigationMenuMobile } from "@/components/ShadCnNavigationMenuMobile";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-0 flex flex-col justify-center items-center">
          <div className="flex-grow mt-4 relative w-11/12 md:w-[700px] lg:w-[800px] move-down-fast container">
            <div className="absolute top-2 right-2 hidden md:block">
              <ShadCnNavigationMenuDesktop />
            </div>
            <div className="absolute top-2 right-0 block md:hidden">
              <ShadCnNavigationMenuMobile />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}