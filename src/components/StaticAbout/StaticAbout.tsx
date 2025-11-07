import React from "react";
import staticImg from "../../assets/images/staticAbout.png";

const StaticAbout: React.FC = () => {
  return (
    <section className="bg-[white] text-gray-800 w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-open text-3xl md:text-4xl font-bold leading-snug">
            We Are The Center Of Lucca To Offer You The Best
          </h1>
          <p className=" font-open text-gray-800 leading-relaxed text-sm md:text-base">
            We are right in the center of Lucca to offer you the real city life!
            With years of experience in practically every tourism sector, with
            us you can find complete packages at the lowest price, to travel and
            learn and have fun all without worries and without stress. What are
            you waiting for, book a bright evening, a trip to beautiful Tuscany
            or a personal tour for you!
          </p>
        </div>

        <div className="flex justify-center relative">
          <img
            src={staticImg}
            alt="Hero Careers"
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default StaticAbout;
