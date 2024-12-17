"use client";
import { CustomCarousel } from "@/components/CustomCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const OurClient = () => {
  // const sliderRef = useRef(null);

  // const settings = {
  //   dots: true, // نترك النقاط مفعلة
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };

  const slides = [
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
    {
      img: "/assets/imgs/client.jfif",
      title: "Mariam Mohamed",
      description:
        "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website.",
    },
  ];

  return (
    <div className="w-full h-[500px] bg-[#EFF6FF] mt-20">
      <div className="container mx-auto">
        <div className="p-[30px] text-center lg:text-left">
          {" "}
          {/* تعديل هنا لجعل النص في المنتصف للشاشات الصغيرة */}
          <h1 className="text-xxl font-bold font-oxanium">
            What our{" "}
            <span className="text-[#1F7099] text-xxl font-bold font-oxanium">
              Clients
            </span>{" "}
            say?
          </h1>
        </div>

        <div className="">
          <div className="container lg:max-w-[85%] mx-auto">
            <CustomCarousel>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="">
                    <div className="bg-white w-full rounded-lg h-[250px] flex p-8 shadow-custom">
                      {" "}
                      {/* تعديل العرض للشاشات الصغيرة */}
                      <Image
            width={400}
            height={400}
                        src={slide.img}
                        className="w-[60px] h-[60px] rounded-full object-cover mr-4"
                        alt=""
                      />
                      <div>
                        <h1 className="text-black text-2xl mb-2">
                          {slide.title}
                        </h1>
                        <div className="flex mb-4">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-600 font-thin">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CustomCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
