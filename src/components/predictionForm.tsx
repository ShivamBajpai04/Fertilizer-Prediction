import { useState } from "react";

const cropOptions = [
  "Wheat",
  "Rice",
  "Corn",
  "Soybeans",
  "Cotton",
  "Potatoes",
  "Tomatoes",
  "Other",
];
export default function PredictionForm() {
  const [formData, setFormData] = useState({
    landSize: "",
    location: "",
    crop: "",
  });
  const [prediction, setPrediction] = useState<Number | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const simulatedPrediction = Math.random() * 100;
    setPrediction(parseInt(simulatedPrediction.toFixed(2)));
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label
          htmlFor="landSize"
          className="block text-sm font-medium text-gray-700"
        >
          Land Size (in acres)
        </label>
        <input
          type="number"
          id="landSize"
          name="landSize"
          value={formData.landSize}
          onChange={handleInputChange}
          required
          className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
          className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <div>
        <label
          htmlFor="crop"
          className="block text-sm font-medium text-gray-700"
        >
          Crop
        </label>
        <select
          id="crop"
          name="crop"
          value={formData.crop}
          onChange={handleInputChange}
          required
          className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Select a crop</option>
          {cropOptions.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Predict Fertilizer Needs
      </button>
      {prediction && (
        <div className="mt-8 p-4 bg-green-100 rounded-md">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Prediction Result
          </h3>
          <p className="text-green-700">
            {`Estimated fertilizer needed: ${prediction} kg/acre`}
          </p>
        </div>
      )}
    </form>
  );
}
