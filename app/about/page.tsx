import { NextPage } from "next";
import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";
import { ABOUT_COPY } from "../content/aboutCopy";
import { ABOUT_SEO } from "../seo/aboutSeo";
import { Metadata } from "next";

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = ABOUT_SEO;

const About: NextPage = () => {
  return (
    <main
      className="bg-primary"
      style={{
        backgroundImage: `url('/rural-w-pdx-view.png')`,
        // backgroundImage: `url('/farm-field.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative">
        <div className="container flex flex-col items-center justify-center py-8">
          <Image
            width={500}
            alt="Pizza Heart"
            height={500}
            src="/pizza-heart.png"
            className="my-8"
          />
          <h2
            className={`${coveredByYourGrace.className} text-4xl text-center text-primary`}
          >
            <span className="bg-white px-4">{ABOUT_COPY[0].title}</span>
          </h2>
          {/* <h1 className="text-6xl font-bold text-white text-center mt-8">
            FROM FARM TO TABLE
          </h1> */}
          <p className="text-center max-w-2xl mx-auto mt-4  text-2xl bg-white p-4 rounded-lg shadow-lg">
            {ABOUT_COPY[0].description}
          </p>
          <Image
            width={500}
            alt="Happy Chicken"
            height={500}
            src="/happy-chicken.jpg"
            className="my-8"
          />
        </div>

        <h2
          className={`${coveredByYourGrace.className} text-4xl text-center text-primary container flex justify-center `}
        >
          <span className="bg-white px-4">in the heart of Portland</span>
        </h2>
        <div className="container flex justify-center my-4">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6659284668544!2d-122.68923872341507!3d45.51680322992698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a1bca844f8b%3A0xbf2d36da40c169e9!2s21st%20Century%20Pizza!5e0!3m2!1sen!2sus!4v1716145265456!5m2!1sen!2sus"
            width="650"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br></br>
      </div>
    </main>
  );
};

export default About;
