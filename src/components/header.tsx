export default function Header() {
  return (
    <div
      className={`px-4 lg:px-6 h-14 flex align-middle items-center bg-[#17191A] relative z-20}`}
    >
      <a className="flex items-center justify-center" href="#">
        <span className="sr-only">Fertilizer Predictor</span>
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
          className="h-6 w-6 text-green-600"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="M8 12h8" />
          <path d="M12 16V8" />
        </svg>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4 p-1"
          href="#features"
        >
          Features
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 p-1"
          href="#how-it-works"
        >
          How It Works
        </a>
        <a
          className="text-sm font-medium hover:underline bg-green-600 rounded-full underline-offset-4 px-2 py-1"
          href="#predict"
        >
          Predict Now
        </a>
      </nav>
    </div>
  );
}
