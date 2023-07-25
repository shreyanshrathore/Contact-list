import React, { useEffect, useState } from "react";
import element from "../assets/element.png";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
  const [index,setIndex] = useState(0);
  const [point,setPoint] = useState(0);
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply new animations
  }, index); // Run this effect every time 'index' changes

  const info = [
    {
      name: "Shalini Kushwaha",
      position: "Doctor",
      review: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
    },
    {
      name: "Shreyansh Rathore",
      position: "Student",
      review:
        " “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
      name: "Shreyanshi Kushwaha",
      position: "Student",
      review: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
    },
    {
      name: "Shreyanshi ",
      position: "Student",
      review: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
    },
    {
      name: "Shreyanshi Kushwaha ",
      position: "Student",
      review: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
    }
  ];
  const handleLeft = () =>{
    setIndex((item)=>item-1 <0 ?item: item-1 )
    setPoint((item)=> item == 0? 0: item-1);
    console.log(index);
  }
  const handleRight = () =>{
    setIndex((item)=>item+1 >info.length-1 ?item: item+1 )
    setPoint((item)=> item == 3? 3: item+1);
    console.log(index);
  }
  return (
    <>
      <div className="CARD_SLIDER flex justify-center mt-44">
        <div className="h-96 rounded-[30px] w-[1120px] bg-gradient-to-br from-blue-400 via-blue-400 to-blue-400 relative">
          <img
            className="relative ml-[1060px]  mt-[-20px] left-0"
            src={element}
          />
          <div className="flex flex-col items-center  w-full">
            <div className="heading-container text-center">
              <h1 className="text-white text-4xl font-semibold">
                What our Customers are saying
              </h1>
            </div>
            <div className="h-[2.5px] w-14 mt-8 bg-white mt-6"></div>
          </div>
          <div
            className="CUSTOMER flex mt-14 items-center"
            
            data-aos="fade-up" // Animation based on the index change
          >
            <div className=" h-32 w-32 rounded-full bg-white ml-32 "></div>
            <div className="name ml-12">
              <h1 className="text-white text-2xl">{info[index].name}</h1>
              <p className="text-lg text-gray-300">{info[index].position}</p>
            </div>
            <p className="w-[410px] ml-28 text-lg text-gray-200">
              {info[index].review}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 mt-8">
        <WestIcon className="text-blue-500 cursor-pointer" onClick = {handleLeft} />
        <div className="flex gap-4 items-center">
          <div className={`h-[10px] w-[10px] rounded-full ${point == 0? "bg-blue-500 h-[13px] w-[13px]": "bg-blue-200"}`}  ></div>
          <div className={`h-[10px] w-[10px] rounded-full ${point == 1? "bg-blue-500 h-[13px] w-[13px]": "bg-blue-200"}`}  ></div>
          <div className={`h-[10px] w-[10px] rounded-full ${point == 2? "bg-blue-500 h-[13px] w-[13px]": "bg-blue-200"}`}  ></div>
          <div className={`h-[10px] w-[10px] rounded-full ${point == 3? "bg-blue-500 h-[13px] w-[13px]": "bg-blue-200"}`}  ></div>
        </div>
        <EastIcon className="text-blue-500 cursor-pointer" onClick = {handleRight}/>
      </div>
    </>
  );
};

export default Slider;
