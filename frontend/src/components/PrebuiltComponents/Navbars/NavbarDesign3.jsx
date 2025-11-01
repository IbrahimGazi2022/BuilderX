import React from 'react';

const NavbarDesign3 = () => {
    return (
        <nav className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-xl">✨</span>
                        </div>
                        <span className="text-2xl font-bold text-white">Creative</span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-gray-200 transition font-medium">
                            Home
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition font-medium">
                            Portfolio
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition font-medium">
                            About
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition font-medium">
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                        Hire Me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDesign3;