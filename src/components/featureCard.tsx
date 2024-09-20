import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode; // icon can be any valid React node like an SVG or an image
  title: string; // title is a string
  description: string; // description is a string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-80">
      <div className="h-10 w-10 mb-4 text-green-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
