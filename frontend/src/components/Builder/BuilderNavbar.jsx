import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuilderNavbar = ({ onPreview }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">BuilderX</span>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onPreview}
                        className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md"
                    >
                        👁️ Preview
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-md"
                    >
                        🚪 Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default BuilderNavbar;