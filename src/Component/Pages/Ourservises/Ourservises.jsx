import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/imgs/icon1.png";
import icon2 from "../../../assets/imgs/icon2.png";

const icons = [icon2, icon1, icon1]; 

export default function Ourservices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);

  const services = [
    {
      title: 'Mobile App Development',
      description: 'We design and develop custom mobile apps that deliver seamless user experiences on both iOS and Android platforms. Whether you need a simple app or a complex solution, our team ensures top-notch performance and aesthetics.',
      link: '/projects',
    },
    {
      title: 'Website Development',
      description: 'From responsive web designs to fully functional websites, we build digital platforms optimized for performance and audience engagement. Our expertise in front-end and back-end development ensures seamless user experience.',
      link: '/projects',
    },
    {
      title: 'UI/UX Design',
      description: 'Our UI/UX design team creates intuitive and visually engaging user interfaces that enhance the user experience. We focus on usability, aesthetics, and functionality to ensure your product is user-friendly and effective.',
      link: '/projects',
    }
  ];

  useEffect(() => {
    // Disable animation for small screens (mobile)
    if (window.innerWidth >= 1024) { // lg breakpoint
      const interval = setInterval(() => {
        setIsFading(false);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
          setIsFading(true);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [services.length]);

  return (
    <div className="relative">
      <h1 className="text-center text-2xl font-semibold p-6 text-2xl font-semibold mb-5 text-xxl  font-oxanium font-thin">
        Our <span className='text-[#1F7099] '>Services</span>
      </h1>

      {/* Active service card with smooth transition for large screens only */}
      <div
        className={`absolute hidden lg:flex items-center h-[300px] top-[30%] left-[50%] transform -translate-x-1/2 bg-white p-10 lg:p-14 rounded-xl z-10 max-w-[500px] shadow-[0px_0px_16px_0px_#1963B966] transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          style={{
            backgroundImage: `url(${icons[activeIndex]})`,
            width: '120px',
            height: '90px',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            marginRight: '20px',
            borderRadius: '50%',
            backgroundRepeat: "no-repeat"
          }}
          className='border-[2px] border-[#1F7099] shadow-md p-2 mb-[110px]'
        />
        <div className="text-left">
          <h3 className='text-xl font-semibold text-[#2E2E2E] mb-2'>{services[activeIndex].title}</h3>
          <p className='text-gray-600 leading-6 mb-4 max-w-[400px]'>
            {services[activeIndex].description}
          </p>
          <Link to={services[activeIndex].link} className='underline text-[#1F7099] '>Show Projects</Link>
        </div>
      </div>

      {/* Non-active service cards */}
      <div className='flex flex-col lg:flex-row container gap-6 mx-auto mt-16'>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col w-full lg:w-[700px] items-center lg:flex-row lg:items-start`}
            onClick={() => setActiveIndex(index)}
          >
            <div className='p-6 h-[250px] w-full bg-white border border-gray-200 rounded-xl shadow-[0px_0px_16px_0px_#1963B966] text-black flex items-center cursor-pointer'>
              <div
                style={{
                  backgroundImage: `url(${icons[index]})`, 
                  width: '127px',
                  height: '60px',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: "no-repeat",
                  marginRight: '10px',
                  borderRadius: '50%',
                }}
                className='border-[2px] text-[#1F7099] shadow-md p-2'
              />
              <div className="flex-grow flex flex-col justify-center">
                <h3 className='text-xl font-semibold'>{service.title}</h3>
                <p className='text-gray-700'>{service.description}</p>
                <Link to={service.link} className='underline text-[#1F7099] '>Show Projects</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
