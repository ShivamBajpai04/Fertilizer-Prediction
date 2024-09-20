import React, { useState } from "react";
import axios from "axios";

const CROP_OPTIONS = [
  "Wheat",
  "Rice",
  "Corn",
  "Soybeans",
  "Cotton",
  "Potatoes",
  "Tomatoes",
  "Other",
] as const;

type CropType = (typeof CROP_OPTIONS)[number];

interface FormData {
  landSize: string;
  location: string;
  crop: CropType | "";
}

interface PredictionResponse {
  Fertilizername: string;
}

const PredictionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    landSize: "",
    location: "",
    crop: "",
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "landSize") {
      const numValue = parseFloat(value);
      if (numValue < 0) {
        setFormData((prev) => ({ ...prev, [name]: "0" }));
        setError("Negative values are not allowed!");
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<PredictionResponse>(
        "https://fertilizertypebysm.onrender.com/fertilizername",
        {
          temperature: 0,
          humidity: 0,
          moisture: 0,
          soilType: 0,
          cropType: 0,
          nitrogen: 0,
          potassium: 0,
          phosphorous: 0,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setPrediction(response.data.Fertilizername);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError("Failed to get prediction. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-80 mx-auto space-y-6 text-black">
      <InputField
        label="Land Size (in acres)"
        name="landSize"
        type="number"
        value={formData.landSize}
        onChange={handleInputChange}
        error={error}
      />
      <InputField
        label="Location"
        name="location"
        type="text"
        value={formData.location}
        onChange={handleInputChange}
      />
      <SelectField
        label="Crop"
        name="crop"
        value={formData.crop}
        onChange={handleInputChange}
        options={CROP_OPTIONS}
      />
      <SubmitButton />
      {prediction && <PredictionResult prediction={prediction} />}
    </form>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-white">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className={`p-3 block w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-white">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
    >
      <option value="">Select a crop</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const SubmitButton: React.FC = () => (
  <button
    type="submit"
    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  >
    Predict Fertilizer Needs
  </button>
);

interface PredictionResultProps {
  prediction: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ prediction }) => (
  <div className="mt-8 p-4 bg-green-100 rounded-md">
    <h3 className="text-lg font-semibold text-green-800 mb-2">
      Prediction Result
    </h3>
    <p className="text-green-700">
      {`Estimated fertilizer needed: ${prediction} kg/acre`}
    </p>
  </div>
);

export default PredictionForm;
