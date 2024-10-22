import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img3 from "../../../assets/imgs/client.jfif";

const Ourclient = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const slides = [
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence. Their attention to detail and client-focused approach made the process smooth and efficient.' },
  ];

  return (
    <div className='w-full h-[500px] bg-[#EFF6FF] mt-20'>
      <div className='container mx-auto'>
        <div className='p-[30px]'>
          <h1 className='text-xxl font-bold font-oxanium font-thin'>
            What our <span className='text-[#1F7099] text-xxl font-bold font-oxanium font-thin'>Clients</span> say?
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {slides.map((slide, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-white w-[600px] rounded-lg h-[250px] flex p-8 shadow-custom"> {/* استخدمنا shadow-custom هنا */}
                  <img src={slide.img} className='w-[60px] h-[60px] rounded-full object-cover mr-4' alt="" />
                  <div>
                    <h1 className="text-black text-2xl mb-2">{slide.title}</h1>
                    <div className="flex mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-600 font-thin">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black p-4 rounded-full focus:outline-none z-10 bg-gray-200"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black p-4 rounded-full focus:outline-none z-10 bg-gray-200"
            onClick={nextSlide}
          >
            ❯
          </button>

          
          <style>
            {`
              .slick-dots {
                position: absolute;
                top: 110%; /* تأكد من ضبط المسافة المناسبة */
                left: 50%;
                transform: translateX(-50%);
                z-index: 20; /* زيادة قيمة z-index لتظهر فوق المحتوى */
              }

              .slick-dots li button {
                width: 15px; /* حجم الدائرة */
                height: 15px; /* حجم الدائرة */
                background-color: #ccc; /* لون الدائرة الافتراضية */
                border-radius: 50%; /* لجعلها دائرية */
              }

              .slick-dots li.slick-active button {
                background-color: #1F7099; /* لون الدائرة النشطة */
              }

              /* إضافة ظل أزرق */
              .shadow-custom {
                box-shadow: 0 4px 10 rgba(31, 112, 153, 0.5); /* ظل بلون أزرق */
              }
            `}
          </style>

        </div>
      </div>
    </div>
  );
};

export default Ourclient;
