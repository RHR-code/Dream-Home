import Banner from "@/components/Banner";
import HomeCard from "@/components/HomeCard";
import LatestHomes from "@/components/LatestHomes";

export default function Home() {
  return (
    <div className="max-w-350 mx-auto">
      <Banner />
      <LatestHomes />
    </div>
  );
}
