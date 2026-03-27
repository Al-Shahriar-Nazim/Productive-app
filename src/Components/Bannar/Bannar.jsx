import React from "react";
import realHero from "../../assets/realHero.png";
import StatsSection from "../StatsSection/StatsSection";
import Trandings from "../Trandings/Trandings";

const Bannar = ({data}) => {
  // console.log(data)
  return (
    <div className="mt-8 text-center">

      <div className="container mx-auto">
        <h3 className="text-6xl  font-bold">
          We Build <br />
          <span className="text-[#804ee8]">Productive </span>
          Apps
        </h3>
        <p className="mt-3 w-full md:w-4xl mx-auto text-gray-400 font-semibold">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="my-8">
          {/* Google */}
          <a
            href="https://myaccount.google.com/"
            target="_blank"
            className="btn bg-white text-black border-[#e5e5e5] mr-5"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </a>
          {/* X */}
          <a
            href="https://x.com/"
            target="_blank"
            className="btn bg-black text-white border-black"
          >
            <svg
              aria-label="X logo"
              width="16"
              height="12"
              viewBox="0 0 300 271"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
              />
            </svg>
            Login with X
          </a>
        </div>

        <div className="">
          <img src={realHero} alt="" className="mx-auto" />
        </div>
      </div>

      <StatsSection></StatsSection>
      <Trandings data={data}></Trandings>
    </div>
  );
};

export default Bannar;
