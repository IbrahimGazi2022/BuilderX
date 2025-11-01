import React from "react";

const NavbarDesign1 = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        YourLogo
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Services
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDesign1;