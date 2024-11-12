import Link from "next/link";
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";
import { PRODUCTS } from ".//content/products";
import { HOME_COPY } from ".//content/homeCopy";
import { INSTAGRAM_EMBED_URL } from ".//content/instagramEmbed";
import { HeroSection } from "./components/molecules/HeroSection";
import { DescriptionSection } from "./components/molecules/DescriptionSection";
import { ProductSection } from "./components/molecules/ProductSection";
import { SocialSection } from "./components/molecules/SocialSection";
import type { Metadata } from 'next'
import { HOME_SEO } from "./seo/homeSeo";
export const metadata: Metadata = HOME_SEO

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});
const instagramEmbedSrc =
  INSTAGRAM_EMBED_URL ||
  "https://www.instagram.com/p/BwP2jEWh3hN/embed/captioned/?cr=1&amp;v=12&amp;wp=326&amp;rd=https%3A%2F%2F21stcenturypizza.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A2196.7999999970198%2C%22ls%22%3A1405.699999988079%2C%22le%22%3A2193.2999999970198%7D";
export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section  */}
      <HeroSection copy={HOME_COPY[0]} font={coveredByYourGrace} />
      {/* Second Section  */}
      <DescriptionSection copy={HOME_COPY[1]} />
      {/* Third Section  */}
      <ProductSection
        copy={HOME_COPY[2]}
        font={coveredByYourGrace}
        products={PRODUCTS}
      />
      {/* Fourth Section  */}
      <SocialSection
        copy={HOME_COPY[3]}
        font={coveredByYourGrace}
        iframeSrc={instagramEmbedSrc}
      />
    </main>
  );
}
