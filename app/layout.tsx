import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { plus_jakarta } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HorizontalLine from "@/components/ui/HorizontalLine";
import FloatingButton from "@/components/FloatingButton";

export const metadata: Metadata = {
  title: {
    template: "%s | Quantum Academy ",
    default: "Quantum Academy",
    absolute: "Quantum Academy | Become a 360-degree AI Professional ",
  },
  description:
    "Unlock your AI potential with our Fellowships led by Hiring managers. Gain personalized guidance, tackle job-simulation projects, and join a supportive community. Start now to fast-track your AI career!",
  metadataBase: new URL("https://descipr.com"),
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="vbrtbewbju9hb139todoh025sit6ax"
        />
      </head>

      <body
        className={`${plus_jakarta.className} relative  bg-[#FFFEF7] bg-fixed bg-cover`}
      >
        <FloatingButton />
        <Navbar />
        {children}
        <HorizontalLine />
        <Footer />
      </body>
    </html>
  );
}
