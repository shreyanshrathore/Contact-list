import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-72 mt-32 bg-blue-400 flex">
        <div className="ml-44 first-section">
          <div className="logo flex  gap-2 font-medium ">
            <img className="h-10 mt-7 text-white" src={logo} alt="" />
            <h2
              className="mt-8 text-2xl "
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              DERMA MED
            </h2>
          </div>
          <div className="w-96 text-lg text-gray-100 mt-4">
            Derma med is all about healing scars of pateint through our medical
            skills, We just wanna contribute to the society
          </div>
        </div>
        <div className="second-section mt-12 ml-28 ">
            <h1 className="text-xl">Company</h1>
            <p className="mt-8">About</p>
            <p className="mt-4">Testimonial</p>
            <p className="mt-4">Find a Doctor</p>
        </div>

        <div className="Third-section mt-12 ml-28 ">
            <h1 className="text-xl">Region</h1>
            <p className="mt-8">Chhatarpur</p>
            <p className="mt-4">Indore</p>
            <p className="mt-4">Bhopal</p>
        </div>

        <div className="Fourth-section mt-12 ml-28 ">
            <h1 className="text-xl">Help</h1>
            <p className="mt-8">Help Centre</p>
            <p className="mt-4">Instructions</p>
            <p className="mt-4">How It Works</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
