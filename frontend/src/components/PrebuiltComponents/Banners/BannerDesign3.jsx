import React from "react";

const BannerDesign3 = () => {
    return (
        <section className="bg-blue-50 py-8 border-y-2 border-blue-200">
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* Top Badge */}
                <div className="inline-flex items-center bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                    <span className="animate-pulse mr-2">●</span>
                    FLASH SALE - TODAY ONLY
                </div>

                {/* Main Content */}
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                    🎁 Special Holiday Offer
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                    Get <span className="text-red-600 font-bold text-2xl">30% OFF</span> on your first purchase
                </p>

                {/* Features */}
                <div className="flex justify-center items-center space-x-6 text-sm text-gray-700 mb-4">
                    <span>✓ Free Shipping</span>
                    <span>✓ 30-Day Returns</span>
                    <span>✓ 24/7 Support</span>
                </div>

                {/* CTA */}
                <button className="bg-red-600 text-white px-10 py-3 rounded-full font-bold hover:bg-red-700 transition shadow-xl">
                    Grab the Deal
                </button>

                {/* Countdown */}
                <p className="text-xs text-gray-500 mt-3">
                    ⏰ Offer expires at midnight
                </p>
            </div>
        </section>
    );
};

export default BannerDesign3;