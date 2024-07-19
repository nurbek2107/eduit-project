"use client"; // Client Component

import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    file: false,
  });
  const [showCard, setShowCard] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Fayl turini tekshirish
      const allowedTypes = ["video/mp4", "video/mkv"];
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrors({
          ...errors,
          file: "Invalid file type. Only MP4 and MKV are allowed.",
        });
        setFile(null);
        return;
      }

      // Fayl hajmini tekshirish (masalan, 100MB)
      if (selectedFile.size > 100 * 1024 * 1024) {
        setErrors({ ...errors, file: "File size exceeds 100MB." });
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setErrors({ ...errors, file: false });
    } else {
      setFile(null);
      setErrors({ ...errors, file: "Please select a valid video file." });
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setErrors({ ...errors, title: false });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setErrors({ ...errors, description: false });
  };

  const handleUpload = async () => {
    // Validate inputs
    const titleError = !title;
    const descriptionError = !description;
    const fileError = !file;

    if (titleError || descriptionError || fileError) {
      setErrors({
        title: titleError,
        description: descriptionError,
        file: fileError,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      setUploading(true);
      setUploadSuccess(false);
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(progress);
          }
        },
      });

      setUploadSuccess(true); // Set success state
      setShowCard(true); // Show card after successful upload
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">File Upload</h2>
      {!showCard && (
        <>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter a descriptive title"
              className={`block w-full px-4 py-2 border rounded-md shadow-sm ${
                errors.title ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.title && (
              <p className="mt-1 text-red-500 text-sm">Title is required.</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Provide a detailed description of the file"
              rows="4"
              className={`block w-full px-4 py-2 border rounded-md shadow-sm ${
                errors.description ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.description && (
              <p className="mt-1 text-red-500 text-sm">
                Description is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              File:
            </label>
            <input
              id="file"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {file && (
              <div className="mt-4 bg-white p-4 border rounded-md shadow-md flex items-start space-x-4">
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="w-1/3 h-auto rounded-md max-h-40"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            )}
            {errors.file && (
              <p className="mt-1 text-red-500 text-sm">{errors.file}</p>
            )}
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading || !title || !description || !file}
            className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
              uploading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } transition duration-300`}
          >
            {uploading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 016.17-7.72 1 1 0 011.15 1.72A6 6 0 008 12a6 6 0 006 6 6 6 0 001.17-.14 1 1 0 011.15 1.72A8 8 0 0112 20a8 8 0 01-8-8z"
                  />
                </svg>
                <span>Uploading {uploadProgress}%</span>
              </div>
            ) : uploadSuccess ? (
              <span>File uploaded successfully!</span>
            ) : (
              "Upload"
            )}
          </button>
        </>
      )}
      {showCard && (
        <div className="mt-8 bg-white p-4 border rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
          {file && (
            <video
              src={URL.createObjectURL(file)}
              controls
              className="w-full h-auto rounded-md max-h-60 mt-4"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
