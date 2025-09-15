export default function HomePortrait() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y block md:hidden">
      
      {/* Section 1: Auto Z */}
      <section id="home" className="h-screen snap-center flex flex-col px-6 py-10">
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="font-black text-5xl mb-4">Auto Z</h1>
          <p className="font-medium text-slate-600 text-justify">
            An autonomous ground vehicle developed by our OG group. The spark that started our journey.
            Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg"
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>
        <a
          href="/recruitments"
          className="mt-6 self-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          Recruitments
        </a>
      </section>

      {/* Section 2: Team */}
      <section id="team" className="h-screen snap-center flex flex-col px-6 py-10">
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="font-black text-5xl mb-4">The Team</h1>
          <p className="font-medium text-slate-600 text-justify">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
            alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/pictures/android_medium_page1.jpg"
            className="w-full h-auto max-w-3xl mx-auto"
          />
        </div>
        <a
          href="/members"
          className="mt-6 self-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          View Members
        </a>
      </section>

      {/* Section 3: Sponsors */}
      <section id="sponsors" className="h-screen snap-center flex flex-col px-6 py-10">
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="font-black text-5xl mb-4">Sponsors</h1>
          <p className="font-medium text-slate-600 text-justify">
            Sponsors enable us to continue our experiments knowing we won’t be putting ourselves out of business.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/pictures/sponsors-tall.jpg"
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>
        <a
          href="/sponsors"
          className="mt-6 self-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          Our Sponsors
        </a>
      </section>

      {/* Section 4: Contact */}
      <section
        id="contact"
        className="h-screen snap-center flex flex-col px-6 py-10 justify-center items-center text-center"
      >
        <h1 className="font-black text-5xl mb-6">Contact</h1>
        <a
          href="mailto:teamautoz2020@gmail.com"
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          Email Us
        </a>
      </section>
    </div>
  );
}
