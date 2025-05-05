import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <FeaturesGrid />
        <CaseStudies />
        <HowItWorks />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
