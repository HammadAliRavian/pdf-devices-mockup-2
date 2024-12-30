import Link from "next/link";

export default function AllTools() {
  const toolCategories = [
    {
      title: "Merge & Edit",
      description: "Combine and modify your PDF files",
      tools: [
        {
          title: "Merge PDF",
          description: "Combine multiple PDFs into a single file",
          href: "/merge-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-blue-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-primary-100 rounded-xl flex items-center justify-center">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Rotate PDF",
          description: "Rotate pages in your PDF document",
          href: "/rotate-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-indigo-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-indigo-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-indigo-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Remove Pages",
          description: "Delete unwanted pages from your PDF",
          href: "/remove-pages",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-red-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-red-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-red-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
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
              </div>
            </div>
          ),
        },
        {
          title: "Organize PDF",
          description: "Rearrange pages in your PDF document",
          href: "/organize-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-amber-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-amber-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Optimize & Extract",
      description: "Optimize and extract content from PDFs",
      tools: [
        {
          title: "Compress PDF",
          description: "Reduce PDF file size while maintaining quality",
          href: "/compress-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-green-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-green-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-green-100 rounded-xl flex items-center justify-center">
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
              </div>
            </div>
          ),
        },
        {
          title: "Grayscale PDF",
          description: "Convert PDF to black and white",
          href: "/grayscale-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gray-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-gray-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Extract PDF Pages",
          description: "Extract specific pages from PDF",
          href: "/extract-pages",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-purple-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-purple-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Repair PDF",
          description: "Fix corrupted PDF files",
          href: "/repair-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-orange-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-orange-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Convert to PDF",
      description: "Convert images to PDF format",
      tools: [
        {
          title: "JPG to PDF",
          description: "Convert JPG images to PDF",
          href: "/jpg-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-pink-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-pink-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-pink-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "PNG to PDF",
          description: "Convert PNG images to PDF",
          href: "/png-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-sky-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-sky-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-sky-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "BMP to PDF",
          description: "Convert BMP images to PDF",
          href: "/bmp-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-violet-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-violet-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-violet-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "TIFF to PDF",
          description: "Convert TIFF images to PDF",
          href: "/tiff-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-fuchsia-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-fuchsia-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-fuchsia-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-fuchsia-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Word to PDF",
          description: "Convert Word documents to PDF format",
          href: "/word-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-blue-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-blue-100 rounded-xl flex items-center justify-center">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "PowerPoint to PDF",
          description: "Convert PowerPoint presentations to PDF",
          href: "/powerpoint-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-orange-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-orange-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "TXT to PDF",
          description: "Convert text files to PDF format",
          href: "/txt-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-slate-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-slate-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-slate-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "Excel to PDF",
          description: "Convert Excel spreadsheets to PDF",
          href: "/excel-to-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-green-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-green-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-green-100 rounded-xl flex items-center justify-center">
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
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Convert From PDF",
      description: "Convert PDF to image formats",
      tools: [
        {
          title: "PDF to JPG",
          description: "Convert PDF pages to JPG images",
          href: "/pdf-to-jpg",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-rose-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-rose-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-rose-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-rose-600"
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
              </div>
            </div>
          ),
        },
        {
          title: "PDF to PNG",
          description: "Convert PDF pages to PNG images",
          href: "/pdf-to-png",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-cyan-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-cyan-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-cyan-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-cyan-600"
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
              </div>
            </div>
          ),
        },
        {
          title: "PDF to BMP",
          description: "Convert PDF pages to BMP images",
          href: "/pdf-to-bmp",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-teal-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-teal-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-teal-600"
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
              </div>
            </div>
          ),
        },
        {
          title: "PDF to TIFF",
          description: "Convert PDF pages to TIFF images",
          href: "/pdf-to-tiff",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-emerald-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-emerald-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald-600"
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
              </div>
            </div>
          ),
        },
        {
          title: "PDF to Word",
          description: "Convert PDF to editable Word document",
          href: "/pdf-to-word",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-blue-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-blue-100 rounded-xl flex items-center justify-center">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "PDF to PowerPoint",
          description: "Convert PDF to PowerPoint presentation",
          href: "/pdf-to-powerpoint",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-orange-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-orange-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "PDF to TXT",
          description: "Extract text from PDF to TXT file",
          href: "/pdf-to-txt",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-slate-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-slate-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-slate-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          title: "PDF to ZIP",
          description: "Convert PDF pages to compressed ZIP",
          href: "/pdf-to-zip",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-purple-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-purple-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "PDF Security",
      description: "Protect and unlock PDF files",
      tools: [
        {
          title: "Protect PDF",
          description: "Add password protection to your PDFs",
          href: "/protect-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-yellow-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-yellow-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
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
            </div>
          ),
        },
        {
          title: "Unlock PDF",
          description: "Remove password protection from PDFs",
          href: "/unlock-pdf",
          icon: (
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-lime-100 rounded-xl rotate-6" />
              <div className="absolute inset-0 bg-lime-200 rounded-xl -rotate-3" />
              <div className="absolute inset-0 bg-lime-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            All PDF Tools
          </h1>
          <p className="text-lg text-secondary-600">
            Everything you need to work with PDFs in one place. Choose from our
            collection of powerful tools.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="space-y-16">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-secondary-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Link
                    key={toolIndex}
                    href={tool.href}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-secondary-100 hover:border-primary-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">{tool.icon}</div>
                      <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
