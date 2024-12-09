'use client'
import Image from "next/image";
import { useState } from "react";
import { Covered_By_Your_Grace } from "next/font/google";

const PLACEHOLDER_IMAGE = '/placeholder.png';

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});

interface ProductPrices {
  small?: number;
  medium?: number;
  large?: number;
  regular?: number;
  glutenFree?: number;
}

interface ProductSizes {
  small?: string;
  medium?: string;
  large?: string;
  glutenFree?: string;
}

interface DrinkOption {
  name: string;
  price: number;
}

interface Product {
  image?: string;
  title?: string;
  description?: string;
  excerpt?: string;
  category?: string;
  prices?: ProductPrices;
  sizes?: ProductSizes;
  options?: DrinkOption[];
  price?: number;
}

interface ProductTableSectionProps {
  copy: {
    accentMessage?: string;
    title?: string;
    subtitle?: string;
    buttonLink?: string;
    buttonText?: string;
  };
  products: Product[];
}

const PriceDisplay: React.FC<{ product: Product }> = ({ product }) => {
  // Updated initial state selection logic
  const getInitialSize = (product: Product): string => {
    if (product.prices?.can) return 'can';  // For drinks, default to 'can'
    if (product.prices?.small) return 'small';  // For pizzas, default to 'small'
    if (product.prices?.regular) return 'regular';  // For other items with 'regular' size
    return Object.keys(product.prices || {})[0] || 'default';  // Fallback to first available size or default
  };

  const [selectedSize, setSelectedSize] = useState<string>(getInitialSize(product));

  // Handle single price products
  if (typeof product.price === 'number') {
    return <div>${product.price.toFixed(2)}</div>;
  }

  // Handle products with size-based pricing
  if (product.prices && Object.keys(product.prices).length > 0) {
    return (
      <div className="flex flex-col gap-2">
        <select 
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="p-1 border rounded text-sm"
        >
          {Object.entries(product.prices).map(([size, price]) => (
            <option key={size} value={size}>
              {size.charAt(0).toUpperCase() + size.slice(1)} 
              {product.sizes?.[size as keyof ProductSizes] ? ` (${product.sizes[size as keyof ProductSizes]})` : ''} 
              - ${typeof price === 'number' ? price.toFixed(2) : 'N/A'}
            </option>
          ))}
        </select>
        <div className="text-sm font-bold">
          ${typeof product.prices[selectedSize as keyof ProductPrices] === 'number' 
            ? product.prices[selectedSize as keyof ProductPrices]?.toFixed(2) 
            : 'N/A'}
        </div>
      </div>
    );
  }

  // If no price information is available
  return <div className="text-sm text-gray-500">Price not available</div>;
};

export const ProductTableSection: React.FC<ProductTableSectionProps> = ({
  copy,
  products,
}) => {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="relative bg-[url('/ai-tomato-plant.jpg')] bg-cover py-8">
      {/* Section Title */}
      <div className="relative">
        <h2 className={`${coveredByYourGrace.className} text-4xl text-primary text-center`}>
          <span className="bg-white px-4">{copy.accentMessage}</span>
        </h2>
        <h1 className="text-6xl font-bold text-white text-center mt-8">
          {copy.title}
        </h1>
      </div>
      {/* Section Content */}
      <div className="container mx-auto my-8 px-4">
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 capitalize">
              {category}
            </h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Item</th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">Description</th>
                    <th className="py-3 px-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryProducts.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50 border-t border-gray-200">
                      <td className="py-4 px-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src={product.image || PLACEHOLDER_IMAGE}
                            alt={product.title || 'Product Image'}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold">{product.title}</div>
                        <div className="text-sm text-gray-600 mt-1 md:hidden">
                          {product.excerpt || product.description}
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        {product.excerpt || product.description}
                      </td>
                      <td className="py-4 px-4">
                        <PriceDisplay product={product} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};