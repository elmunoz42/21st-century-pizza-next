'use client'
import Image from "next/image";
import Link from "next/link";
import { Covered_By_Your_Grace } from "next/font/google";

const PLACEHOLDER_IMAGE = '/placeholder.png'; 

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});
interface ProductTableSectionProps {
  copy: {
    accentMessage?: string;
    title?: string;
    subtitle?: string;
    buttonLink?: string;
    buttonText?: string;
  };
  font: {
    className: string;
  };
  products: {
    image?: string;
    title?: string;
    description?: string;
  }[];
}

export const ProductTableSection: React.FC<ProductTableSectionProps> = ({
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
    {/* Section Content */}
    <div className="container my-8">
      <table className="min-w-full bg-white">
      <thead>
        <tr>
        <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">Image</th>
        <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">Title</th>
        <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="py-2 px-4 border-b border-gray-300">
          <div className="w-12 h-12 bg-gray-200 bg-opacity-50 flex items-center justify-center">
            <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.title || 'Product Image'}
            width={50}
            height={50}
            className="object-cover"
            />
          </div>
          </td>
          <td className="py-2 px-4 border-b border-gray-300">{product.title}</td>
          <td className="py-2 px-4 border-b border-gray-300">{product.description}</td>
        </tr>
        ))}
      </tbody>
      </table>
    </div>
  </div>
);
