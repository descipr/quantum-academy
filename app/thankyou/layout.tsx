import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thank you for registering to our workshop on Acing Data Science & AI Interviews",
};

export default function ThankYouLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className=" ">{children}</section>;
}
