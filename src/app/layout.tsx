import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalContext from "@/context/GlobalContext";
import Navbar from "@/components/generals/Navbar";
import Footer from "@/components/generals/Footer";
import AuthWrapper from "@/components/generals/AuthWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Sample App",
  description: "Sample app with typeScript, context, hooks, forms etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalContext>
        <Navbar/>
        <section className="min-h-[calc(100vh-134px)] p-5">
        <AuthWrapper children={children}/>
        </section>
        <Footer/>
        </GlobalContext>
      </body>
    </html>
  );
}
