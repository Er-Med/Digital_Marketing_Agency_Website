import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { nunito, syne } from "@/app/_ui/fonts";
import "./globals.css";
import { Header } from "./_ui/Header";
import Footer from "./_ui/Footer";
import ScrollButton from "./_ui/ScrollButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable}`}>
      <head>
      </head>
      <body className={nunito.className}>
        <div className="container px-4 md:px-14 mx-auto">
          <Header />
        </div>
        {children}
        <div className="container px-4 md:px-14 mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
