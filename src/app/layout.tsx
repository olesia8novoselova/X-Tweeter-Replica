import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { MotionMain } from "@/components/motion/Motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s | X App",
    default: ""
  },
  description: "Front-end insights, styled like X.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <MotionMain>
          {children}
        </MotionMain>
      </body>
    </html>
  );
}
