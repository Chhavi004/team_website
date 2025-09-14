'use client'

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function Projects() {

    const elRef = useRef();

    const onRight = () => {

        var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        console.log(rem)
        elRef.current?.scrollTo({
            left: elRef.current?.scrollLeft + 21 * rem,
            behavior: "smooth"
        });
    }

    const onLeft = () => {

        var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        console.log(rem)
        elRef.current?.scrollTo({
            left: elRef.current?.scrollLeft - 21 * rem,
            behavior: "smooth"
        });
    }

    return (
        <div className='w-screen flex h-screen '>
            <div className="flex flex-col pl-16 pr-24">
                <div className='h-1/6' />
                <div className='grid grid-rows-3 items-end flex-grow'>
                    <h1 className='font-black text-7xl row-start-2'>Projects</h1>

                </div>
                <div className='h-1/6' />
            </div>
            <div ref={elRef} className="flex-grow grid grid-flow-col overflow-y-auto items-center ">
                <div className="w-16" />
                <div className="w-72 m-6">
                    <img src='/pictures/qubi.jpg' width={400} height={500} />
                    <h2 className="font-display font-bold text-xl my-4">Qubi</h2>
                    <div className="font-medium text-slate-600 text-justify mb-6 line-clamp-3">Our latest autonomous ground vehicle. its smaller and more stable than our previous foray into UGVs</div>
                    <Link href='' className="font-bold underline text-justify">More Details ...</Link>
                </div>

                <div className="w-72 m-6 ">
                    <img src='/pictures/drone.jpg' width={400} height={500} />
                    <h2 className="font-display font-bold text-xl my-4">UAV</h2>
                    <div className="font-medium text-slate-600 text-justify mb-6 line-clamp-3">We go flying. land vehicles get boring over time. we are experimenting with a hexacopter :)</div>
                    <Link href='' className="font-bold underline text-justify">More Details ...</Link>
                </div>

                <div className="w-72 m-6 ">
                    <img src='/pictures/pratham.jpg' width={400} height={500} />
                    <h2 className="font-display font-bold text-xl my-4">Pratham ( archived )</h2>
                    <div className="font-medium text-slate-600 text-justify mb-6 line-clamp-3">An autonomous ground vehicle developed by our OG group. the spark that started our journey.</div>
                    <Link href='' className="font-bold underline text-justify">More Details ...</Link>
                </div>

                <div className="w-72 m-6">
                    <img src='/pictures/l3.jpg' width={400} height={500} />
                    <h2 className="font-display font-bold text-xl my-4">L3 ( archived )</h2>
                    <div className="font-medium text-slate-600 text-justify mb-6 line-clamp-3">Originally a Maruti Ecco with a custom EV conversion. Now a minivan with a stack ready for level 3 autonomy.  </div>
                    <Link href='' className="font-bold underline text-justify">More Details ...</Link>
                </div>



                <div className="w-16" />
                <button onClick={onLeft} className=" fixed w-10 h-12 p-2 bg-black rounded-full grid items-center justify-center rotate-180 -translate-x-5">
                    <img src='/icons/chevron-right.svg' width={32} height={16} />
                </button>
                <button onClick={onRight} className="right-2 fixed w-10 h-12 p-2 bg-black rounded-full grid items-center justify-center">
                    <img src='/icons/chevron-right.svg' width={32} height={16} />
                </button>


            </div>
        </div >
    );
}
