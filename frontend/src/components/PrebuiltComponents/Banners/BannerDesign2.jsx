import React from "react";

const BannerDesign2 = () => {
    return (
      <section className="bg-gray-900 py-8 border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-center text-white">
            {/* Left - Offer Badge */}
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                50%
              </div>
              <div>
                <p className="text-yellow-400 text-xs font-semibold">MEGA SALE</p>
                <p className="text-2xl font-bold">Black Friday</p>
              </div>
            </div>
  
            {/* Middle - Description */}
            <div className="text-center">
              <p className="text-gray-300 mb-2">
                🎉 Biggest sale of the year! Save up to 50% on all premium plans
              </p>
              <p className="text-sm text-yellow-400 font-semibold">
                ⏰ Ends in 24 hours
              </p>
            </div>
  
            {/* Right - CTA */}
            <div className="flex justify-end">
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BannerDesign2;