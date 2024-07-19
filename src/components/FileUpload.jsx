"use client"; // Client Component
import { Input, Textarea, Button } from "@material-tailwind/react";
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
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setTitle("");
    setDescription("");
    setErrors({ title: false, description: false, file: false });
  };

  return (
    <div className=" ">
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg  mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">File Upload</h2>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title:
          </label>
          <Input
            label="Title"
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter a descriptive title"
            className={`block w-full px-4 py-2 border rounded-md shadow-sm ${
              errors.title ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-gray-50`}
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
          <Textarea
            label="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
            className={`block w-full px-4 py-2 border rounded-md shadow-sm ${
              errors.description ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-white`}
          />
          {errors.description && (
            <p className="mt-1 text-red-500 text-sm">
              Description is required.
            </p>
          )}
        </div>
        <div className="mb-6 border p-4 rounded-lg shadow-lg bg-gray-50">
          <div className="relative">
            <input
              id="file"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <button className="block w-full  text-sm   py-2 px-4 border border-gray-300 rounded-md bg-blue-50  hover:bg-blue-100 h-60 ">
              <svg
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="active-svg m-auto"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke="currentColor" // Use currentColor to adapt to text color changes
                  d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V11H17C18.933 11 20.5 12.567 20.5 14.5C20.5 16.433 18.933 18 17 18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H17C20.0376 20 22.5 17.5376 22.5 14.5C22.5 11.7793 20.5245 9.51997 17.9296 9.07824C17.4862 6.20213 15.0003 4 12 4C8.99974 4 6.51381 6.20213 6.07036 9.07824C3.47551 9.51997 1.5 11.7793 1.5 14.5C1.5 17.5376 3.96243 20 7 20H8C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18H7C5.067 18 3.5 16.433 3.5 14.5C3.5 12.567 5.067 11 7 11H8V10ZM15.7071 13.2929L12.7071 10.2929C12.3166 9.90237 11.6834 9.90237 11.2929 10.2929L8.29289 13.2929C7.90237 13.6834 7.90237 14.3166 8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071L11 13.4142V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13.4142L14.2929 14.7071C14.6834 15.0976 15.3166 15.0976 15.7071 14.7071C16.0976 14.3166 16.0976 13.6834 15.7071 13.2929Z"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
          {file && (
            <div className="mt-4 bg-white p-4 border rounded-md shadow-md flex items-start space-x-4">
              <video
                src={URL.createObjectURL(file)}
                controls
                className="w-1/3 h-auto rounded-md max-h-40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
              <button
                onClick={handleDelete}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
          {errors.file && (
            <p className="mt-1 text-red-500 text-sm">{errors.file}</p>
          )}
        </div>

        <Button
          onClick={handleUpload}
          disabled={uploading}
          className={`w-full px-4 py-4  text-white font-semibold rounded-md  ${
            uploading ? "bg-[#ff9500]" : "bg-[#ff9500] hover:bg-[#ff9500]"
          } transition duration-300`}
        >
          {uploading ? (
            <div className="flex justify-center">
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
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
