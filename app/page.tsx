import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#030712]">
        <Hero />
        <About />
        <Business />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}
