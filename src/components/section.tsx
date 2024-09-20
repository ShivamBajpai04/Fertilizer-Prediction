import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string; // Make bgColor optional
}

const Section: React.FC<SectionProps> = ({ id, title, children, bgColor }) => {
  return (
    <section
      id={id}
      className={`w-full relative min-h-screen bg-${bgColor || "[var(--bg)]"} text-white`}
    >
      <div className="container mx-auto min-h-screen flex flex-col justify-center align-middle">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          {title}
        </h2>
        <div className="flex flex-col align-middle justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;