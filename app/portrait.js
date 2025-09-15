import Image from "next/image";
import Link from "next/link";

export default function HomePortrait() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-mandatory snap-y md:hidden">

      <section id="home" className="h-screen flex flex-col px-6 snap-center justify-center">
        <h1 className="font-black text-6xl mb-6 text-center">Auto Z</h1>
        <Link
          href="/recruitments"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3 mb-6"
        >
          Recruitments
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
        <div className="flex flex-col items-center gap-6">
          <span className="font-medium text-slate-600 text-justify max-w-md">
            <h2 className="font-bold text-xl pb-4 text-emerald-600">Who are We?</h2>
            An autonomous ground vehicle developed by our OG group. The spark that started our journey.
            Originally a Maruti Ecco now converted to a fully autonomous electric vehicle.
          </span>
          <Image
            src="/pictures/cbe9457a-8cc9-488f-9a27-3dfe6e32c98a.jpg"
            height={300}
            width={250}
            alt="Autonomous vehicle"
            className="rounded-md"
          />
        </div>
      </section>

      <section id="team" className="h-screen flex flex-col px-6 snap-center justify-center items-center space-y-6 text-center">
        <h1 className="font-black text-5xl">The Team</h1>
        <Link
          href="/members"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3"
        >
          View Members
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
        <Image
          src="/pictures/android_medium_page1.jpg"
          height={240}
          width={360}
          alt="Team"
          className="rounded-md"
        />
        <p className="font-medium text-slate-600 max-w-md">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
      </section>

      <section id="sponsors" className="h-screen flex flex-col px-6 snap-center justify-center items-center space-y-6 text-center">
        <h1 className="font-black text-5xl">Sponsors</h1>
        <Link
          href="/sponsors"
          className="text-emerald-600 text-xl font-bold flex justify-center items-center gap-3"
        >
          Our Sponsors
          <Image src="/icons/arrow.svg" width={24} height={12} alt="arrow icon" />
        </Link>
        <Image
          src="/pictures/sponsors.jpg"
          height={160}
          width={420}
          alt="Sponsors"
          className="rounded-md"
        />
        <p className="font-medium text-slate-600 max-w-md">
          Sponsors enable us to continue our experiments knowing we won't be putting ourselves out of business.
        </p>
      </section>

      <section
        id="contact"
        className="h-screen snap-center flex flex-col px-6 py-10 justify-center items-center text-center space-y-4"
      >
        <h1 className="font-black text-4xl mb-6">Contact</h1>

        <a
          href="mailto:teamautoz2020@gmail.com"
          className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-md"
        >
          Email Us
        </a>

        <div className="flex space-x-6 mt-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/team_autoz?igsh=Z24wdDN2b2FmaWdj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 hover:text-emerald-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.25 2.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/teamautoz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-emerald-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48a2.48 2.48 0 004.96 0c0-1.64-1.34-2.98-2.98-2.98zM2 8.82h5.96v12.18H2V8.82zm7.6 0h5.7v1.65h.1c.8-1.5 2.75-3.08 5.65-3.08 6 0 7.1 3.94 7.1 9.06V20H18v-8.7c0-2.1 0-4.8-3-4.8-3 0-3.46 2.34-3.46 4.66V20H9.6V8.82z" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
}
