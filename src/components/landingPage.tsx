// import Header from "./header";
import FeatureCard from "./featureCard";
import Section from "./section";
import PredictionForm from "./predictionForm";
import Footer from "./footer";
import Hero from "./hero";
import FertilizerCharts from "./fertilizer-charts";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-always snap-center">
          <Hero />
        </div>
        <div className="snap-always snap-center">
          <Section
            id="features"
            title="Key Features"
            bgColor="bg-gradient-to-b from-[var(--wave-color)] to-white"
          >
            <div className="flex gap-10 flex-wrap align-middle justify-around text-wrap max-w-full mx-auto">
              <FeatureCard
                icon={
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                }
                title="AI-Powered Predictions"
                description="Utilize machine learning for accurate fertilizer recommendations."
              />
              <FeatureCard
                icon={
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                }
                title="Crop-Specific Analysis"
                description="Tailored recommendations based on your specific crop and location."
              />
              <FeatureCard
                icon={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />}
                title="Eco-Friendly Suggestions"
                description="Optimize fertilizer use to minimize environmental impact."
              />
            </div>
          </Section>
        </div>
        <div className="snap-always snap-center">
          <Section id="how-it-works" title="How It Works" bgColor="">
            <div className="flex gap-10 flex-wrap align-middle justify-center">
              <FeatureCard
                icon={
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                }
                title="Input Land Data"
                description="Enter your land area, location, and crop type."
              />
              <FeatureCard
                icon={
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                }
                title="AI Analysis"
                description="Our AI model processes your data and analyzes soil conditions."
              />
              <FeatureCard
                icon={
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                }
                title="Get Recommendations"
                description="Receive precise fertilizer amount predictions for optimal yield."
              />
            </div>
          </Section>
        </div>
        <div className="snap-always snap-center">
          <Section
            id="predict"
            title="Predict Your Fertilizer Needs"
            bgColor="bg-white"
          >
            <PredictionForm />
          </Section>
        </div>
        <div className="snap-always snap-center">
          <Section id="Charts" title="Data Visualization" bgColor="bg-white">
            <FertilizerCharts />
            <Footer />
          </Section>
        </div>
      </div>
    </main>
  );
}
