import { useState, ChangeEvent, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Upload, Loader2, X, Check, ImagePlus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

enum RadioType {
  Bones = "Bones",
  Lung = "Lung",
  Other = "Other",
}

interface ImageUploadCardProps {
  patientId: string | null;
  selectedDoctorId: string | null;
  onUploadSuccess?: () => void;
}

const ImageUploadCard = ({
  patientId,
  selectedDoctorId,
  onUploadSuccess,
}: ImageUploadCardProps) => {
  const [preview, setPreview] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [type, setType] = useState<RadioType>(RadioType.Bones);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [doctorName, setDoctorName] = useState<string>("");

  const userData = localStorage.getItem("user");
  const radiologueId = userData ? JSON.parse(userData).id : null;

  const fetchDoctorName = async (doctorId: string) => {
    try {
      const { data, error } = await supabase
        .from("doctor")
        .select("firstName, lastName")
        .eq("id", doctorId)
        .single();

      if (error) throw error;
      if (data) {
        setDoctorName(`Dr. ${data.firstName} ${data.lastName}`);
      }
    } catch (error) {
      console.error("Error fetching doctor name:", error);
      setDoctorName("");
    }
  };

  useEffect(() => {
    if (selectedDoctorId) {
      fetchDoctorName(selectedDoctorId);
    } else {
      setDoctorName("");
    }
  }, [selectedDoctorId]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadSuccess(false);
    setUploadError("");

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setPreview(reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!preview) return;
    if (!patientId || !selectedDoctorId || !radiologueId) {
      setUploadError("Please ensure patient and doctor are selected");
      return;
    }
    if (!title) {
      setUploadError("Please enter a title for the study");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        console.log("Please sign in to upload images");
        return;
      }

      // Get the file from the preview
      const response = await fetch(preview);
      const blob = await response.blob();

      // Upload to Supabase Storage
      const fileExt = blob.type.split('/')[1];
      const fileName = `${Date.now()}_${title.replace(/\s+/g, '_')}.${fileExt}`;
      const filePath = `radios/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('radios') // Your bucket name
        .upload(filePath, blob);

      if (uploadError) throw uploadError;

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('radios')
        .getPublicUrl(filePath);

      const newId = uuidv4();

      // Insert into database with the URL
      const { error } = await supabase.from("radio").insert({
        id: newId,
        patient_id: patientId,
        radiologue_id: radiologueId,
        doctor_id: selectedDoctorId,
        radio_image: publicUrl, // Store the URL instead of binary data
        Title: title,
        Comment: comment,
        type: type,
      });

      if (error) throw error;

      setUploadSuccess(true);
      if (onUploadSuccess) onUploadSuccess();
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const resetUpload = () => {
    setPreview("");
    setTitle("");
    setComment("");
    setType(RadioType.Bones);
    setUploadSuccess(false);
    setUploadError("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Upload Medical Image
      </h2>

      {/* Upload Area */}
      <div className="mb-6">
        <label
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer transition-all 
            ${
              isUploading
                ? "border-blue-300 bg-blue-50"
                : uploadError
                ? "border-red-300 bg-red-50"
                : uploadSuccess
                ? "border-green-300 bg-green-50"
                : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
            }
            ${!selectedDoctorId ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <input
            type="file"
            accept="image/*,.dicom,.dcm"
            onChange={handleImageChange}
            className="hidden"
            disabled={isUploading || !selectedDoctorId || uploadSuccess}
          />

          {isUploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-3" />
              <p className="text-gray-600">Uploading image...</p>
            </div>
          ) : uploadSuccess ? (
            <div className="flex flex-col items-center">
              <Check className="h-10 w-10 text-green-500 mb-3" />
              <p className="text-green-600 font-medium">Upload successful!</p>
              <button
                type="button"
                onClick={resetUpload}
                className="mt-4 px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Upload Another
              </button>
            </div>
          ) : uploadError ? (
            <div className="flex flex-col items-center">
              <X className="h-10 w-10 text-red-500 mb-3" />
              <p className="text-red-600 font-medium">{uploadError}</p>
              <button
                type="button"
                onClick={resetUpload}
                className="mt-4 px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {preview ? (
                <div className="relative mb-4">
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-h-60 rounded-md object-contain"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetUpload();
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <ImagePlus className="h-10 w-10 text-gray-400 mb-3" />
                  <p className="text-gray-600 text-center">
                    {!selectedDoctorId
                      ? "Please select a doctor first"
                      : "Click to upload or drag & drop"}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Supports: JPG, PNG, DICOM
                  </p>
                </div>
              )}
            </div>
          )}
        </label>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Study Title*
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Chest X-ray, Abdominal CT"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Modality*
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as RadioType)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value={RadioType.Bones}>Bones</option>
              <option value={RadioType.Lung}>Lung</option>
              <option value={RadioType.Other}>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Selected Doctor
            </label>
            <div className="px-4 py-2 bg-gray-100 rounded-md">
              {selectedDoctorId ? (
                <span className="text-gray-800">
                  {doctorName || "Loading..."}
                </span>
              ) : (
                <span className="text-gray-500">None selected</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Additional comments or observations..."
            rows={3}
          />
        </div>

        {preview && !uploadSuccess && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isUploading || !selectedDoctorId || !title}
            className={`w-full mt-4 px-4 py-2 flex items-center justify-center rounded-md text-white 
              ${
                isUploading || !selectedDoctorId || !title
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUploadCard;
