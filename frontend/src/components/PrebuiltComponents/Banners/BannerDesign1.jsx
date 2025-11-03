import React from "react";

const BannerDesign1 = () => {
  return (
    <section className="bg-linear-to-r from-purple-600 to-pink-600 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Content */}
          <div className="mb-4 md:mb-0">
            <div className="inline-block bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
              🔥 LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl font-bold mb-1">
              Get 50% Off Today!
            </h2>
            <p className="text-white/90 text-sm">
              Special discount for new customers. Don't miss out!
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex items-center space-x-4">
            <div className="text-right mr-4">
              <p className="text-2xl font-bold">$49</p>
              <p className="text-sm line-through text-white/70">$99</p>
            </div>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDesign1;