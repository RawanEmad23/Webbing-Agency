import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img3 from "../../../assets/imgs/client.jfif";

const Ourclient = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, // نترك النقاط مفعلة
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
          dots: false, 
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
    
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
    {img: img3, title: 'Mariam Mohamed', description: 'Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.' },
  ];

  return (
    <div className='w-full h-[500px] bg-[#EFF6FF] mt-20'>
      <div className='container mx-auto'>
        <div className='p-[30px] text-center lg:text-left'> {/* تعديل هنا لجعل النص في المنتصف للشاشات الصغيرة */}
          <h1 className='text-xxl font-bold font-oxanium font-thin'>
            What our <span className='text-[#1F7099] text-xxl font-bold font-oxanium font-thin'>Clients</span> say?
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {slides.map((slide, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-white w-full sm:w-[90%] lg:w-[600px] rounded-lg h-[250px] flex p-8 shadow-custom"> {/* تعديل العرض للشاشات الصغيرة */}
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

          {/* Navigation arrows */}
          <button
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-black p-2 lg:p-4 rounded-full focus:outline-none z-10 bg-gray-200"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 text-black p-2 lg:p-4 rounded-full focus:outline-none z-10 bg-gray-200"
            onClick={nextSlide}
          >
            ❯
          </button>

          <style>
            {`
              .slick-dots {
                position: absolute;
                top: 110%;
                left: 50%;
                transform: translateX(-50%);
                z-index: 20;
              }

              @media (max-width: 768px) {
                .slick-dots {
                  display: none;
                }

                .bg-white {
                  width: 100%; /* عرض 100% للشاشات الصغيرة */
                }
              }

              .slick-dots li button {
                width: 15px;
                height: 15px;
                background-color: #ccc;
                border-radius: 50%;
              }

              .slick-dots li.slick-active button {
                background-color: #1F7099;
              }

              .shadow-custom {
                box-shadow: 0 4px 10 rgba(31, 112, 153, 0.5);
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
