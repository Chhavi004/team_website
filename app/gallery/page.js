
import Image from "next/image";
import Link from "next/link";


export default function Projects() {

    return (
        <div className='w-screen flex h-screen '>
            <div className="flex flex-col pl-16 pr-24">
                <div className='h-1/6' />
                <div className='grid grid-rows-3 items-end flex-grow'>
                    <h1 className='font-black text-7xl row-start-2'>Gallery</h1>

                </div>
                <div className='h-1/6' />
            </div>
            <div className="flex-grow  flex float-right flex-wrap overflow-z-auto items-center grayscale gap-4 ">

                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />
                <Image src='/pictures/qubi.jpg' width={400} height={500} />





            </div>
        </div >
    );
}
