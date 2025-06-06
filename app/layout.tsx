import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "ASI Connex | Connecting Innovation with Simplicity",
  description: "ASI Connex is a forward-thinking tech company delivering seamless digital connectivity and smart solutions tailored for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



