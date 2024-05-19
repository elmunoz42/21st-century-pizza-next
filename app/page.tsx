import Link from "next/link";
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";
import { PRODUCTS } from ".//content/products";

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section  */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/ai-pizza-hero.jpg')` }}
      >
        <h2
          className={`${coveredByYourGrace.className} text-4xl text-primary bg-white px-4`}
        >
          naturally fresh
        </h2>
        <h1 className="text-6xl font-bold text-white z-10 mb-4">
          21ST CENTURY PIZZA
        </h1>
        <h2 className="text-4xl font-bold text-white z-10 mb-8">
          Farm to table pizza at your doorstep.
        </h2>
        <Link
          href="/menu"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block z-20"
        >
          VIEW OUR MENU
        </Link>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      {/* Second Section  */}
      <div className="relative bg-[url('/farm-field.jpg')] bg-cover py-8 bg-bottom">
        {/* <div className="absolute inset-0 bg-white bg-opacity-30"></div> */}
        <div className="flex container relative">
          <div className="w-1/2 py-8 ps-8 flex flex-col items-center justify-center">
            <div className="h-32"></div>
            <div className="h-16"></div>
            <h2 className="text-3xl font-bold text-center mt-8">
              Food is Our Love Language...
            </h2>
            <p
              className={`${coveredByYourGrace.className} text-center max-w-2xl mx-auto mt-4 text-primary text-2xl bg-white p-4 rounded-lg shadow-lg`}
            >
              "Living and growing food at our farm has transformed who we are
              and now we want to share that with you. Our pizza is made with the
              freshest ingredients and delivered to your door."
            </p>
          </div>
          <div className="relative w-full h-64 flex items-center justify-center">
            <Image
              src="/pizza-heart.png"
              alt="Description of image"
              width={400}
              height={200}
              className="border border-white border-2"
            />
          </div>
        </div>
      </div>
      {/* Third Section  */}
      {/* <div className="h-32"></div> */}
      <div className="relative bg-[url('/ai-kitchen-table.jpg')] bg-cover py-8">
        <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>
        {/* Section Title  */}
        <div className="relative">
          <h2
            className={`${coveredByYourGrace.className} text-4xl text-primary text-center`}
          >
            gourmet ingredients
          </h2>
          <h1 className="text-6xl font-bold text-black text-center mt-8">
            MORE THAN JUST A PIZZA SHOP
          </h1>
        </div>
        {/* Section Content  */}
        <div className="grid grid-cols-2 gap-4 container text-center my-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              className="transform transition-transform duration-500 hover:scale-105 bg-white p-4 rounded-lg shadow-lg py-8 px-4 text-center "
            >
              <div className="items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400} // replace with your desired width
                  height={400} // replace with your desired height
                  objectFit="cover"
                  className="mx-auto"
                />
              </div>
              <h2
                className={`${coveredByYourGrace.className} text-xl font-bold mt-4 text-primary-dark`}
              >
                {product.title}
              </h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
