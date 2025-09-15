'use client'

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const elRef = useRef();

  const onRight = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    elRef.current?.scrollTo({
      left: elRef.current?.scrollLeft + 21 * rem,
      behavior: "smooth",
    });
  };

  const onLeft = () => {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    elRef.current?.scrollTo({
      left: elRef.current?.scrollLeft - 21 * rem,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col h-full w-full p-4">
        <div className="flex-grow flex flex-col items-center px-8 py-12 mt-8"></div>
      <h1 className="font-black text-5xl mb-6">Projects</h1>
      

      <div className="relative flex items-center w-full flex-grow">
        {/* Left scroll button */}
        <button
          onClick={onLeft}
          aria-label="Scroll left"
          className="z-20 p-2 bg-black rounded-full text-white absolute left-0 top-1/2 -translate-y-1/2"
          style={{ width: 40, height: 40 }}
        >
          &#8249; {/* Left arrow symbol */}
        </button>

        {/* Scroll container */}
        <div
          ref={elRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 py-4 px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Each project card */}
          <ProjectCard
            src="/pictures/qubi.jpg"
            title="Qubi"
            description="Our latest autonomous ground vehicle. Its smaller and more stable than our previous foray into UGVs."
            link="#"
          />
          <ProjectCard
            src="/pictures/drone.jpg"
            title="UAV"
            description="We go flying. Land vehicles get boring over time. We are experimenting with a hexacopter :)"
            link="#"
          />
          <ProjectCard
            src="/pictures/pratham.jpg"
            title="Pratham (archived)"
            description="An autonomous ground vehicle developed by our OG group. The spark that started our journey."
            link="#"
          />
          <ProjectCard
            src="/pictures/l3.jpg"
            title="L3 (archived)"
            description="Originally a Maruti Ecco with a custom EV conversion. Now a minivan with a stack ready for level 3 autonomy."
            link="#"
          />
        </div>

        {/* Right scroll button */}
        <button
          onClick={onRight}
          aria-label="Scroll right"
          className="z-20 p-2 bg-black rounded-full text-white absolute right-0 top-1/2 -translate-y-1/2"
          style={{ width: 40, height: 40 }}
        >
          &#8250; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ src, title, description, link }) {
  return (
    <div className="w-72 flex-shrink-0 rounded-lg shadow-lg bg-white">
      <Image src={src} alt={title} width={400} height={500} className="rounded-t-lg" />
      <div className="p-4">
        <h2 className="font-display font-bold text-xl mb-2">{title}</h2>
        <p className="text-slate-600 mb-4 line-clamp-3">{description}</p>
        {/* <Link href={link} className="font-bold underline">
          More Details ...
        </Link> */}
      </div>
    </div>
  );
}
