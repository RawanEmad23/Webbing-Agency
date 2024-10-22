import React, { useState, useEffect } from "react";
import partimge from "../../assets/imgs/59fe0f54cc381ab9e10410ad71c48cf4.png";
import image from "../../assets/imgs/image (12).png";

export default function Hero2() {
  const [currentImage, setCurrentImage] = useState(partimge);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === partimge ? image : partimge));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between min-h-screen">
        
        {/* النص يتمركز في الشاشة الصغيرة ويعود للوضع العادي في الشاشة الكبيرة */}
        <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-xxl font-bold text-[#1F7099] font-oxanium font-thin mb-4">
            Our Projects
          </h1>
          <p className="mb-6 text-2xl font-extraThin font-inter mb-12">
            Take a look at some of our recent work and see how we bring ideas to life through innovative design, cutting-edge technology, and a commitment to excellence in every project.
          </p>
        </div>

        {/* الصورة تظهر فقط في الشاشات الكبيرة */}
        <div className="lg:w-1/2 p-4 flex justify-center lg:justify-end mt-16 hidden lg:flex">
          <img
            src={currentImage}
            className="w-full h-[60vh] lg:h-[85vh] object-cover"
            alt="Hero Part Image"
          />
        </div>
      </div>
    </div>
  );
}
