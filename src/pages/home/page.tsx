import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyPDR from './components/WhyPDR';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function HomePage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <Advantages />
      <Services />
      <Gallery />
      <Testimonials />
      <WhyPDR />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}