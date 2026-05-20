import Banner from "@/componenets/Banner";
import TrendingPage from "./trending-idea/page";
import ExtraSection from "@/componenets/extra-section";
import ExtraSection2 from "@/componenets/extra-section2";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TrendingPage />
      <ExtraSection />
      <ExtraSection2 />
    </div>
  );
}
