// components/molecules/SocialSection.tsx
import Link from "next/link";
import { Covered_By_Your_Grace } from "next/font/google";
const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});
interface SocialSectionProps {
  copy: {
    accentMessage?: string;
    title?: string;
    description?: string;
    buttonLink?: string;
    buttonText?: string;
  };
  font: {
    className: string;
  };
  iframeSrc?: string;
}

export const SocialSection: React.FC<SocialSectionProps> = ({
  copy,
  // font,
  iframeSrc,
}) => (
  <div className="relative bg-primary">
    <div className="container flex flex-col-reverse md:flex-row  items-center justify-center py-8">
      <div className="flex-1 my-4 md:my-0">
        <iframe
          className="instagram-media instagram-media-rendered"
          id="instagram-embed-0"
          src={iframeSrc}
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
        <h2 className={`${coveredByYourGrace.className} text-4xl text-white text-center`}>
          <span className="bg-white px-4 text-primary">
            {copy.accentMessage}
          </span>
        </h2>
        <h1 className="text-6xl font-bold text-white text-center mt-8">
          {copy.title}
        </h1>
        <p className="text-center max-w-2xl mx-auto mt-4 text-2xl bg-white p-4 rounded-lg shadow-lg">
          {copy.description}
        </p>
        <Link
          href={copy.buttonLink || "https://orderonline.granburyrs.com/slice/index.html?accountId=dd37e4bf-6698-4488-9c72-7c6e8284dd89&amp;locationId=5bf36e26-080a-492d-9fb3-022a059b1a08"}
          className="bg-white hover:bg-primary-dark hover:text-white text-primary font-bold py-2 px-4 rounded inline-block z-20 mt-4"
        >
          {copy.buttonText}
        </Link>
      </div>
    </div>
  </div>
);
