import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Showcase from "@/Components/Showcase";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Features />
      <Showcase />
      <Contact />
    </main>
  );
}