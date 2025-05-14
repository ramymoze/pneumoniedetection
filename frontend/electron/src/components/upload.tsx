import  { useState, ChangeEvent } from "react";
import { supabase } from "../supabaseClient";

const ImageUploadCard = () => {
  const [preview, setPreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Supabase
    await uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadError("");
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload the file
      const { error: uploadError } = await supabase
        .storage
        .from("radios")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: { publicUrl } } = supabase
        .storage
        .from("radios")
        .getPublicUrl(filePath);

      console.log('File uploaded successfully. URL:', publicUrl);
      // You can set the URL to state or pass it to a parent component here
      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError(error instanceof Error ? error.message : 'Upload failed');
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="border-2 border-dashed border-gray-300 rounded-md p-4 w-64 h-64 cursor-pointer flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          disabled={isUploading}
        />
        {preview ? (
          <img
            src={preview}
            alt="Upload Preview"
            className="w-full h-full object-contain mb-2"
          />
        ) : (
          <>
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-500 text-sm">
              {isUploading ? "Uploading..." : "Click to upload image"}
            </span>
          </>
        )}
      </label>

      {uploadError && (
        <p className="text-red-500 text-sm mt-2">{uploadError}</p>
      )}

      <h2 className="text-gray-600 text-lg font-medium mt-4">Radio Title</h2>
    </div>
  );
};

export default ImageUploadCard;