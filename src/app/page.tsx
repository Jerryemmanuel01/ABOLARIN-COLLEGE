import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
