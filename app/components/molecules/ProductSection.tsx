'use client'
import Image from "next/image";
import Link from "next/link";
import { Covered_By_Your_Grace } from "next/font/google";

const PLACEHOLDER_IMAGE = '/placeholder.png';

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});
interface ProductSectionProps {
  copy: {
    accentMessage?: string;
    title?: string;
    buttonLink?: string;
    buttonText?: string;
  };
  font: {
    className: string;
  };
  products: {
    image?: string;
    featured?: boolean;
    title?: string;
    description?: string;
  }[];
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  copy,
  // font,
  products,
}) => (
  <div className="relative bg-[url('/ai-tomato-plant.jpg')] bg-cover py-8">
    {/* Section Title  */}
    <div className="relative">
      <h2 className={`${coveredByYourGrace.className} text-4xl text-primary text-center`}>
        <span className="bg-white px-4">{copy.accentMessage}</span>
      </h2>
      <h1 className="text-6xl font-bold text-white text-center mt-8">
        {copy.title}
      </h1>
    </div>
    {/* Section Content  */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container text-center my-8">
      {products.map((product, index) => (
        product.featured && (
          <div
            key={index}
            className="transform transition-transform duration-500 hover:scale-105 bg-white p-4 rounded-lg shadow-lg py-8 px-4 text-center bg-opacity-90 mx-8"
          >
            <div className="items-center justify-center">
              <Image
                src={product.image || PLACEHOLDER_IMAGE}
                alt={product.title || 'Product Image'}
                width={400}
                height={400}
                className="mx-auto object-cover" // Moved objectFit to className
                priority={index < 2} // Prioritize loading first 2 images
                blurDataURL={PLACEHOLDER_IMAGE} // Add blur placeholder
                placeholder="blur"
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
              href={copy.buttonLink || "https://orderonline.granburyrs.com/slice/index.html?accountId=dd37e4bf-6698-4488-9c72-7c6e8284dd89&amp;locationId=5bf36e26-080a-492d-9fb3-022a059b1a08"}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block z-20 mt-4"
            >
              {copy.buttonText}
            </Link>
          </div>
        )
      ))}
    </div>
  </div>
);
