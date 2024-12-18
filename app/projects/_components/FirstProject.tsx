import { baseUrl } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import RichViewer from "./RichViewer";

export default async function FirstProject({ projects }: { projects: { title: string, slug: string, desc: [], services:{title: string , documentId: string}[], description: [], screenMobile: {url: string}, screenWeb: {url: string}, screensMobile: {
  url: string
}[]}[]}) {

  return (
  
    projects && (
      <div className="">
        <div className=" container mx-auto ">
          <ul className=" flex justify-around text-[#b0a8a8] pt-5">
            <li className="text-[#1F7099] font-bold">
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/projects?projects=full-projects">Full Projects</Link>
            </li>
            <li>
              <Link href="/projects?projects=applications">Applications</Link>
            </li>
            <li>
              <Link href="/projects?projects=websites">Websites</Link>
            </li>
            <li>
              <Link href="/projects?projects=logos">Logos</Link>
            </li>
            <li>
              <Link href="/projects?projects=social-media">Social Media</Link>
            </li>
          </ul>
        </div>
        <div className=" min-h-screen">
          <div className="container mx-auto flex flex-col justify-center items-center min-h-full p-4 sm:p-8">
        
            {projects.map((project: { title: string, slug: string, desc: [], services: {title: string , documentId: string}[], description: [], screenMobile: {url: string}, screenWeb: {url: string}, screensMobile: {
              url: string
            }[]}) => (

              <Link
              href={`/projects/${project.slug}`}
                key={project.slug}
                className="w-full p-4 sm:p-8 rounded-3xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 mb-8"
              >
                <div className="w-full flex items-center sm:w-1/2 pr-0 sm:pr-4 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      <RichViewer content={project?.desc} />
                    </p>
                    <p className="text-base sm:text-lg mb-2 flex gap-x-2 text-muted-foreground">
                      <span className="text-primary">Services Offered:</span>
                      {project.services.map((service: { title: string , documentId: string}) => (
                        <span key={service.documentId}>{service.title},</span>
                      ))}
                    </p>
                    <p className="text-muted-foreground text-lg flex flex-wrap">
                      <span className="text-primary">
                        Project Description:{" "}
                      </span>
                      {project?.description && (
                        <RichViewer content={project?.description} />
                      )}
                    </p>
                    <Link href={"/"} className="text-blue-500 mt-4 underline block">
                    Show Full Project
                    </Link>
                
                  </div>
                </div>

             
                <div className="w-full sm:w-1/2 flex flex-col items-center">
                  <div className="flex flex-col sm:flex-row justify-between w-full mb-4 space-y-4 sm:space-y-0">
               
                    {project.screenMobile && (
                      <div className="w-full sm:w-[250px] h-auto sm:mr-8">
                        <Image
                          width={400}
                          height={400}
                          className="w-full h-72 md:h-auto object-contain lg:border rounded-lg"
                          src={baseUrl + project.screenMobile.url}
                          alt="Main image"
                        />
                      </div>
                    )}

                    <div className="flex flex-col items-center">
                      {project.screensMobile &&
                        project.screensMobile.length > 0 && (
                          <div className="flex gap-4 mb-4">
                            {project.screensMobile.map(
                              (image: { url: string }, index: number) => (
                                <Image
                                key={index}
                                  width={400}
                                  height={400}
                                  src={baseUrl + image.url}
                                  className="w-28 h-auto object-contain border border-black rounded-lg"
                                  alt="Image 2"
                                />
                              )
                            )}
                          </div>
                        )}
                      {project.screenWeb && (
                        <div>
                          <Image
                            width={400}
                            height={400}
                            className="w-full sm:w-full h-auto border border-black rounded-lg"
                            src={baseUrl + project.screenWeb.url}
                            alt="Large bottom image"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
