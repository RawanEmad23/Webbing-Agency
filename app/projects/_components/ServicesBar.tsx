import { ServiceType } from "@/app/(Home)/_components/servises";
import Link from "next/link";
import React from "react";

export default function ServicesBar({
    services,
    projectsSlug
}: {
    services: ServiceType[],
    projectsSlug: string
}) {
  return (
    <div className=" container mx-auto">
      {/* <ScrollArea className="w-full px-4"> */}
        <ul className="w-full flex flex-wrap text-[#b0a8a8] pt-5 gap-3">
          <li className={`bg-white font-bold text-nowrap border p-2 ${!projectsSlug ? 'border-primary text-primary rounded-md' : ''}`}>
            <Link href="/">All</Link>
          </li>
          {services &&
            services.map((service: ServiceType) => (
              <li key={service.slug} className={`text-nowrap bg-white rounded-md p-2 border ${service.slug === projectsSlug ? 'border-primary text-primary rounded-md p-2' : ''}`}>
                <Link href={`/projects?projects=${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
        </ul>
        {/* <ScrollBar orientation="horizontal" /> */}
      {/* </ScrollArea> */}
    </div>
  );
}