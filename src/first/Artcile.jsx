import React from "react";
import Back from "../assets/vector.png";
import img1 from "../assets/articleImage1.png";
import img2 from "../assets/articleImage2.png";
import img3 from "../assets/articleImage3.png";
import EastIcon from "@mui/icons-material/East";

const Artcile = () => {
  return (
    <div className="mt-32 ">
      <svg
        className="absolute right-0"
        xmlns="http://www.w3.org/2000/svg"
        width="478"
        height="516"
        viewBox="0 0 478 516"
        fill="none"
      >
        <path
          d="M766.998 386.364C717.381 446.026 615.061 372.618 470.041 409.048C344.438 440.615 338.903 517.023 237.942 515.53C164.183 514.453 82.9111 473.72 37.095 400.585C-13.4312 319.949 2.37557 236.33 6.88435 216.024C27.003 124.945 91.7284 75.6738 114.575 58.8284C208.703 -10.5331 316.305 -1.19213 367.925 3.26331C561.831 20.0621 772.042 153.461 784.667 303.389C786.338 323.017 789.395 359.423 766.998 386.364Z"
          fill="url(#paint0_linear_58_282)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_58_282"
            x1="287.009"
            y1="635.124"
            x2="468.152"
            y2="44.8754"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F3F7FF" />
            <stop offset="1" stop-color="#DEEEFE" />
          </linearGradient>
        </defs>
      </svg>
      <div className="h-[1200px], w-full  relative flex gap-12 justify-center items-center ">
        <Card
          image={img1}
          heading="Disease detection, check 
                up in the laboratory"
          content="In this case, the role of the health laboratory is very important to do
                a disease detection..."
        />
        <Card
          image={img2}
          heading="Herbal medicines that are 
                safe for consumption"
          content="Herbal medicine is very widely used at this time because of its very good for your health..."
        />
        <Card
          image={img3}
          heading="Natural care for healthy 
                facial skin"
          content="A healthy lifestyle should start from now and also for your skin health.
                There are some..."
        />
      </div>
    </div>
  );
};

const Card = ({ image, heading, content }) => {
  return (
    <>
    <div className=" rounded-xl h-[512px] w-[350px] bg-white overflow-hidden shadow-xl">
      <img src={image} alt="" />
      <h1 className="text-xl p-6 font-bold text-gray-800 ">{heading}</h1>
      <p className="px-6 text-gray-400 ">{content}</p>
      <button className="p-6  text-blue-400 text-lg font-semibold">Read More <EastIcon className="h-[5px]"/> </button>
    </div>
    </>
  );
};
export default Artcile;
