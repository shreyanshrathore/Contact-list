import React from 'react'
import fram1 from '../assets/Frame1.png'
import fram2 from '../assets/Frame2.png'
import fram3 from '../assets/Frame3.png'
import fram4 from '../assets/Frame4.png'
import fram5 from '../assets/Frame5.png'
import fram6 from '../assets/Frame6.png'

const Card = () => {
  return (
    <div className="flex flex-wrap mx-44 h-[780px] mt-20 gap-4 md:grid md:grid-cols-3 relative">
        <Div img = {fram1} heading = {"Search Doctor"} para = {"Choose your doctor from thousands of specialist, general, and trusted hospitals"} />
        <Div img = {fram2} heading = {"Online pharmacy"} para = {"Buy  your medicines with our mobile application with a simple delivery system"} />
        <Div img = {fram3} heading = {"Consultation"} para = {"Free consultation with our trusted doctors and get the best recomendations"}/>
        <Div img = {fram4} heading = {"Details Info"} para ={"Free consultation with our trusted doctors and get the best recomendations"} />
        <Div img = {fram5} heading = {"Emergency Care"} para = {"You can get 24/7 urgent care for yourself or your children and your lovely family"} />
        <Div img = {fram6} heading = {"Tracking"} para = {"Track and save your medical history and health data "} />
      </div>
  )
}

const Div = (props) =>{
  return(
    <div className='bg-white rounded-xl shadow-lg shadow-blue-100  p-4 w-[350px] h-[354px]'>
        <img className='px-4 py-8 h-36' src={props.img} alt="" />
        <h1 className=' px-4 font-semibold font- text-2xl'>{props.heading}</h1>
        <p className='px-4 font-normal text-gray-400 py-4 w-72'>{props.para}</p>
    </div>
  )
}
export default Card