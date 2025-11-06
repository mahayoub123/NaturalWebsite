import React from "react";
import googleIcon from "../../assets/images/grommet-icons_google.svg";

import { useNavigate } from "react-router-dom";
const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/home");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-[white] text-black px-4">
      <div className="w-full max-w-md bg-[white]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-[#FA8B02] text-3xl font-semibold mb-2 font-open">
            Sign Up
          </h1>
          <p className="text-gray-400 text-sm font-open">
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your First Name"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full bg-[white] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-[#FA8B02] hover:underline transition font-open"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-[#FA8B02] text-black font-semibold rounded-full py-3 hover:bg-[#a4ef00] transition"
          >
            Login
          </button>

          <button
            onClick={handleSignUp}
            type="button"
            className="w-full border border-gray-700 text-black rounded-full py-3 hover:bg-[#1c1c1c] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <div className="h-px w-1/3 bg-gray-700"></div>
          <p className="text-gray-500 text-sm">or continue with</p>
          <div className="h-px w-1/3 bg-gray-700"></div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="p-3 bg-[white] rounded-full hover:bg-[#b4ff00] hover:text-black transition">
            <img src={googleIcon} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
