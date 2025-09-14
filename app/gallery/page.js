
import Image from "next/image";


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
            <div className="flex-grow  flex float-right flex-wrap overflow-y-scroll items-start gap-2">

                <img src='/pictures/qubi.jpg' className="w-2/7" width={400} height={500} />
                <img src='/pictures/l3.jpg' className="w-2/7" width={400} height={500} />
                <img src='/pictures/drone.jpg' className="w-2/7" width={400} height={500} />
                <img src='/pictures/pratham.jpg' width={400} height={500} />

                <img src='/pictures/team.jpg' width={880} height={500} />
                <img src='/pictures/bot.jpg' className="w-1/3" width={400} height={500} />
                <img src='/pictures/android_medium_page1.jpg' height={400} width={500} />




            </div>
        </div >
    );
}
