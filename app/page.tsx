import Header from "@/components/header/Header";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialsSection from "@/components/landing/TestinomialsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
