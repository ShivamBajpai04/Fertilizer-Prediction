interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor: string;
}

export default function Section({
  id,
  title,
  children,
  bgColor,
}: SectionProps) {
  return (
    <section id={id} className={`w-full py-12 md:py-24 lg:py-32 ${bgColor}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
