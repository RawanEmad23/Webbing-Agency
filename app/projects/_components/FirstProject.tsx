"use client";
import Image from "next/image";
import Link from "next/link";
import RichViewer from "./RichViewer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FirstProject({
  projects,
}: {
  projects: {
    title: string;
    slug: string;
    desc: [];
    services: { title: string; documentId: string }[];
    description: [];
    screenMobile: { url: string };
    screenWeb: { url: string };
    screensMobile: {
      url: string;
    }[];
  }[];
}) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    projects && (
      <div className="">
        <div className="pt-12">
          <div className="container mx-auto grid gap-4">
            {projects.map(
              (project: {
                title: string;
                slug: string;
                desc: [];
                services: { title: string; documentId: string }[];
                description: [];
                screenMobile: { url: string };
                screenWeb: { url: string };
                screensMobile: {
                  url: string;
                }[];
              }) => (
                <motion.div
                  key={project.slug}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full"
                  >
                    <Card className="grid grid-cols-1 sm:grid-cols-2 w-full shadow-">
                      <CardHeader className="p-4 flex flex-col justify-center space-y-3">
                        <CardTitle className="text-2xl sm:text-3xl font-bold mb-4 text-wrap">
                          <h2>{project.title}</h2>
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg mb-2 flex gap-x-2 text-muted-foreground">
                          <span className="text-primary">Services Offered:</span>
                          {project.services.map(
                            (service: { title: string; documentId: string }) => (
                              <span key={service.documentId}>
                                {service.title},
                              </span>
                            )
                          )}
                        </CardDescription>
                        <div className="text-muted-foreground text-lg flex flex-wrap">
                          <span className="text-primary">
                            Project Description:{" "}
                          </span>
                          <p className="line-clamp-6">
                            {project?.description && (
                              <RichViewer content={project?.description} />
                            )}
                          </p>
                        </div>
                        <Link
                          href={"/"}
                          className="text-blue-500 mt-4 underline block"
                        >
                          Show Full Project
                        </Link>
                      </CardHeader>
                      <CardContent className="p-4 6">
                        <div className="grid grid-cols-2 gap-4 items-center h-full">
                          <ScrollArea className="lg:h-[32rem]">
                            {project.screenMobile && (
                              <div className="w-full h-auto sm:mr-8">
                                <Image
                                  width={400}
                                  height={400}
                                  className="w-full h-auto object-contain lg:border rounded-lg"
                                  src={project.screenMobile.url}
                                  alt="Main image"
                                />
                              </div>
                            )}
                          </ScrollArea>
                          <div className="grid items-center gap-4">
                            <div className="w-full flex h-full gap-4">
                              {project.screensMobile && project.screensMobile.map((e, index) => (
                                <ScrollArea key={index} className="h-64 w-full">
                                  <Image
                                    width={400}
                                    height={400}
                                    className="w-full h-auto border border-black rounded-lg"
                                    src={e.url}
                                    alt="Large bottom image"
                                  />
                                </ScrollArea>
                              )
                              )}
                            </div>
                            {project.screenWeb && (
                              <ScrollArea className="h-64">
                                <Image
                                  width={400}
                                  height={400}
                                  className="w-full sm:w-full h-auto border border-black rounded-lg"
                                  src={project.screenWeb.url}
                                  alt="Large bottom image"
                                />
                              </ScrollArea>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    )
  );
}