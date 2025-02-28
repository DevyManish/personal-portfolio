// faltu k components ko yaha se call karna hai
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Marquee from "@/components/Marquee";
import MobHeader from "@/components/MobHeader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-black overflow-hidden">
      {/*invisble pattern */}
      <div className="absolute inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737315_1px,transparent_1px),linear-gradient(to_bottom,#73737315_1px,transparent_1px)] 
        bg-[size:20px_20px] 
        [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
      </div>
      <div className="relative z-10 h-full">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="block md:hidden">
          <MobHeader />
        </div>
        <div className="container mx-auto px-4 md:py-12">
          <div className="flex flex-col min-h-[calc(100vh-80px)] items-center justify-center">
            <HomeSection />
            <Marquee />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>

    </main>
  );
}
