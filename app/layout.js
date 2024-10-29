import Overlay from "@/components/overlay";
import "./globals.css";

export const metadata = {
  title: "Auto Z",
  description: "Team portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <Overlay />
        {children}
      </body>
    </html>
  );
}
