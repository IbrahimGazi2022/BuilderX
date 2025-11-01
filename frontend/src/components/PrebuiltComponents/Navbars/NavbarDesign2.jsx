import React from 'react';

const NavbarDesign2 = () => {
    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-linear-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-lg"></div>
                        <span className="text-2xl font-bold text-white">Brand</span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            Home
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            Features
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            Blog
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                        Sign Up Free
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDesign2;