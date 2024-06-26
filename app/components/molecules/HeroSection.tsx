import { Button } from "../atoms/Button";

interface HeroSectionProps {
  copy: {
    accentMessage: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
  font: {
    className: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ copy, font }) => (
  <div
    className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('/ai-pizza-hero.jpg')` }}
  >
    <h2
      className={`${font.className} text-4xl text-primary bg-white px-4 my-4 z-10`}
    >
      {copy.accentMessage}
    </h2>
    <h1 className="text-6xl font-bold text-white text-center z-10 mb-4">
      {copy.title}
    </h1>
    <h2 className="text-4xl font-bold text-white text-center z-10 mb-8">
      {copy.subtitle}
    </h2>
    <Button href={copy.buttonLink} className="z-20">
      {copy.buttonText}
    </Button>
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>
);
