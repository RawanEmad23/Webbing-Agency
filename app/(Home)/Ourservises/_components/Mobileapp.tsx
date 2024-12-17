import React from 'react';

import Image from 'next/image';
export default function MobileApp() {
  const services = [
    { title: 'Mobile App Development', icon: "/assets/imgs/image (50).png" },
    { title: 'Website Development', icon: "/assets/imgs/image (50).png" },
    { title: 'UX/UI Design', icon: "/assets/imgs/image(51).png" },
    { title: 'Logo & Branding Design', icon: "/assets/imgs/image(52).png" },
    { title: 'Social Media Management', icon: "/assets/imgs/image(54).png" },
    { title: 'Custom Solution', icon: '/assets/imgs/image(56).png' },
  ];

  return (
    <div className=" ">
    
      <div className="flex flex-col md:flex-row md:justify-around lg:gap-12 py-9 bg-[#eff6ff] border ">
     
        <div className="">
         
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className=' bg-white p-3 rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg '>
                <Image src={service.icon} alt="icon" className="w-8 h-8"  
                 width={2000}
            height={2000} />
                </div>
               
                <span className="text-gray-700">{service.title}</span>
              </li> 
            ))}
          </ul>
        </div>

      
        <div className="">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Mobile <span className="text-[#1f7099]">App</span> Development
          </h2>
          <a
            href="#"
            className="text-[#1f7099] hover:underline mb-4 inline-block"
          >
            Show Projects
          </a>
          <Image
            src={'/assets/imgs/Frame 1437253360.png'}
            alt="Project Image"
            className="w-full h-64 object-cover mb-4 rounded-lg"
            width={2000}
            height={2000}
           
          />
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Native and cross-platform app development.</li>
            <li>Integration with APIs and third-party services.</li>
            <li>Robust security measures for data protection.</li>
            <li>Continuous maintenance and updates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

