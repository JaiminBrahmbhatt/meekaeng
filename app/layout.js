import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Topbar from "@/components/Topbar";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "MeekaEng",
  description: " Meeka Engineering Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Topbar/>
        <Navbar />
        <main className="overflow-hidden text-xl relative">{children}</main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
