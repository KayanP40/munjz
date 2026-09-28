import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
    </main>
  );
}
