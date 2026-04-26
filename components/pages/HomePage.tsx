import CTABanner from "../features/home/Ctabanner";
import FeaturedDoctors from "../features/home/Featureddoctors";
import HomeHero from "../features/home/HomeHero";
import HowItWorks from "../features/home/HowItWorks";
import Specializations from "../features/home/Specializations";
import Stats from "../features/home/Stats";

function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <Stats />
      <HowItWorks />
      <Specializations />
      <FeaturedDoctors />
      <CTABanner />
    </main>
  );
}

export default HomePage;
