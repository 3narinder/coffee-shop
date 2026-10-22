import { aboutPageContent } from "@/constants/data/about";
import StatCard from "./StatCard";

const Stats = () => {
  return (
    <div
      id="stats"
      className="relative mx-auto grid h-min w-full max-w-268 grid-cols-[repeat(2,minmax(50px,1fr))] auto-rows-[minmax(0px,1fr)] items-center justify-center gap-5 pt-10 desktop:grid-cols-[repeat(4,minmax(50px,1fr))]"
    >
      {aboutPageContent.stats.map((item) => (
        <StatCard key={item.content} stat={item.stat} content={item.content} />
      ))}
    </div>
  );
};

export default Stats;
