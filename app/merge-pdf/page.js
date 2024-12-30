"use client";

import { useState } from "react";
import Link from "next/link";

export default function MergePDF() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

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
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const moveFile = (fromIndex, toIndex) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      const [movedFile] = newFiles.splice(fromIndex, 1);
      newFiles.splice(toIndex, 0, movedFile);
      return newFiles;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50/30 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary-500/10 rounded-full blur-2xl" />
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Merge PDF Files
          </h1>
          <p className="text-lg text-secondary-600 relative">
            Combine multiple PDFs into a single file. Drag and drop your files
            below, or click to browse.
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-50 hidden md:block" />
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-50 hidden md:block" />
          </p>
        </div>

        {/* Why Choose Our PDF Merger Section */}
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
                Fast & Efficient
              </h3>
              <p className="text-secondary-600">
                Merge your PDFs instantly with our lightning-fast processing
                engine. No waiting time, no delays.
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Easy to Use
              </h3>
              <p className="text-secondary-600">
                Simple drag-and-drop interface with reordering capabilities. No
                technical skills needed.
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
                  Upload your PDF files by dragging and dropping them into the
                  upload area or clicking to browse your files.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  2
                </span>
                <p className="text-secondary-600">
                  Arrange the files in your desired order using the up and down
                  arrows next to each file.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  3
                </span>
                <p className="text-secondary-600">
                  Remove any unwanted files using the delete button (trash
                  icon).
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-medium">
                  4
                </span>
                <p className="text-secondary-600">
                  Click the "Merge PDFs" button to combine your files in the
                  specified order.
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

        {/* Upload Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging
                ? "border-primary-500 bg-primary-50/50 ring-4 ring-primary-500/20"
                : "border-secondary-300 hover:border-primary-400 hover:bg-primary-50/30"
            } transition-colors duration-200`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="space-y-4 pointer-events-none">
              {/* Upload Icon */}
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
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
                  Drop your PDF files here
                </p>
                <p className="text-sm text-secondary-500">
                  or click to select files
                </p>
              </div>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
            {/* File List */}
            <div className="mb-4">
              <ul className="divide-y divide-secondary-200">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-secondary-50 transition-colors duration-200"
                  >
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
                        <p className="font-medium text-secondary-900 truncate max-w-xs">
                          {file.name}
                        </p>
                        <p className="text-sm text-secondary-500 mt-0.5">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {index > 0 && (
                        <button
                          onClick={() => moveFile(index, index - 1)}
                          className="p-2 text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 rounded-full transition-colors duration-200"
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
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </button>
                      )}
                      {index < files.length - 1 && (
                        <button
                          onClick={() => moveFile(index, index + 1)}
                          className="p-2 text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 rounded-full transition-colors duration-200"
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
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                      <button
                        onClick={() => removeFile(index)}
                        className="p-2 text-secondary-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Merge Button */}
            <div className="p-4 bg-secondary-50 border-t border-secondary-200">
              <button
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-600/30 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => {
                  // Implement merge functionality
                  console.log("Merging files:", files);
                }}
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Merge PDFs
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
