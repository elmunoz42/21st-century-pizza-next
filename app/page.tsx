import Link from "next/link";
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";
import { PRODUCTS } from ".//content/products";
import { HOME_COPY } from ".//content/homeCopy";
import { HeroSection } from "./components/molecules/HeroSection";
import { DescriptionSection } from "./components/molecules/DescriptionSection";

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section  */}
      <HeroSection copy={HOME_COPY[0]} font={coveredByYourGrace} />
      {/* Second Section  */}
      <DescriptionSection copy={HOME_COPY[1]} />
      {/* Third Section  */}
      <div className="relative bg-[url('/ai-tomato-plant.jpg')] bg-cover py-8">
        {/* Section Title  */}
        <div className="relative">
          <h2
            className={`${coveredByYourGrace.className} text-4xl text-primary text-center`}
          >
            <span className="bg-white px-4">{HOME_COPY[2].accentMessage}</span>
          </h2>
          <h1 className="text-6xl font-bold text-white text-center mt-8">
            {HOME_COPY[2].title}
          </h1>
        </div>
        {/* Section Content  */}
        <div className="grid grid-cols-2 gap-4 container text-center my-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              className="transform transition-transform duration-500 hover:scale-105 bg-white p-4 rounded-lg shadow-lg py-8 px-4 text-center bg-opacity-90 mx-8"
            >
              <div className="items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="mx-auto"
                />
              </div>
              <h2
                className={`${coveredByYourGrace.className} text-3xl font-bold mt-4 text-primary-dark`}
              >
                {product.title}
              </h2>
              <p className="max-w-sm text-center mx-auto text-1">
                {product.description}
              </p>
              <Link
                href={HOME_COPY[2].buttonLink || "/order-online"}
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block z-20 mt-4"
              >
                {HOME_COPY[2].buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Fourth Section  */}
      <div className="relative bg-primary">
        <div className="container flex flex-row items-center justify-center py-8">
          <div className="flex-1">
            <iframe
              className="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/p/BwP2jEWh3hN/embed/captioned/?cr=1&amp;v=12&amp;wp=326&amp;rd=https%3A%2F%2F21stcenturypizza.com&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A2196.7999999970198%2C%22ls%22%3A1405.699999988079%2C%22le%22%3A2193.2999999970198%7D"
              allowTransparency={true}
              allowFullScreen={true}
              frameBorder="0"
              height="818"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no"
              style={{
                background: "white",
                maxWidth: "540px",
                width: "calc(100% - 2px)",
                borderRadius: "3px",
                border: "1px solid rgb(219, 219, 219)",
                boxShadow: "none",
                display: "block",
                margin: "0px 0px 12px",
                minWidth: "326px",
                padding: "0px",
              }}
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2
              className={`${coveredByYourGrace.className} text-4xl text-white text-center`}
            >
              <span className="bg-white px-4 text-primary">
                {HOME_COPY[3].accentMessage}
              </span>
            </h2>
            <h1 className="text-6xl font-bold text-white text-center mt-8">
              {HOME_COPY[3].title}
            </h1>
            <p className="text-center max-w-2xl mx-auto mt-4  text-2xl bg-white p-4 rounded-lg shadow-lg">
              {HOME_COPY[3].description}
            </p>
            <Link
              href={HOME_COPY[3].buttonLink || "/order-online"}
              className="bg-white hover:bg-primary-dark hover:text-white text-primary font-bold py-2 px-4 rounded inline-block z-20 mt-4"
            >
              {HOME_COPY[3].buttonText}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
