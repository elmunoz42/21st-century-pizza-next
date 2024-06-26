import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import "./globals.css";
import styles from ".//styles/CustomLink.module.css";

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
      <body className={oswald.className}>
        <nav className="flex justify-between items-center p-4 bg-white">
          <Image
            src="/simplified-logo-v1.jpg"
            width="800"
            height="200"
            alt="Logo"
            className="h-8 w-auto"
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
        {children}
      </body>
    </html>
  );
}
