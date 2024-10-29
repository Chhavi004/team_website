import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className='w-screen h-screen overflow-y-scroll snap-mandatory snap-y'>

            <section id='home' className='h-screen flex px-16 snap-center'>
                <div className="h-screen flex flex-col flex-grow">
                    <div className='h-1/6' />
                    <div className='grid grid-rows-3 items-end flex-grow'>
                        <h1 className='font-black text-7xl row-start-2'>Auto Z</h1>
                        <Link className="pb-4 row-start-3 text-emerald-600 text-xl font-bold flex gap-3" href="/recruitments"> Recruitments <Image src='/icons/arrow.svg' width={32} height={16} /></Link>
                    </div>
                    <div className='h-1/6' />
                </div>
                <div className="h-screen w-3/5 ">
                    <div className='h-1/6' />
                    <div className="grid grid-cols-2   gap-4 grayscale">
                        <span className="font-medium text-slate-600 text-justify px-8">
                            <h2 className='font-bold text-xl pb-6 text-black'>Who are We?</h2>
                            An autonomous ground vehicle developed by our OG group. the spark that started our journey.
                            Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
                            Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
                        </span>
                        <Image src='/pictures/bot.jpg' height={500} width={400} />
                    </div>
                </div>
            </section>

            <section id='team' className='h-screen flex px-16 snap-center'>
                <div className="h-screen flex flex-col flex-grow">
                    <div className='h-1/6' />
                    <div className='grid grid-rows-3 items-end flex-grow'>
                        <h1 className='font-black text-7xl row-start-2'>The Team</h1>
                        <Link className="pb-4 row-start-3 text-emerald-600 text-xl font-bold flex gap-3" href="/recruitments">View Members<Image src='/icons/arrow.svg' width={32} height={16} /></Link>
                    </div>
                    <div className='h-1/6' />
                </div>
                <div className="h-screen w-3/5 flex flex-col pt-20 gap-4 grayscale">
                    <Image src='/pictures/team.jpg' height={720} width={1080} />
                    <span className="font-medium text-slate-600 text-justify">
                        There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are  going to use a passage of Lorem Ipsum, you need to be sure there isn't  anything embarrassing hidden in the middle of text. All the Lorem Ipsum  generators on the Internet tend to repeat predefined chunks as  necessary, making this the first true generator on the Internet.
                    </span>
                </div>
            </section>

            <section id='sponsors' className='h-screen flex px-16 snap-center'>
                <div className="h-screen flex flex-col flex-grow">
                    <div className='h-1/6' />
                    <div className='grid grid-rows-3 items-end flex-grow'>
                        <h1 className='font-black text-7xl row-start-2'>Sponsors</h1>

                    </div>
                    <div className='h-1/6' />
                </div>
                <div className="h-screen w-3/5 flex flex-col">
                    <div className='h-1/6' />
                    <span className="font-medium text-slate-600 text-justify w-1/4">
                        Sponsors enable us to continue our experiments knowing we wont be putting ourselves out of business.
                    </span>
                    <Image src='/pictures/sponsors.jpg' height={384} width={998} />
                </div>
            </section>

            <section id='contact' className='h-screen flex px-16 snap-center'>
                <div className="h-screen flex flex-col flex-grow">
                    <div className='h-1/6' />
                    <div className='grid grid-rows-3 items-end flex-grow'>
                        <h1 className='font-black text-7xl row-start-2'>Contact</h1>

                    </div>
                    <div className='h-1/6' />
                </div>
                <div className="h-screen w-3/5 flex flex-col">
                    <div className='h-1/6' />

                    <div className='h-1/6' />
                </div>
            </section>

        </div >


    );
}