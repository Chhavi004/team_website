import Image from 'next/image';
import Link from 'next/link';

export default function Overlay() {
    return (
        <div className='fixed h-screen w-screen z-10 pointer-events-none'>
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

    );
}
