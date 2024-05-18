import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/ai-pizza-hero.jpg')` }}
    >
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
        View Menu
      </Link>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
}
