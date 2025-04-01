// 'use client'
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import "./globals.css";
import styles from ".//styles/CustomLink.module.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import GoogleTagManager from "./components/scripts/GoogleTagManager";
// import { useState }  from "react";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "21st Century Pizza",
  description: "Farm to table pizza delivery in the 21st century.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-VNGY83XGV3" />
        <GoogleTagManager tagManagerId="AW-16828268468" />
      </head>
      <body className={oswald.className}>
        <nav className="flex justify-between px-8 items-center tx-white" style={{ backgroundColor: "#201314", color: 'white' }}>
          <Image
            src="/21st-logo-rooster-dark.png"
            width="800"
            height="300"
            alt="Logo"
            className="h-24 w-auto"
          />
          <div className="space-x-4">
            <Link href="/" className={`p-2 ${styles.link}`}>
              HOME
            </Link>
            <Link href="/about" className={`p-2 ${styles.link}`}>
              ABOUT
            </Link>
            <Link href="/menu" className={`p-2 ${styles.link}`}>
              MENU
            </Link>
            <Link href="https://7ed975-76.myshopify.com/" className={`p-2 ${styles.link}`}>
              MERCH
            </Link>
            <Link href="/contact" className={`p-2 ${styles.link}`}>
              CALL
            </Link>
          </div>
          <a
            href="https://21stcenturypizza.com/order-online/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block"
          >
            ORDER ONLINE
          </a>
        </nav>
        {/* <p>V1.0.0</p> */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
          // onClick={() => toggleMenu()}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* {menuOpen && ( */}
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Link href="/" className={`p-2 ${styles.link}`}>
              HOME
            </Link>
            <Link href="/about" className={`p-2 ${styles.link}`}>
              ABOUT
            </Link>
            <Link href="/menu" className={`p-2 ${styles.link}`}>
              MENU
            </Link>
            <Link href="https://7ed975-76.myshopify.com/" className={`p-2 ${styles.link}`}>
              MERCH
            </Link>
            <Link href="/contact" className={`p-2 ${styles.link}`}>
              CALL
            </Link>
            <a
              href="https://21stcenturypizza.com/order-online/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block"
            >
              ORDER ONLINE
            </a>
          </div>
          {/* )} */}
        </div>
        {children}
      </body>
    </html>
  );
}
