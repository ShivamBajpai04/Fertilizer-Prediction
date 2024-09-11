export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 h-20 w-full shrink-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Fertilizer Predictor. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
