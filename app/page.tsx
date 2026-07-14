import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Consultation } from "@/components/Consultation";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { CookieNotice } from "@/components/CookieNotice";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <Consultation />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieNotice />
    </>
  );
}
