import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Contact from "@/Components/Contact";
import Layout from "@/Layouts/Layout";
import Showcase from "@/Components/Showcase";

export default function Welcome() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Showcase />
      <Contact />
    </Layout>
  );
}