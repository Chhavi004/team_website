// import styled from 'styled-components';
// import './App.css';

// const Container = styled.div`
//   position:absolute;
//   top:0;
//   right:0;
//   bottom:0;
//   left:0;
//   width:100%;
//   height: 100%;
//   overflow:hidden;
// `;

// const Image = styled.img`
//   object-fit:cover;
//   z-index:1;
//   width:100%;
//   height: 100%;
// `;


export default function HomePortrait() {
    return (
        <div className='w-screen h-screen overflow-y-scroll snap-mandatory snap-y   md:hidden '>
            <section className="h-screen snap-center grayscale">

                <img src='/pictures/bot.jpg' className="h-1/2 w-screen object-cover" />

            <h1 className='font-black text-5xl row-start-2 p-5 pt-8'>Auto Z</h1>
                <div className="font-medium text-slate-600 text-justify p-5 pt-0">
                    An autonomous ground vehicle developed by our OG group. the spark that started our journey.
                    Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
                    Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
                </div>
            </section>
            <section className="h-screen snap-center grayscale">

                <h1 className='font-black text-5xl row-start-2 p-5 pt-32'>The Team</h1>
                <img src='/pictures/team.jpg' className=" w-screen object-cover" />

                <div className="font-medium text-slate-600 text-justify p-5 ">
                    There are many variations of passages of Lorem Ipsum available, but the  majority have suffered alteration in some form, by injected humour, or  randomised words which don't look even slightly believable. If you are  going to use a passage of Lorem Ipsum, you need to be sure there isn't  anything embarrassing hidden in the middle of text. All the Lorem Ipsum  generators on the Internet tend to repeat predefined chunks as  necessary, making this the first true generator on the Internet.

                </div>
            </section>
            <section className="h-screen snap-center">

                <h1 className='font-black text-5xl row-start-2 p-8 pt-32'>Sponsors</h1>
                <img src='/pictures/sponsors-tall.jpg' className=" w-screen object-cover px-5 pb-8 pr-10" />

                <div className="font-medium text-slate-600 text-justify p-8 w-5/6 ">
                    Sponsors enable us to continue our experiments knowing we wont be putting ourselves out of business.
                </div>
            </section>

            <section className="h-screen snap-center">

                <h1 className='font-black text-5xl row-start-2 p-8 pt-32'>Contact</h1>

            </section>

        </div >


    );
}