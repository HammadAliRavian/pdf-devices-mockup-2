import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-800 to-secondary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-800/40 via-transparent to-transparent" />

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-float-slow">
              <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />
            </div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-float-medium">
              <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center relative">
            {/* Decorative Elements */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-primary-300">
                Transform Your PDFs
              </span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary-200 inline-block">
                Fast, Secure, and Free
                <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-50" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100/90 max-w-2xl mx-auto leading-relaxed relative">
              The most powerful set of PDF tools that lets you merge, compress,
              and convert PDFs with just a few clicks. No installation or
              registration required.
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-50 hidden md:block" />
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-50 hidden md:block" />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/merge-pdf"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-500 shadow-lg shadow-primary-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m-8-8h16"
                  />
                </svg>
                Merge PDFs Now
              </Link>
              <Link
                href="/all-tools"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                View All Tools
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-100/80">
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">100% Free</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Secure</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.92 3.845a1 1 0 00-1.414-1.414l-9.9 9.9a1 1 0 001.414 1.414l9.9-9.9zM2.3 14.3a1 1 0 001.4 1.4l9.9-9.9a1 1 0 00-1.4-1.4l-9.9 9.9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">No Installation</span>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Private</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Popular PDF Tools
            </h2>
            <p className="mt-4 text-xl text-secondary-600">
              Everything you need to work with PDFs in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-100"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-primary-50 p-3">
                    {tool.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm text-secondary-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-secondary-100 pt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary-600">
                    {tool.action}
                  </span>
                  <svg
                    className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/all-tools"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              View All Tools
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.05),transparent)]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-primary-100/20 to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Everything You Need for PDF Management
            </h2>
            <p className="text-lg text-secondary-600">
              Powerful features designed to make PDF handling effortless and
              efficient
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1: Merge PDFs */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-secondary-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7 text-primary-600"
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

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Merge PDFs
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Combine multiple PDF files into a single document with just a
                  few clicks. Maintain original quality and formatting.
                </p>

                <Link
                  href="/merge-pdf"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Try Now
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Feature 2: Compress PDF */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-secondary-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Compress PDF
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Reduce PDF file size while maintaining quality. Perfect for
                  sharing via email or uploading to websites.
                </p>

                <Link
                  href="/compress-pdf"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Try Now
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Feature 3: Convert PDF */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-secondary-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-7 h-7 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  Convert PDF
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6">
                  Convert PDFs to and from multiple formats including Word,
                  Excel, PowerPoint, and images.
                </p>

                <Link
                  href="/all-tools"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  View All Tools
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Tools Button */}
          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/all-tools"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Explore All Tools
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-primary-600 uppercase">
              Pricing Plans
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900 sm:text-5xl">
              Choose the perfect plan for your needs
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Start with our free plan or upgrade for advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-lg md:max-w-none mx-auto">
            {/* Free Plan */}
            <div className="relative rounded-2xl bg-white border border-secondary-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Free
                </h3>
                <p className="text-secondary-600 mb-6">
                  Perfect for getting started
                </p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-secondary-900">
                    $0
                  </span>
                  <span className="text-secondary-600 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Basic PDF tools",
                    "Up to 10MB file size",
                    "2 PDFs per task",
                    "Standard quality",
                    "Basic support",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-secondary-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className="block w-full text-center px-6 py-3 text-base font-medium rounded-lg text-primary-600 border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-300"
                >
                  Get Started Free
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl bg-white border-2 border-primary-600 shadow-xl lg:scale-105 lg:-translate-y-2">
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="px-4 py-1 text-sm font-semibold tracking-wider text-white bg-primary-600 rounded-full uppercase">
                  Most Popular
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Pro
                </h3>
                <p className="text-secondary-600 mb-6">
                  Perfect for professionals
                </p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-secondary-900">
                    $15
                  </span>
                  <span className="text-secondary-600 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "All Free features",
                    "Up to 100MB file size",
                    "Unlimited PDFs per task",
                    "Premium quality",
                    "Priority support",
                    "Advanced tools",
                    "No watermarks",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-secondary-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup-pro"
                  className="block w-full text-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative rounded-2xl bg-white border border-secondary-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Enterprise
                </h3>
                <p className="text-secondary-600 mb-6">Perfect for teams</p>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-secondary-900">
                    $49
                  </span>
                  <span className="text-secondary-600 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "All Pro features",
                    "Unlimited file size",
                    "Team management",
                    "API access",
                    "Custom integration",
                    "24/7 support",
                    "Advanced security",
                    "Custom branding",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-secondary-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-sales"
                  className="block w-full text-center px-6 py-3 text-base font-medium rounded-lg text-secondary-900 bg-secondary-100 hover:bg-secondary-200 transition-colors duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-16 text-center">
            <p className="text-secondary-600 mb-4">
              Have questions? Check out our FAQ section
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View FAQ
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-secondary-600">
              Discover how PDFDevices has transformed the way our users handle
              PDFs
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
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
                      d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    Hammad Ali
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Designer
                  </p>
                </div>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                "PDFDevices has streamlined our document workflow completely.
                The merge and compress tools save us hours of work every week.
                It's incredibly reliable and user-friendly."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
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
                      d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    Dalma Bonaiti
                  </h3>
                  <p className="text-sm text-secondary-600">CEO</p>
                </div>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                "The security features are top-notch, and the ability to convert
                PDFs to various formats has been invaluable for our team. Highly
                recommend for any business."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
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
                      d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-900">
                    Salman Ali
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Freelance Designer
                  </p>
                </div>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                "I've tried many PDF tools, but PDFDevices stands out for its
                simplicity and effectiveness. The free tier offers more than
                enough for my needs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/50 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your PDF workflow?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-10">
              Join thousands of satisfied users and start using our powerful PDF
              tools today. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-primary-900 bg-white hover:bg-primary-50 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started Free
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Sales
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">100%</span>
                  <span className="text-sm text-primary-200">Free Tools</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">10M+</span>
                  <span className="text-sm text-primary-200">Users</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">50M+</span>
                  <span className="text-sm text-primary-200">
                    PDFs Processed
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">4.9/5</span>
                  <span className="text-sm text-primary-200">User Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      </section>
    </>
  );
}

const features = [
  {
    title: "High Performance",
    description:
      "Experience blazing-fast PDF processing with our optimized cloud infrastructure. Handle large files with ease.",
    icon: (
      <svg
        className="w-7 h-7 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Security First",
    description:
      "Your documents are protected with enterprise-grade encryption. Files are automatically deleted after processing.",
    icon: (
      <svg
        className="w-7 h-7 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Easy Integration",
    description:
      "Integrate our tools into your workflow with our simple API. Compatible with all major platforms and devices.",
    icon: (
      <svg
        className="w-7 h-7 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

const popularTools = [
  {
    title: "Merge PDF",
    description:
      "Combine multiple PDFs into a single file. Drag and drop to reorder pages easily.",
    action: "Combine Files Now",
    href: "/merge-pdf",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-blue-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-blue-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-primary-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-primary-600"
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
    title: "Compress PDF",
    description:
      "Reduce file size while maintaining quality. Perfect for sharing and uploading.",
    action: "Compress PDF Now",
    href: "/compress-pdf",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-green-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-green-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-green-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-green-600"
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
    title: "Convert PDF",
    description:
      "Convert PDFs to Word, Excel, PowerPoint and other formats with ease.",
    action: "Convert Now",
    href: "/convert-pdf",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-purple-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-purple-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-purple-600"
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
    title: "PDF to Word",
    description:
      "Convert your PDFs to editable Word documents with high accuracy.",
    action: "Convert to Word",
    href: "/pdf-to-word",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-blue-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-blue-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-blue-600"
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
    title: "Split PDF",
    description:
      "Extract pages or split your PDF into multiple files with ease.",
    action: "Split PDF Now",
    href: "/split-pdf",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-orange-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-orange-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-orange-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-orange-600"
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
    title: "PDF to JPG",
    description:
      "Convert PDF pages into high-quality JPG images individually or all at once.",
    action: "Convert to Images",
    href: "/pdf-to-jpg",
    icon: (
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-pink-100 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-pink-200 rounded-lg -rotate-3" />
        <div className="absolute inset-0 bg-pink-100 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-pink-600"
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
];

const testimonials = [
  {
    content:
      "PDFDevices has streamlined our document workflow completely. The merge and compress tools save us hours of work every week. It's incredibly reliable and user-friendly.",
    author: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    content:
      "The security features are top-notch, and the ability to convert PDFs to various formats has been invaluable for our team. Highly recommend for any business.",
    author: "Michael Chen",
    role: "IT Manager",
  },
  {
    content:
      "I've tried many PDF tools, but PDFDevices stands out for its simplicity and effectiveness. The free tier offers more than enough for my needs.",
    author: "Emma Rodriguez",
    role: "Freelance Designer",
  },
];

const trustLogos = [
  {
    name: "10M+ Users",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    name: "99.9% Uptime",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "24/7 Support",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    name: "4.9/5 Rating",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];
