import CoreValues from "@/components/CoreValues";
import Customer from "@/components/Customer";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="overflow-clip relative">
      <Hero />
      <AboutUs />
      <Customer />
      <CoreValues />
      <Services />
      <Projects />
      <Footer />
      {/* <div className="absolute -bottom-32 -right-24 z-20 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-12 z-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div>
      <div className="absolute -bottom-32 -left-16 z-20 hidden lg:block">
        <svg width="240" height="240" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#224194" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-16 z-20 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 16 16" className="mr-0">
          <path d="M8 1 Q7 0 6 1 L1 6 Q0 7 1 8 L6 13 Q7 14 8 13 L13 8 Q14 7 13 6 L8 1 Z" fill="#88c64b" />
        </svg>
      </div> */}
    </div>
  );
}
