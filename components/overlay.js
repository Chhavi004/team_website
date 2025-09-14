import Image from 'next/image';
import Link from 'next/link';

export default function Overlay() {
    return (
        <>

            <div className='fixed h-screen w-screen z-10 pointer-events-none hidden md:inline-block'>
                <nav className='flex p-6  space-x-16 px-16 absolute top-0 w-full pointer-events-auto bg-white'>


                    <Link href='/#home' className='font-semibold ' ><Image src='/icons/logo.svg' width={64} height={64} /></Link>

                    <div className='flex-1 font-bold' />


                    <Link href='/#home' className='font-semibold' >Home</Link>
                    <Link href='/projects' className='font-semibold'>Projects</Link>
                    <Link href='/gallery' className='font-semibold'>Gallery</Link>
                    <Link href='/#contact' className='font-semibold'>Contact</Link>

                </nav>
                <div className=' bottom-0 absolute flex items-center mx-12 mb-16  bg-white rounded-full'>

                    <a className='pointer-events-auto hover:bg-slate-200 p-4 rounded-full transition duration-300'
                        target="_blank"
                        href="https://www.linkedin.com/company/teamautoz/"
                    >
                        <Image src='/icons/linkedin.svg' width={32} height={32} />
                    </a>
                    <a className='pointer-events-auto hover:bg-slate-200 p-4 rounded-full transition duration-300'
                        target="_blank"
                        href="https://www.instagram.com/team_autoz"
                    >
                        <Image src='/icons/instagram.svg' width={32} height={32} />
                    </a>

                </div>
            </div>

            <div className='fixed h-screen w-screen z-10 pointer-events-none md:hidden'>
                <nav className='flex p-6 absolute top-0 w-full pointer-events-auto'>


                    <Link href='/#home' className='font-semibold bg-white h-14 w-14  rounded-xl items-center grid p-2' ><Image src='/icons/logo.svg' width={64} height={64} /></Link>

                    <div className='flex-1' />

                    <Link href='/#home' className='font-semibold bg-white h-14 w-14 rounded-xl items-center grid p-4' ><Image src='/icons/menu.svg' width={64} height={64} /></Link>


                </nav>
                {/* <div className=' bottom-16 right-2 absolute flex flex-col items-center m-6  bg-white rounded-full'>

                    <a className='pointer-events-auto hover:bg-slate-200 p-4 rounded-full transition duration-300'
                        target="_blank"
                        href="https://www.linkedin.com/company/teamautoz/"
                    >
                        <Image src='/icons/linkedin.svg' width={24} height={24} />
                    </a>
                    <a className='pointer-events-auto hover:bg-slate-200 p-4 rounded-full transition duration-300'
                        target="_blank"
                        href="https://www.instagram.com/team_autoz"
                    >
                        <Image src='/icons/instagram.svg' width={24} height={24} />
                    </a>

                </div> */}
            </div>
        </>
    );
}
