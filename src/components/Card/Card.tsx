import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Card: React.FC = () => {
  const card = useSelector((state: RootState) => state.card);

  return (
    <section className="bg-[white] text-gray-800 py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {card.map((card) => (
          <div
            key={card.id}
            className="bg-[white] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <img
                src={card.img}
                alt={card.title}
                className="w-[300px] h-[300px] object-contain rounded-2xl"
              />
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-open text-lg font-semibold">
                  {card.title}
                </h3>
              </div>

              <p className="text-gray-800 text-sm font-open">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
