import React from "react";

interface StatsCardProps {
  stat: string;
  content: string;
}

const StatCard = ({ stat, content }: StatsCardProps) => {
  return (
    <div className="flex flex-col items-center gap-1 bg-cream-deep px-5 py-8 text-center rounded-3xl">
      <span className="stat-value">{stat}</span>

      <p className="body-small">{content}</p>
    </div>
  );
};

export default StatCard;
