import React from "react";

const HeroDesign3 = () => {
    return (
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                🎯 100% Free Forever
              </div>
              
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                The Simplest Way to Build Websites
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                No credit card required. Start building beautiful websites in seconds. Perfect for beginners and professionals.
              </p>
  
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Drag & Drop Builder
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  100+ Pre-built Components
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Mobile Responsive
                </li>
              </ul>
            </div>
  
            {/* Right Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Started Now
              </h3>
              <p className="text-gray-600 mb-6">Create your free account</p>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Create Account
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroDesign3;