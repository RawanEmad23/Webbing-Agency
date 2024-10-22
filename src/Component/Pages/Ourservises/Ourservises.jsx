import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/imgs/icon1.png";

export default function Ourservices() {
  const [activeIndex, setActiveIndex] = useState(0); // تتبع العنصر النشط

  // العناصر المتاحة
  const services = [
    {
      title: 'Mobile App Development',
      description: 'We design and develop custom mobile apps that deliver seamless user experiences...',
      link: '/projects',
    },
    {
      title: 'Website Development',
      description: 'From responsive web designs to fully functional websites...',
      link: '/projects',
    },
    {
      title: 'Another Service',
      description: 'This is another service that we offer...',
      link: '/projects',
    }
  ];

  // استخدام useEffect لتدوير العناصر تلقائيًا
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length); // التدوير إلى العنصر التالي
    }, 1000); // تغيير كل ثانية

    return () => clearInterval(interval); // تنظيف المؤقت عند فك التركيب
  }, [services.length]);

  return (
    <div className="relative">
      <h1 className="text-center text-2xl font-semibold p-6 text-xxl font-bold font-oxanium font-thin">Our <span className='text-[#1F7099] text-xxl font-bold font-oxanium font-thin'>Services</span> </h1>

      {/* العنصر النشط */}
      <div className={`absolute flex items-center top-[30%] left-[50%] transform -translate-x-1/2 bg-white p-14 rounded-lg z-10 max-w-[550px] shadow-[0px_0px_16px_0px_#1963B966]`}>
        <div
          style={{
            backgroundImage: `url(${icon1})`,
            width: '90px',
            height: '90px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginRight: '20px',
            borderRadius: '50%',
          }}
          className='border-[1px] border-[#1F7099] mb-[110px]'
        />
        <div>
          <h3 className='text-xl font-semibold'>{services[activeIndex].title}</h3>
          <h4 className='text-gray-700'>
            {services[activeIndex].description}
          </h4>
          <Link to={services[activeIndex].link} className='underline text-blue-600'>Show Projects</Link>
        </div>
      </div>

      {/* العناصر الأخرى */}
      <div className='flex flex-col lg:flex-row container gap-6 mx-auto mt-16'>
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col w-full lg:w-[700px] items-center lg:flex-row lg:items-start ${activeIndex === index ? 'hidden' : ''}`}
            onClick={() => setActiveIndex(index)} // تحديد العنصر النشط عند الضغط
          >
            <div className='p-6 h-[250px] w-full bg-white border border-gray-200 rounded-lg shadow-[0px_0px_16px_0px_#1963B966] text-black flex items-center cursor-pointer'>
              <div
                style={{
                  backgroundImage: `url(${icon1})`,
                  width: '90px',
                  height: '90px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginRight: '20px',
                  borderRadius: '50%',
                }}
                className='border-[1px] border-[#1F7099]'
              />
              <div className="flex-grow">
                <h3 className='text-xl font-semibold'>{service.title}</h3>
                <h4 className='text-gray-700'>{service.description}</h4>
                <Link to={service.link} className='underline text-blue-600'>Show Projects</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
