import React from 'react';
import img from "../../../assets/imgs/immmg.png";
import img2 from "../../../assets/imgs/1111111.png";
import img3 from "../../../assets/imgs/fluent-emoji_laptop.png";
import img4 from "../../../assets/imgs/image (1).png";

export default function Chooseus() {
  return (
    <div className=" min-h-screen flex items-center justify-center mt-[70px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8"> 
        
        {/* القسم الأيسر: الصورة */}
        <div className="relative lg:block hidden"> {/* فقط تظهر على الشاشات الكبيرة */}
          <img
            src={img}
            style={{
              width: '400px',
              height: 'auto',
            }}
            alt="Team working"
          />
          {/* المربع في الأسفل */}
          <div className="absolute bottom-0 left-10 bg-white p-4 shadow-lg rounded-lg flex space-x-4">
            <div>
              <span className="text-2xl font-bold">50+</span>
              <p className="text-sm text-gray-600">Client review</p>
            </div>
            <div>
              <span className="text-2xl font-bold">20+</span>
              <p className="text-sm text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>

        {/* القسم الأيمن: النص */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"> 
          <h1 className="text-xxl font-bold font-oxanium font-thin mb-6">
            Why <span className="text-[#1F7099] text-xxl font-bold font-oxanium font-thin">Choose </span> Us?
          </h1>

          <div className="space-y-8">
            {/* العنصر الأول */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-x-4">
              <div>
                <img src={img2} alt="" className="w-8 mb-4 sm:mb-0" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Focus on Innovation & Scalability</h3>
                <p className="text-gray-600">
                  We craft innovative solutions that not only <br />
                  meet today’s needs but are scalable to <br />
                  grow with your business.
                </p>
              </div>
            </div>

            {/* العنصر الثاني */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-x-4">
              <div>
                <img src={img3} alt="" className="w-8 mb-4 sm:mb-0" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expertise along Industries</h3>
                <p className="text-gray-600">
                  With experience in UI/UX design, web development, <br />
                  and app solutions, we've worked with a diverse range <br />
                  of clients across various industries.
                </p>
              </div>
            </div>

            {/* العنصر الثالث */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-x-4">
              <div>
                <img src={img2} alt="" className="w-8 mb-4 sm:mb-0" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  Even after the project is complete, we're here <br />
                  to provide ongoing support and ensure your <br />
                  digital solution continues to perform at its best.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
