interface FeatureCardProps {
  icon: React.ReactNode; // icon can be any valid React node like an SVG or an image
  title: string; // title is a string
  description: string; // description is a string
}

export default function FeatureCard({ icon, title, description }:FeatureCardProps) {
  return (
    <div className="flex flex-col text-wrap items-center text-center w-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 mb-4 text-green-600"
      >
        {icon}
      </svg>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 text-wrap">{description}</p>
    </div>
  );
}
