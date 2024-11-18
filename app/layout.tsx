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
    template: "%s | Descipr ",
    default: "Descipr ",
    absolute: "Descipr | Become a 360-degree AI Professional ",
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
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '867201552174593');
            fbq('track', 'PageView');
          `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T37HZ9T5W5"
          strategy="afterInteractive"
          async
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T37HZ9T5W5');
          `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=867201552174593&ev=PageView&noscript=1"
          />
        </noscript>

        <FloatingButton />
        <Navbar />
        {children}
        <HorizontalLine />
        <Footer />
      </body>
    </html>
  );
}
