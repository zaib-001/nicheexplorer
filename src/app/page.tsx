// Importing necessary components from the respective paths
import { HomeCategories } from "@/components/homePage/homeCategory/HomeCategories";

import TopNews from "@/components/homePage/topNews/TopNews";
import { HeroSection } from "@/components/homePage/heroSection/HeroSection";
import LatestNews from "@/components/homePage/latestNews/LatestNews";

// Define and export the Home component
export default function Home() {
  return (
    // Main container with full width styling
    <main className="w-full">
      {/* Hero section at the top of the homepage */}
      <HeroSection />
      {/* Latest News section */}
      <LatestNews />
      {/* Top News section */}
      <TopNews />
      {/* Home Categories section */}
      <HomeCategories />
    </main>
  );
}
