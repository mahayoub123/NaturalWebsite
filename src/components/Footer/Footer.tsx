import React from "react";
import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import instIcon from "../../assets/images/insta.svg";
import logo from "../../assets/images/Layer 1.svg";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3333] text-gray-300">
      <div className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <img
              className="text-lime-400 text-2xl font-bold"
              src={logo}
              alt="logo"
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li className=" text-black font-open hover:text-lime-400 transition cursor-pointer">
              <a href="/home">Home</a>
            </li>
            <li className=" text-black font-open hover:text-lime-400 transition cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className=" text-black font-open hover:text-lime-400 transition cursor-pointer">
              <a href="/">Login</a>
            </li>
            <li className=" text-black font-open hover:text-lime-400 transition cursor-pointer">
              <a href="/signup">SignUp</a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
            <p className="font-open"> hello@skillbridge.com</p>
            <p className="font-open"> +91 91813 23 2309</p>
            <p className="font-open">Somewhere in the World</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={facebookIcon} alt="icon" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={twitterIcon} alt="icon" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={instIcon} alt="icon" />
            </a>
          </div>

          <div className=" font-lexend flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 border-t border-gray-800 pt-6 gap-4">
            <p>© NW. All Rights Reserved</p>
            <div className="flex gap-4">
              <a href="#" className="font-lexend hover:text-lime-400">
                Privacy Policy
              </a>
              <a href="#" className="font-lexend hover:text-lime-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
