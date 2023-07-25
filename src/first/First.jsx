import React from "react";
import img from "../assets/Backgroun_img.png";
import logo from "../assets/logo.png";
import element from "../assets/element.png";
import element1 from "../assets/element1.png";
import Back2 from "../assets/back-2.png";
import Back3 from "../assets/back-3.png";
import GoogleFontLoader from "react-google-font-loader";
import Card from "./Card";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import Article from "./Artcile";
import Footer from './Footer'

const First = () => {
  const navigate = useNavigate();
  const handleResult = () => {
    navigate("/result");
  };
  return (
    <div>
      <GoogleFontLoader fonts={[{ font: "Work Sans", weights: [400, 700] }]} />
      <nav className="bg-white text-black flex justify-between">
        <div className="logo flex ml-44 gap-2 font-medium">
          <img className="h-10 mt-7" src={logo} alt="" />
          <h2
            className="mt-8 text-2xl "
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            DERMA MED
          </h2>
        </div>
        <ul className="flex pr-24 mt-8 space-x-12 justify-end">
          <li className="cursor-pointer font-bold">Home</li>
          <li className="cursor-pointer text-gray-500" onClick={handleResult}>
            Our Results
          </li>
          <li className="cursor-pointer text-gray-500">Our facilities</li>
          <li className="cursor-pointer text-gray-500">About Us</li>
        </ul>
      </nav>
      <div className="flex ">
        <img className="mt-20 h-28" src={element} alt="" />
        <div className=" max-w-screen-xl ml-32 mt-52 mr">
          <h1 className="text-5xl  font-bold">Virtual Healthcare for You</h1>
          <p className="mt-6 text-gray-500 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ut optio autem quibusdam dolore doloribus enim id
            explicabo aliquid
          </p>
          <button className="rounded-full bg-blue-500 px-12 py-4 text-lg font-bold mt-14  text-white">
            Consult Today
          </button>
        </div>
        <img className="ml-28 mt-24" src={img} alt="" />
      </div>

      <div className="font-bold flex justify-center text-4xl mt-52">
        Our Services
      </div>
      {/* Horizontal line */}
      <div className="flex justify-center mt-5">
        <div className="h-[2.5px] w-14 bg-black mt-2"></div>
      </div>

      <p
        contentEditable="true"
        className="w-2/3 mx-auto text-center mt-8 text-gray-400 text-lg"
      >
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <br />
      <br />

      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        width="765"
        height="619"
        viewBox="0 0 765 619"
        fill="none"
      >
        <path
          d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z"
          fill="url(#paint0_linear_23_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_23_3"
            x1="429.823"
            y1="-145.173"
            x2="195.583"
            y2="560.635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F3F7FF" />
            <stop offset="1" stop-color="#DEEEFE" />
          </linearGradient>
        </defs>
      </svg>
      <img src={element1} className="absolute mt-96  mr-36 right-0  " alt="" />

      <Card />
      <div className="flex justify-center mt-10">
        <button className="font-semibold text-blue-500 text-xl border-2 border-blue-500 rounded-full px-10 py-3">
          Learn More
        </button>
      </div>

      <div className="flex justify-center gap-20 mt-44 SECOND-CARD">
        <div className="">
          <img src={Back2} alt="" />
        </div>

        <div className="w-[450px] mt-20 ">
          <h1 className="font-semibold text-4xl">Leading Healthcare </h1>
          <h1 className="font-semibold text-4xl mt-4">Providers </h1>
          <div className="h-[2.5px] w-14 bg-black mt-6"></div>
          <p className="mt-6 text-gray-400 w-96 text-lg leading-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="mt-12 font-semibold text-blue-500 text-xl border-2 border-blue-500 rounded-full px-12 py-3">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-44 ml-24 THIRD-CARD">
        <div className="w-[450px] mt-20 ">
          <h1 className="font-[650] text-4xl">Download our </h1>
          <h1 className="font-[650]  text-4xl mt-4">mobile apps </h1>
          <div className="h-[2.5px] w-14 bg-black mt-6"></div>
          <p className="mt-6 text-gray-400 w-96 text-lg leading-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="mt-12 font-semibold text-blue-500 text-xl border-2 border-blue-500 rounded-full px-12 py-3">
            Download
          </button>
        </div>

        <div className="">
          <img src={Back3} alt="" />
        </div>
      </div>

      <Slider />

      <div className="FOUTH_PART flex flex-col items-center mt-44   ">
        <h1 className="text-3xl font-semibold">Check out our latest article</h1>
        <div className="h-[2.5px] w-14 bg-black mt-6"></div>
      </div>
      <div className="w-full">
        <Article />
      </div>
      <div className="flex justify-center mt-32">
        <button className="font-semibold w-56  text-blue-500 text-xl border-2 border-blue-500 rounded-full px-10 py-3">
          Learn More
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default First;
