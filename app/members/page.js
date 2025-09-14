
// import Link from "next/link";

// export default function Team() {
//     return (
//         <div className="w-screen h-screen flex flex-col items-center justify-center">
//             <h1 className="text-6xl font-bold text-emerald-600 mb-6">Our Team</h1>
//             {/* <Image src='/pictures/team.jpg' height={500} width={800} className="rounded-lg shadow-lg" /> */}
//             <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
//                 Meet the brilliant minds behind our autonomous vehicle projects. A team of engineers, programmers, and visionaries working together.
//             </p>
//             <Link href="/#home" className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-md">Go Back</Link>
//         </div>
//     );
// }
// import Link from "next/link";

// export default function Team() {
//     return (
//         <div className="w-screen h-screen flex flex-col">
//             {/* Main Content */}
//             <div className="flex-grow flex flex-col items-center justify-center">
//                 <h1 className="text-6xl font-bold text-emerald-600 mb-6">Our Team</h1>
//                 {/* <Image src='/pictures/team.jpg' height={500} width={800} className="rounded-lg shadow-lg" /> */}
//                 <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
//                     Meet the brilliant minds behind our autonomous vehicle projects. A team of engineers, programmers, and visionaries working together.
//                 </p>
//                 {/* <Link href="/#home" className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-md">Go Back</Link> */}
//             </div>

//             {/* Footer - Stays at the Bottom */}
//             <footer className="w-full py-6 text-center bg-gray-900 text-white">
//                 <p>© 2025 Auto Z. All rights reserved.</p>                
//                 <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
//                 <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
//             </footer>
//         </div>
//     );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Team() {
  const scrollRef = useRef(null);
  const [popupImg, setPopupImg] = useState(null); // for modal

  const onLeft = () => {
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft - 21 * rem,
      behavior: "smooth",
    });
  };

  const onRight = () => {
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft + 21 * rem,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-8 py-12 mt-8">
        {/* Heading with scroll margin */}
        <h1
          id="our-team"
          className="text-6xl font-bold text-emerald-600 mb-6 scroll-mt-24"
        >
          Our Team
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-12">
          Meet the brilliant minds behind our autonomous vehicle projects. A
          team of engineers, programmers, and visionaries working together.
        </p>

        {/* Leader Image */}
        <section className="w-full max-w-4xl flex justify-center mb-16">
          <Image
            src="/pictures/IMG_4302.JPG"
            width={800}
            height={500}
            className="rounded-lg shadow-lg object-cover cursor-pointer"
            alt="Team Leaders"
            onClick={() => setPopupImg("/pictures/IMG_4302.JPG")}
          />
        </section>

        {/* Domain Teams Horizontal Scroll */}
        <section className="w-full max-w-6xl relative">
          <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-8">
            Domain Teams
          </h2>

          {/* Scroll Buttons */}
          <button
            onClick={onLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-emerald-100"
          >
            ◀
          </button>
          <button
            onClick={onRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-emerald-100"
          >
            ▶
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scrollbar-hide px-12"
          >
            {[
              { domain: "Management", img: "/pictures/IMG_4276.JPG" },
              { domain: "Electrical", img: "/pictures/IMG_4288.JPG" },
              { domain: "Mechanical", img: "/pictures/IMG_4299.JPG" },
              { domain: "Autonomy", img: "/pictures/IMG_4291.JPG" },
            ].map((team, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-shrink-0 w-72 bg-white shadow-md rounded-lg p-4"
              >
                <Image
                  src={team.img}
                  width={300}
                  height={200}
                  className="rounded-md object-cover mb-4 cursor-pointer"
                  alt={team.domain}
                  onClick={() => setPopupImg(team.img)}
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {team.domain}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-gray-900 text-white mt-12">
        <p>© 2025 Auto Z. All rights reserved.</p>
        <a
          href="mailto:teamautoz2020@gmail.com"
          className="text-emerald-400 block mt-2"
        >
          Email Us
        </a>
        <Link href="/" className="text-emerald-400 block mt-2">
          Go Back
        </Link>
      </footer>

      {/* Modal for Image Popup */}
      {popupImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPopupImg(null)}
        >
          <Image
            src={popupImg}
            width={1000}
            height={700}
            className="rounded-lg shadow-lg object-contain max-h-[90%] max-w-[90%]"
            alt="Popup"
          />
        </div>
      )}
    </div>
  );
}
