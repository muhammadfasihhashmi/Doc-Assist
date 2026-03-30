import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/features/home/HomeHero";
import Stats from "@/components/features/home/Stats";
import HowItWorks from "@/components/features/home/HowItWorks";
import Specializations from "@/components/features/home/Specializations";
import FeaturedDoctors from "@/components/features/home/Featureddoctors";
import CTABanner from "@/components/features/home/Ctabanner";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeHero />
      <Stats />
      <HowItWorks />
      <Specializations />
      <FeaturedDoctors />
      <CTABanner />
      <Footer />
    </main>
  );
}
