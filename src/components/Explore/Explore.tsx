import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Explore: React.FC = () => {
  const exp = useSelector((state: RootState) => state.explore);

  return (
    <section className="bg-[white] text-gray-800 py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-open text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Popular Destinantions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exp.map((exp) => (
          <div
            key={exp.id}
            className="bg-[white] p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full">
              <div className="mb-4">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-open text-lg font-semibold mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm font-open mb-4">
                  {exp.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
