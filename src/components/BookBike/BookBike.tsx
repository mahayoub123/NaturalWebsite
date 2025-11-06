import React from "react";
const BookBike: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[white] text-black px-4">
      <div className="w-full max-w-md bg-[white]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Telephone Number"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Service Type"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Date"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Time"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />

          <button
            type="submit"
            className="w-full bg-[#FA8B02] text-black font-semibold rounded-full py-3 hover:bg-[#a4ef00] transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookBike;
