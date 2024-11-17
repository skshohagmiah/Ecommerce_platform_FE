import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialsSection from "@/components/landing/TestinomialsSection";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}
