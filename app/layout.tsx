import type { Metadata } from "next";
import { Oswald, Onest } from "next/font/google";
import { businessInfo } from "@/constants/data";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import IntroShutter from "@/components/layout/IntroShutter";
import NavBar from "@/components/layout/NavBar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: businessInfo.pageTitle,
  description: businessInfo.pageDescription,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntroShutter />
        <NavBar />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
