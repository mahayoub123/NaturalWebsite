import React from "react";
import staticImg from "../../assets/images/Group 3.png";

const Static: React.FC = () => {
  return (
    <section className="bg-[white] text-gray-800 w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-open text-3xl md:text-4xl font-bold leading-snug">
            We are the best company for your visit
          </h1>
          <p className=" font-open text-gray-800 leading-relaxed text-sm md:text-base">
            After decades of experience, and a whole life in Lucca, we offer you
            the most complete tourism service in the city. In addition to having
            bikes and rickshaws to have as much fun as you want, you have the
            choice of tour guides with whom to tour and drivers for your every
            need! We offer packages in the way that you get the most at the
            lowest price. Book with us and we will always be available for you!
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

export default Static;
