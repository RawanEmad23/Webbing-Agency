import React from "react";
import Image from "next/image";
import { api, baseUrl } from "@/lib/axios";
import { redirect } from "next/navigation";
import RichViewer from "../_components/RichViewer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projectdetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const res = await api.get(`projects?populate=*&filters[slug][$eq]=${slug}`);
  if (res.data.data.length === 0) {
    redirect("/");
  }

  const project = res.data.data[0];
  console.log(project);

  return (
    <div className="mt-20">

      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5 font-oxanium">
          Project{" "}
          <span className="text-[#1F7099] font-bold">Details</span>
        </h1>
        <p className="text-lg font-bold mt-2">{project.title}</p>
      </div>

   
      <div className="prose mx-auto my-10 text-center">
        <RichViewer content={project.description} />
      </div>

     
      <div className="py-10 px-4 lg:px-32">
        <Carousel className="relative">
          <CarouselContent className="transition-all duration-500 ease-in-out">

        
            {project.screensMobile?.length > 0 ? (
              project.screensMobile.map((screen: any, index: number) => (
                <CarouselItem
                  key={`mobile-${index}`}
                  className="flex justify-center items-center"
                >
                  <div className="w-full sm:w-80 md:w-96 lg:w-96 xl:w-96 rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src={`${baseUrl}${screen.url}`}
                      alt={`Mobile Screen ${index + 1}`}
                      width={640}
                      height={1407}
                      className="w-full h-auto object-cover rounded-xl"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p>No mobile screens available</p>
            )}

            {project.screenMobile && (
              <CarouselItem className="flex justify-center items-center">
                <div className="w-full sm:w-80 md:w-96 lg:w-96 xl:w-96 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={`${baseUrl}${project.screenMobile.url}`}
                    alt={project.screenMobile.alternativeText || "Mobile Screen"}
                    width={project.screenMobile.width}
                    height={project.screenMobile.height}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                </div>
              </CarouselItem>
            )}

            {project.screenWeb && (
              <CarouselItem className="flex justify-center items-center">
                <div className="w-full sm:w-80 md:w-96 lg:w-96 xl:w-96 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={`${baseUrl}${project.screenWeb.url}`}
                    alt={project.screenWeb.alternativeText || "Web Screen"}
                    width={project.screenWeb.width}
                    height={project.screenWeb.height}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>

        
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <CarouselPrevious className="text-white bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100">
             
            </CarouselPrevious>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <CarouselNext className="text-white bg-gray-800 p-2 rounded-full opacity-75 hover:opacity-100">
       
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projectdetails;
