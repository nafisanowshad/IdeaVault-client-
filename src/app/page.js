import Banner from "@/components/Banner";
import TrendingPage from "./trending-idea/page";
import ExtraSection from "@/components/extra-section";
import ExtraSection2 from "@/components/extra-section2";

export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingPage />
      <ExtraSection />
      <ExtraSection2 />
    </div>
  );
}
