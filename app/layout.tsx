'use client'

import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import "./globals.css";
import styles from ".//styles/CustomLink.module.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import GoogleTagManager from "./components/scripts/GoogleTagManager";
import { useState } from "react";
import { InterstitialModal } from "./components/molecules/InterstitialModal";
import { MODAL_CONTENT } from "./content/modalContent";

const oswald = Oswald({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-VNGY83XGV3" />
        <GoogleTagManager tagManagerId="AW-16828268468" />
      </head>
      <body className={oswald.className}>
        <nav className="flex justify-between px-8 items-center tx-white" style={{ backgroundColor: "#120a0a", color: 'white' }}>
          <Image
            src="/21st-logo-rooster-black.png"
            width="800"
            height="300"
            alt="Logo"
            className="h-24 w-auto"
          />
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={`p-2 ${styles.link}`}>
              HOME
            </Link>
            <Link href="/about" className={`p-2 ${styles.link}`}>
              ABOUT
            </Link>
            <Link href="/menu" className={`p-2 ${styles.link}`}>
              MENU
            </Link>
            {/* <Link href="https://7ed975-76.myshopify.com/" className={`p-2 ${styles.link}`}>
              MERCH
            </Link> */}
            <Link href="tel:(503) 954-1570" className={`p-2 ${styles.link}`}>
              CALL
            </Link>
            <Link
              href="https://orderonline.granburyrs.com/slice/index.html?accountId=dd37e4bf-6698-4488-9c72-7c6e8284dd89&amp;locationId=5bf36e26-080a-492d-9fb3-022a059b1a08"
              // href="https://orderonline.granburyrs.com/slice/menu/main"
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block"
            >
              ORDER ONLINE
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#201314] text-white`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className={`p-2 ${styles.link}`}>
              HOME
            </Link>
            <Link href="/about" className={`p-2 ${styles.link}`}>
              ABOUT
            </Link>
            <Link href="/menu" className={`p-2 ${styles.link}`}>
              MENU
            </Link>
            {/* <Link href="https://7ed975-76.myshopify.com/" className={`p-2 ${styles.link}`}>
              MERCH
            </Link> */}
            <Link href="tel:(503) 954-1570" className={`p-2 ${styles.link}`}>
              CALL
            </Link>
            <Link
              href="https://orderonline.granburyrs.com/slice/index.html?accountId=dd37e4bf-6698-4488-9c72-7c6e8284dd89&amp;locationId=5bf36e26-080a-492d-9fb3-022a059b1a08"
              // href="https://orderonline.granburyrs.com/slice/menu/main"
              // target="_blank"
              // rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block"
            >
              ORDER ONLINE
            </Link>
          </div>
        </div>

        {children}
        
        <InterstitialModal
          title={MODAL_CONTENT.title}
          description={MODAL_CONTENT.description}
          imageSrc={MODAL_CONTENT.imageSrc}
          imageAlt={MODAL_CONTENT.imageAlt}
        />
      </body>
    </html>
  );
}
