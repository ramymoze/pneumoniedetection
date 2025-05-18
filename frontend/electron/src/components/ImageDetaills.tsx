import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

// Types
export type RadioType = "X_RAY" | "MRI" | "CT_SCAN" | "ULTRASOUND" | "OTHER";

export interface Doctor {
  id: string;
  name: string;
}

export interface Patient {
  id: string;
  name: string;
}

export interface Radiologue {
  id: string;
  name: string;
}

export interface RadioImage {
  id: string;
  patient_id: string;
  radiologue_id: string;
  doctor_id: string;
  date: Date;
  radio_image: string | null;
  Title: string;
  Comment?: string;
  type: RadioType;
  doctor: Doctor;
  patient: Patient;
  radiologue: Radiologue;
}

// Helper function to format date
const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function RadioList() {
  const [radioImages, setRadioImages] = useState<RadioImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<RadioImage | null>(null);
  const [loading, setLoading] = useState({
    main: true,
    images: true,
  });
  const [error, setError] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fetchRadioImages = async () => {
    try {
      setLoading({ main: true, images: true });
      setError(null);

      // Fetch base radio data
      const { data: radios, error: radioError } = await supabase
        .from("radio")
        .select("*")
        .order("date", { ascending: false });

      if (radioError) throw radioError;

      if (!radios || radios.length === 0) {
        setRadioImages([]);
        setLoading({ main: false, images: false });
        return;
      }

      // Process each radio entry in parallel
      const imagesWithFullData = await Promise.all(
        radios.map(async (radio) => {
          try {
            const [doctorRes, patientRes, radiologueRes] = await Promise.all([
              supabase.from("doctor").select("id, firstName, lastName").eq("id", radio.doctor_id).single(),
              supabase.from("patient").select("id, firstName, lastName").eq("id", radio.patient_id).single(),
              supabase.from("radiologue").select("id, firstName, lastName").eq("id", radio.radiologue_id).single(),
            ]);

            if (!doctorRes.data || !patientRes.data || !radiologueRes.data) {
              console.warn("Missing related data for radio ID:", radio.id);
              return null;
            }

            return {
              ...radio,
              date: new Date(radio.date),
              doctor: {
                id: doctorRes.data.id,
                name: `${doctorRes.data.firstName} ${doctorRes.data.lastName}`,
              },
              patient: {
                id: patientRes.data.id,
                name: `${patientRes.data.firstName} ${patientRes.data.lastName}`,
              },
              radiologue: {
                id: radiologueRes.data.id,
                name: `${radiologueRes.data.firstName} ${radiologueRes.data.lastName}`,
              },
              // Use the URL directly from the database
              radio_image: radio.radio_image,
            };
          } catch (err) {
            console.warn(`Error processing radio ${radio.id}:`, err);
            return null;
          }
        }),
      );

      const filteredImages = imagesWithFullData.filter(Boolean) as RadioImage[];

      if (filteredImages.length === 0) {
        setError("No complete records found (some data might be missing)");
      }

      setRadioImages(filteredImages);
      setLoading((prev) => ({ ...prev, main: false }));

      // Simulate image load delay
      setTimeout(() => {
        setLoading((prev) => ({ ...prev, images: false }));
      }, 500);
    } catch (err) {
      console.error("Error fetching radio images:", err);
      setError(err instanceof Error ? err.message : "Failed to load data");
      setLoading({ main: false, images: false });
    }
  };

  useEffect(() => {
    fetchRadioImages();
  }, []);

  const handleImageClick = (image: RadioImage) => {
    setSelectedImage(image);
  };

  const handleCloseDetail = () => {
    setSelectedImage(null);
  };

  const handleDownload = async (image: RadioImage) => {
    if (!image.radio_image) return;

    try {
      // Fetch the image from the URL
      const response = await fetch(image.radio_image);
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${image.Title.replace(/\s+/g, '_')}_${image.id}.${blob.type.split('/')[1]}`;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading image:', err);
      alert('Failed to download image');
    }
  };

  const toggleFullScreen = (image: RadioImage) => {
    setIsFullScreen(!isFullScreen);
  };

  const handleRetry = () => {
    fetchRadioImages();
  };

  if (loading.main) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6 max-w-md bg-white rounded-lg shadow-md">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Error Loading Data</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (radioImages.length === 0 && !loading.main) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6 max-w-md">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-800 mt-4">No Radiology Images Found</h3>
          <p className="text-gray-600 mt-2">There are currently no radiology images available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {radioImages.map((image) => (
          <div
            key={image.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="relative h-48">
              {image.radio_image ? (
                <img
                  src={image.radio_image}
                  alt={image.Title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                {image.type.replace("_", " ")}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{image.Title}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{image.patient.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{formatDate(image.date)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Dr. {image.doctor.name.split(" ").pop()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image details */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className={`bg-white rounded-lg shadow-xl w-full ${isFullScreen ? 'h-full max-w-none m-0' : 'max-w-4xl max-h-[90vh]'} overflow-hidden`}>
            <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">{selectedImage.Title}</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleFullScreen(selectedImage)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
                  title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
                >
                  {isFullScreen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5-5m0 0l5-5m-5 5h16m0-5l-5 5m0 0l5 5m-5-5H4" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  )}
                </button>
                <button onClick={handleCloseDetail} className="text-gray-500 hover:text-gray-700 focus:outline-none p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`overflow-y-auto p-6 ${isFullScreen ? 'h-[calc(100vh-5rem)]' : 'max-h-[calc(90vh-4rem)]'}`}>
              <div className={`flex ${isFullScreen ? 'flex-col' : 'flex-col lg:flex-row'} gap-6`}>
                <div className={`${isFullScreen ? 'w-full' : 'lg:w-1/2'}`}>
                  <div className={`bg-gray-100 rounded-lg overflow-hidden ${isFullScreen ? 'h-[calc(100vh-12rem)]' : ''}`}>
                    {selectedImage.radio_image ? (
                      <img
                        src={selectedImage.radio_image}
                        alt={selectedImage.Title}
                        className={`w-full h-full ${isFullScreen ? 'object-contain' : 'object-cover'}`}
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleDownload(selectedImage)}
                      disabled={!selectedImage.radio_image}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center ${
                        selectedImage.radio_image
                          ? "bg-blue-500 hover:bg-blue-600 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download Image
                    </button>
                    <button
                      onClick={() => toggleFullScreen(selectedImage)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isFullScreen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5-5m0 0l5-5m-5 5h16m0-5l-5 5m0 0l5 5m-5-5H4" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        )}
                      </svg>
                      {isFullScreen ? "Exit Full Screen" : "Full Screen"}
                    </button>
                  </div>
                </div>

                {!isFullScreen && (
                  <div className="lg:w-1/2">
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-blue-800 uppercase mb-2">Image Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Type</p>
                            <p className="font-medium text-gray-800">{selectedImage.type.replace("_", " ")}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Date</p>
                            <p className="font-medium text-gray-800">{formatDate(selectedImage.date)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">ID</p>
                            <p className="font-medium text-gray-800">{selectedImage.id}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">Patient Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Name</p>
                            <p className="font-medium text-gray-800">{selectedImage.patient.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">ID</p>
                            <p className="font-medium text-gray-800">{selectedImage.patient_id}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">Medical Staff</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500">Doctor</p>
                            <p className="font-medium text-gray-800">{selectedImage.doctor.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Radiologist</p>
                            <p className="font-medium text-gray-800">{selectedImage.radiologue.name}</p>
                          </div>
                        </div>
                      </div>

                      {selectedImage.Comment && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">Comments</h3>
                          <p className="text-gray-800">{selectedImage.Comment}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RadioList;