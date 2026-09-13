import React from 'react';

const MobileAppSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-background-light to-background-lighter rounded-lg shadow-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Experience On-the-Go
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            Access all features, anytime, anywhere. Download our mobile app today and take your experience to the next level.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300 ease-in-out"
            >
              <span className="mr-2"></span> App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300 ease-in-out"
            >
              <span className="mr-2">▶</span> Google Play
            </a>
          </div>
        </div>

        {/* Image Placeholder (replace with actual app screenshot) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-gray-200 h-72 w-56 rounded-xl shadow-2xl overflow-hidden flex items-center justify-center p-4">
            <p className="text-gray-500 text-sm italic">App Screenshot Here</p>
            {/* Example: <img src="/images/mobile-app-screenshot.png" alt="Mobile App" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;