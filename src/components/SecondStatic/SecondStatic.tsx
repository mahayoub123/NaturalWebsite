import React from "react";
import staticImg from "../../assets/images/girl.png";

const SecondStatic: React.FC = () => {
  return (
    <section className="bg-[white] text-gray-800 w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-open text-3xl md:text-4xl font-bold leading-snug">
            Get Special Offers for Organizations
          </h1>
          <p className="text-gray-800 font-open leading-relaxed text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="text-white bg-[#FA8B02] rounded-2xl cursor-pointer font-open">
            Contact Us
          </button>
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

export default SecondStatic;
