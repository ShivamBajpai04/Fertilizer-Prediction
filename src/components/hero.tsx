import Header from "./header";
export default function Hero() {
  return (
    <section className="flex flex-col align-middle justify-center w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <div className="absolute inset-0 z-0">
        <Header />
        <img
          src="https://i.postimg.cc/xdzHNfFx/p4.webp"
          alt="Agricultural field"
          className="object-cover w-full h-full rounded-tr-3xl filter brightness-[.50]"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      </div>
      <div className="container m-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              AI-Powered Fertilizer Prediction
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Optimize your crop yield with our advanced fertilizer prediction
              tool. Enter your land details and get precise fertilizer
              recommendations using cutting-edge AI technology.
            </p>
          </div>
          <div className="space-x-4">
            <a
              href="#predict"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-black hover:bg-zinc-200 h-10 py-2 px-4"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 text-white border-white hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* <div className="custom-shape-divider-bottom-1726044014">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
