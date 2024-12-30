"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompressPDF() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState("recommended");

  const compressionOptions = {
    high: {
      label: "High Compression",
      description: "Smaller file size, lower quality",
      reduction: "80%",
      icon: (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      ),
    },
    recommended: {
      label: "Recommended",
      description: "Best balance of size and quality",
      reduction: "50%",
      icon: (
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    low: {
      label: "Low Compression",
      description: "Minimal size reduction, best quality",
      reduction: "25%",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type === "application/pdf") {
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Compress PDF File
          </h1>
          <p className="text-lg text-secondary-600">
            Reduce your PDF file size while maintaining quality. Perfect for
            sharing and uploading.
          </p>
        </div>

        {/* Why Choose Our PDF Compressor Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-secondary-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Smart Compression
              </h3>
              <p className="text-secondary-600">
                Advanced algorithms that reduce file size while preserving
                document quality and readability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                100% Secure
              </h3>
              <p className="text-secondary-600">
                Your files are processed locally and never stored on our
                servers. Your privacy is our priority.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Flexible Options
              </h3>
              <p className="text-secondary-600">
                Choose from multiple compression levels to find the perfect
                balance between file size and quality.
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              How to Use
            </h2>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  1
                </span>
                <p className="text-secondary-600">
                  Choose your preferred compression level based on your needs:
                  high compression for smallest file size, or low compression
                  for best quality.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  2
                </span>
                <p className="text-secondary-600">
                  Upload your PDF file by dragging and dropping it into the
                  upload area or clicking to browse your files.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  3
                </span>
                <p className="text-secondary-600">
                  Click the "Compress PDF" button to start the compression
                  process. The compressed file will be ready to download
                  shortly.
                </p>
              </li>
            </ol>
            <div className="mt-4 p-3 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-700 flex items-center gap-2">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Your files are processed securely and never stored on our
                servers.
              </p>
            </div>
          </div>
        </div>

        {/* Compression Options */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(compressionOptions).map(([key, option]) => (
              <button
                key={key}
                onClick={() => setCompressionLevel(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  compressionLevel === key
                    ? "border-primary-500 bg-primary-50"
                    : "border-secondary-200 hover:border-primary-300"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    {option.icon}
                  </div>
                  <h3 className="font-semibold text-secondary-900">
                    {option.label}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {option.description}
                  </p>
                  <span className="text-sm font-medium text-primary-600">
                    Up to {option.reduction} reduction
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging
                ? "border-primary-500 bg-primary-50"
                : "border-secondary-300 hover:border-primary-400"
            } transition-colors duration-200`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-4">
              <div className="flex justify-center">
                <svg
                  className={`w-16 h-16 ${
                    isDragging ? "text-primary-500" : "text-secondary-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-secondary-900">
                  Drop your PDF file here
                </p>
                <p className="text-sm text-secondary-500">
                  or click to select file
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Selected File */}
        {file && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-secondary-900">
                        {file.name}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={removeFile}
                    className="p-1 text-secondary-400 hover:text-red-500"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Compress Button */}
            <div className="mt-6 flex justify-center">
              <button
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                onClick={() => {
                  // Implement compression functionality
                  console.log(
                    "Compressing file:",
                    file,
                    "Level:",
                    compressionLevel
                  );
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
                Compress PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
