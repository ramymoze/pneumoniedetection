import React, { useState, ChangeEvent } from "react";

const ImageUploadCard: React.FC = () => {
  const [preview, setPreview] = useState<string>("../public/img/upload.png"); // Default image path

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="border-2 border-dashed border-gray-300 rounded-md p-4 w-64 h-64 cursor-pointer flex flex-col items-center justify-center text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <img
          src={preview}
          alt="Upload Preview"
          className="w-50 h-50 object-contain mb-2"
        />
        <span className="text-gray-500 text-sm">Upload here</span>
      </label>

      <h2 className="text-gray-600 text-lg font-medium mt-4">Radio Title</h2>
    </div>
  );
};

export default ImageUploadCard;
