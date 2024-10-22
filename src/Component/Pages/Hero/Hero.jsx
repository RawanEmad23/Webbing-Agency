import React from 'react';
import heroimge from "../../../assets/imgs/image.png"; 
import partimge from "../../../assets/imgs/59fe0f54cc381ab9e10410ad71c48cf4.png";

export default function Hero() {
  return (
    <div style={{
      backgroundImage: `url(${heroimge})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'contain', 
      backgroundPosition: 'top 80px center', 
    }}>
      <div className="container min-h-screen mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
        
        {/* النص يتمركز في الشاشة الصغيرة ويعود للوضع العادي في الشاشة الكبيرة */}
        <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-xxl font-bold font-oxanium font-thin mb-4">
            Transforming Ideas into Digital Solutions
          </h1>
          <p className="mb-6 text-2xl font-extraThin font-inter mb-12">
            We  tt deliver innovative UI/UX design, website and app development, and social media solutions tailored to your business needs. Let’s turn your ideas into impactful digital solutions.
          </p>
          <button
            className="text-white py-2 px-[70px] rounded-full"
            style={{
              background: 'linear-gradient(to left, #A2C6D9, #1F7099)',
            }}
          >
            Get Started
          </button>
        </div>

        {/* الصورة تظهر فقط على الشاشات الكبيرة */}
        <div className="lg:w-1/2 p-4 flex justify-end hidden lg:flex">
          <img
            src={partimge}
            className="w-full h-[60vh] lg:h-[85vh] object-cover"
            alt="Hero Part Image"
          />
        </div>
      </div>
    </div>
  );
}
