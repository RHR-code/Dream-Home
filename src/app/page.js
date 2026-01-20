import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import HomeCard from "@/components/HomeCard";
import LatestHomes from "@/components/LatestHomes";
import MeetOurAgents from "@/components/MeetOurAgents";
import Newsletter from "@/components/NewsLetter";
import PartnersSection from "@/components/PartnersSection";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="max-w-350 mx-auto">
      <Banner />
      <LatestHomes />
      <MeetOurAgents />
      <FAQ />
      <PartnersSection />
      <Newsletter />
      <Statistics />
    </div>
  );
}
