
// import Link from "next/link";


// export default function Projects() {
//     return (
//         <div className="w-screen h-screen flex flex-col items-center justify-center">
//             <h1 className="text-6xl font-bold text-emerald-600 mb-6">Recruitments</h1>
//             <p className="text-lg text-gray-700 text-center max-w-2xl">
//                 We are looking for passionate individuals to join our team! If you're excited about autonomous vehicles, AI, and robotics, this is your chance to be part of something innovative.
//             </p>
//             <Link href="/#home" className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-md">Go Back</Link>
//         </div>
//     );
// }



// import Image from "next/image";
// import Link from "next/link";

// export default function Recruitments() {
//     return (
//         <div className="w-screen h-screen overflow-y-scroll bg-gray-50">
            
//             {/* Why Join Us? */}
//             <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-8">
//                 <h2 className="text-4xl font-bold text-emerald-600">Why Join Us?</h2>
//                 <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
//                     We are a team of passionate engineers, developers, and innovators working on cutting-edge autonomous vehicle technology.
//                 </p>
                
//            </section>

            
//              <section className="py-16 px-8 bg-gray-100 text-center">
//                 <section className="py-16 px-8 bg-white text-center">
//     <h2 className="text-3xl font-bold text-emerald-600 mb-4">Register Your Interest</h2>
//     <p className="text-gray-600 mb-8">
//         Fill in your details and select your preferred domains. You can view the tasks for each domain by clicking on the options below.
//     </p>
//     <form
//         action="https://formspree.io/f/mldbklyy"
//         method="POST"
//         encType="multipart/form-data"
//         className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md text-left space-y-6"
//     >
//         <div>
//             <label className="block mb-2 font-semibold text-gray-700">Name</label>
//             <input
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="Your full name"
//                 className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//             />
//         </div>

//         <div>
//             <label className="block mb-2 font-semibold text-gray-700">Email</label>
//             <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="you@example.com"
//                 className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//             />
//         </div>

//         <div>
//             <label className="block mb-2 font-semibold text-gray-700">Select Your Domains of Interest</label>
//             <div className="flex flex-col gap-2">
//                 {[
//                     "Computer Science / Autonomy",
//                     "Electrical & Electronics",
//                     "Mechanical",
//                     "Graphic Design",
//                     "Video Editing",
//                     "Social Media & Marketing"
//                 ].map((domain, idx) => (
//                     <label key={idx} className="flex items-center gap-2">
//                         <input type="checkbox" name="domains" value={domain} className="accent-emerald-600" />
//                         <span>{domain}</span>
//                     </label>
//                 ))}
//             </div>
//         </div>

//         <div>
//             <label className="block mb-2 font-semibold text-gray-700">Upload Task File (Optional)</label>
//             <input
//                 type="file"
//                 name="taskFile"
//                 className="w-full p-2 rounded-md border border-gray-300"
//             />
//         </div>

//         <button
//             type="submit"
//             className="w-full mt-4 bg-emerald-600 text-white py-3 font-semibold rounded-md hover:bg-emerald-700 transition"
//         >
//             Submit
//         </button>
//     </form>
// </section>

//                 <h2 className="text-3xl font-bold text-emerald-600 mb-8">Available Domains & Tasks</h2>
//                 <div className="max-w-4xl mx-auto text-left space-y-8">
//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800">
//                             <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                 Computer Science / Autonomy
//                             </a>
//                         </h3>
//                         <p className="text-gray-700 mt-2">
//                             Focus on Path Planning, Mapping, Localization, and Perception. Work with open-source libraries and develop an Autonomous Stack—from simple controllers to advanced mapping algorithms.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800">
//                             <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                 Electrical & Electronics
//                             </a>
//                         </h3>
//                         <p className="text-gray-700 mt-2">
//                             Focus on integrating sensors, embedded system design, and control systems. Involves circuit design, PCB development, and digital signal processing.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800">
//                             <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                 Mechanical
//                             </a>
//                         </h3>
//                         <p className="text-gray-700 mt-2">
//                             Involves Research, Design, and Fabrication of mechanical systems. Helpful skills include 3D design, kinematics, and mechatronics but curiosity and innovation matter most.
//                         </p>
//                     </div>

                    

//                         <div className="mt-4">
//                             <h4 className="text-xl font-semibold text-emerald-800">
//                                 <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                     Graphic Design
//                                 </a>
//                             </h4>
//                             <p className="text-gray-700 mt-2">
//                                 Create visual assets such as logos, posters, and other graphics that communicate our mission across social media and marketing channels.
//                             </p>
//                         </div>

//                         <div className="mt-4">
//                             <h4 className="text-xl font-semibold text-emerald-800">
//                                 <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                     Video Editing
//                                 </a>
//                             </h4>
//                             <p className="text-gray-700 mt-2">
//                                 Transform raw footage into engaging video content—reels, documentaries, and more—for platforms like Instagram and YouTube using Premiere Pro, Final Cut Pro, etc.
//                             </p>
//                         </div>

//                         <div className="mt-4">
//                             <h4 className="text-xl font-semibold text-emerald-800">
//                                 <a href="https://github.com/ro-jc/AutoZRecruitments_25" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
//                                     Social Media & Marketing
//                                 </a>
//                             </h4>
//                             <p className="text-gray-700 mt-2">
//                                 Manage the team’s online presence. Create content, research trends, and engage strategically across platforms like Instagram. Strong writing and storytelling skills help!
//                             </p>
//                         </div>
                    
//                 </div>
//             </section>

//              {/* Footer - Stays at the Bottom */}
//              <footer className="w-full py-6 text-center bg-gray-900 text-white">
//                 <p>© 2025 Auto Z. All rights reserved.</p>                
//                 <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
//                 <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
//             </footer>
//         </div>
//     );
// }

// page.js
// import Image from "next/image";
// import Link from "next/link";

// export default function Recruitments() {
//     return (
//         <div className="w-screen min-h-screen overflow-y-scroll bg-gray-50">

//             {/* Why Join Us Section */}
//             <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-8">
//                 <h2 className="text-4xl font-bold text-emerald-600">Why Join Us?</h2>
//                 <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
//                     We are a team of passionate engineers, developers, and innovators working on cutting-edge autonomous vehicle technology.
//                 </p>
//             </section>

//             {/* Registration Form Section */}
//             <section className="py-16 px-8 bg-white text-center">
//                 <h2 className="text-3xl font-bold text-emerald-600 mb-4">Register Your Interest</h2>
//                 <p className="text-gray-600 mb-8">
//                     Fill in your details and select your preferred domains. You can view the tasks for each domain by clicking on the options below.
//                 </p>
//                 <form
//                     action="https://formspree.io/f/mldbklyy"
//                     method="POST"
//                     encType="multipart/form-data"
//                     className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md text-left space-y-6"
//                 >
//                     <div>
//                         <label className="block mb-2 font-semibold text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             required
//                             placeholder="Your full name"
//                             className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-2 font-semibold text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             required
//                             placeholder="you@example.com"
//                             className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//                         />
//                     </div>

//                     <div>
//                         <label className="block mb-2 font-semibold text-gray-700">Select Your Domains of Interest</label>
//                         <div className="flex flex-col gap-2">
//                             {["Computer Science / Autonomy", "Electrical & Electronics", "Mechanical", "Graphic Design", "Video Editing", "Social Media & Marketing"].map((domain, idx) => (
//                                 <label key={idx} className="flex items-center gap-2">
//                                     <input type="checkbox" name="domains" value={domain} className="accent-emerald-600" />
//                                     <span>{domain}</span>
//                                 </label>
//                             ))}
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block mb-2 font-semibold text-gray-700">Upload Task File (Optional)</label>
//                         <input
//                             type="file"
//                             name="taskFile"
//                             className="w-full p-2 rounded-md border border-gray-300"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full mt-4 bg-emerald-600 text-white py-3 font-semibold rounded-md hover:bg-emerald-700 transition"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </section>

//             {/* Domains Section */}
//             <section className="py-16 px-8 bg-gray-100 text-center">
//                 <h2 className="text-3xl font-bold text-emerald-600 mb-8">Available Domains & Tasks</h2>
//                 <div className="max-w-4xl mx-auto text-left space-y-8">
//                     {[
//                         {
//                             title: "Computer Science / Autonomy",
//                             description: "Focus on Path Planning, Mapping, Localization, and Perception. Work with open-source libraries and develop an Autonomous Stack—from simple controllers to advanced mapping algorithms."
//                         },
//                         {
//                             title: "Electrical & Electronics",
//                             description: "Focus on integrating sensors, embedded system design, and control systems. Involves circuit design, PCB development, and digital signal processing."
//                         },
//                         {
//                             title: "Mechanical",
//                             description: "Involves Research, Design, and Fabrication of mechanical systems. Helpful skills include 3D design, kinematics, and mechatronics but curiosity and innovation matter most."
//                         },
//                         {
//                             title: "Graphic Design",
//                             description: "Create visual assets such as logos, posters, and other graphics that communicate our mission across social media and marketing channels."
//                         },
//                         {
//                             title: "Video Editing",
//                             description: "Transform raw footage into engaging video content—reels, documentaries, and more—for platforms like Instagram and YouTube using Premiere Pro, Final Cut Pro, etc."
//                         },
//                         {
//                             title: "Social Media & Marketing",
//                             description: "Manage the team’s online presence. Create content, research trends, and engage strategically across platforms like Instagram. Strong writing and storytelling skills help!"
//                         }
//                     ].map((domain, index) => (
//                         <div key={index}>
//                             <h3 className="text-2xl font-semibold text-gray-800">
//                                 <a
//                                     href="https://github.com/ro-jc/AutoZRecruitments_25"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-emerald-600 hover:underline"
//                                 >
//                                     {domain.title}
//                                 </a>
//                             </h3>
//                             <p className="text-gray-700 mt-2">{domain.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="w-full py-6 text-center bg-gray-900 text-white">
//                 <p>© 2025 Auto Z. All rights reserved.</p>
//                 <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
//                 <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
//             </footer>
//         </div>
//     );
// }

"use client"; // This is required to use useState and client-side logic

import { useState } from "react";
import Link from "next/link";

export default function Recruitments() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [domains, setDomains] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            domains
        };

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert("Form submitted successfully!");
                setName("");
                setEmail("");
                setDomains([]);
            } else {
                alert("Failed to submit form.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };

    const handleDomainChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setDomains([...domains, value]);
        } else {
            setDomains(domains.filter((domain) => domain !== value));
        }
    };

    return (
        <div className="w-screen min-h-screen overflow-y-scroll bg-gray-50">

            {/* Why Join Us Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-8">
                <h2 className="text-4xl font-bold text-emerald-600">Why Join Us?</h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    We are a team of passionate engineers, developers, and innovators working on cutting-edge autonomous vehicle technology.
                </p>
            </section>

            {/* Registration Form Section
            <section className="py-16 px-8 bg-white text-center">
                <h2 className="text-3xl font-bold text-emerald-600 mb-4">Register Your Interest</h2>
                <p className="text-gray-600 mb-8">
                    Fill in your details and select your preferred domains. You can view the tasks for each domain by clicking on the options below.
                </p>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md text-left space-y-6">
                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your full name"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@example.com"
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Select Your Domains of Interest</label>
                        <div className="flex flex-col gap-2">
                            {["Computer Science / Autonomy", "Electrical & Electronics", "Mechanical", "Graphic Design", "Video Editing", "Social Media & Marketing"].map((domain, idx) => (
                                <label key={idx} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="domains"
                                        value={domain}
                                        checked={domains.includes(domain)}
                                        onChange={handleDomainChange}
                                        className="accent-emerald-600"
                                    />
                                    <span>{domain}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Upload Task File (Optional)</label>
                        <input
                            type="file"
                            name="taskFile"
                            disabled
                            className="w-full p-2 rounded-md border border-gray-300 bg-gray-200 cursor-not-allowed"
                        />
                        <p className="text-sm text-gray-500 mt-1">File upload is not handled in this version.</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-emerald-600 text-white py-3 font-semibold rounded-md hover:bg-emerald-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </section> */}
            {/* Registration Form Section */}
<section className="py-16 px-8 bg-white text-center">
  <h2 className="text-3xl font-bold text-emerald-600 mb-4">Register Your Interest</h2>
  <p className="text-gray-600 mb-8">
    Fill in your details and select your preferred domains through the Google Form below.
  </p>

  {/* Google Form Embed */}
  <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSckXERmLnMD7tRm2htKRXMC_1NfRYOtVewQJU0YocdG2eZR3Q/viewform?embedded=true"
      width="100%"
      height="1950"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      className="rounded-md"
    >
      Loading…
    </iframe>
  </div>
</section>

            

            {/* Domains Section */}
            <section className="py-16 px-8 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold text-emerald-600 mb-8">Available Domains & Tasks</h2>
                <div className="max-w-4xl mx-auto text-left space-y-8">
                    {[
                        {
                            title: "Computer Science / Autonomy",
                            description: "Focus on Path Planning, Mapping, Localization, and Perception. Work with open-source libraries and develop an Autonomous Stack—from simple controllers to advanced mapping algorithms."
                        },
                        {
                            title: "Electrical & Electronics",
                            description: "Focus on integrating sensors, embedded system design, and control systems. Involves circuit design, PCB development, and digital signal processing."
                        },
                        {
                            title: "Mechanical",
                            description: "Involves Research, Design, and Fabrication of mechanical systems. Helpful skills include 3D design, kinematics, and mechatronics but curiosity and innovation matter most."
                        },
                        {
                            title: "Graphic Design",
                            description: "Create visual assets such as logos, posters, and other graphics that communicate our mission across social media and marketing channels."
                        },
                        {
                            title: "Video Editing",
                            description: "Transform raw footage into engaging video content—reels, documentaries, and more—for platforms like Instagram and YouTube using Premiere Pro, Final Cut Pro, etc."
                        },
                        {
                            title: "Social Media & Marketing",
                            description: "Manage the team’s online presence. Create content, research trends, and engage strategically across platforms like Instagram. Strong writing and storytelling skills help!"
                        }
                    ].map((domain, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                <a
                                    href="https://github.com/ro-jc/AutoZRecruitments_25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 hover:underline"
                                >
                                    {domain.title}
                                </a>
                            </h3>
                            <p className="text-gray-700 mt-2">{domain.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-6 text-center bg-gray-900 text-white">
                <p>© 2025 Auto Z. All rights reserved.</p>
                <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
                <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
            </footer>
        </div>
    );
}
