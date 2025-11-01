import React from 'react';

const HeroDesign1 = () => {
    return (
        <section className="bg-linear-to-r from-blue-50 to-purple-50 py-20 h-[280px]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Build Your Dream Website Today
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Create stunning, professional websites in minutes with our powerful drag-and-drop builder. No coding required.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Get Started
                            </button>
                            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="bg-linear-to-br from-blue-400 to-purple-500 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
                        <span className="text-white text-6xl">🚀</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroDesign1;