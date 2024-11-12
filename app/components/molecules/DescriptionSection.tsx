import Image from "next/image";

interface DescriptionSectionProps {
  copy: {
    title?: string;
    description?: string;
  };
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  copy,
}) => (
  <div className="relative bg-bottom bg-primary pb-12 md:pb-0">
    <div className="flex flex-col md:flex-row container relative">
      <div className="w-full md:w-1/2 pb-8 px-8 flex flex-col items-center justify-center">
        <div className="h-16"></div>
        <h2 className="text-4xl text-white font-bold text-center my-4 mx-4 md:mt-8">
          {copy.title}
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 text-primary text-2xl bg-white p-4 rounded-lg shadow-lg">
          {copy.description}
        </p>
        <div className="h-16"></div>
      </div>
      <div className="relative w-full h-64 flex items-center justify-center p-12 my-12 pt-4 md:p-0 md:my-0">
        <Image
          src="/BBQ-Chicken-Nuggets.png"
          // src="/pizza-heart.png"
          alt="Description of image"
          width={400}
          height={200}
          className="border border-white border-2 mb-8 md:mb-0"
        />
      </div>
    </div>
  </div>
);
