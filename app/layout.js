import Overlay from "@/components/overlay";
import "./globals.css";

export const metadata = {
  title: "Auto Z",
  description: "Team portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar always fixed at the top */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
          <Overlay />
        </div>

        {/* Add padding to prevent overlap */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
