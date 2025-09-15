'use client';

import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex h-full w-full p-4 overflow-hidden">
      {/* Left heading column */}
      <div className="flex flex-col w-64 pr-8">
        <div className="flex-grow flex items-center">
          <h1 className="font-black text-5xl">Gallery</h1>
        </div>
      </div>

      {/* Right image gallery with vertical scroll */}
      <div className="flex-grow overflow-y-auto flex flex-wrap gap-4">
        <GalleryImage src="/pictures/qubi.jpg" alt="Qubi" />
        <GalleryImage src="/pictures/l3.jpg" alt="L3" />
        <GalleryImage src="/pictures/drone.jpg" alt="Drone" />
        <GalleryImage src="/pictures/pratham.jpg" alt="Pratham" />
        <GalleryImage src="/pictures/team.jpg" alt="Team" />
        <GalleryImage src="/pictures/bot.jpg" alt="Bot" />
        <GalleryImage src="/pictures/android_medium_page1.jpg" alt="Android Medium" />
      </div>
    </div>
  );
}

function GalleryImage({ src, alt }) {
  return (
    <div className="relative w-48 h-60 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  );
}
