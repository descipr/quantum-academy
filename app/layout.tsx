import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar";
import { dm_sans, inter } from "./font";


export const metadata: Metadata = {
  title: "Quantum Academy",
  description: "Elevate Your AI Expertise with Live, Interactive Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dm_sans.className} antialiased bg-[#F5F5F5]  md:pt-[88px]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
