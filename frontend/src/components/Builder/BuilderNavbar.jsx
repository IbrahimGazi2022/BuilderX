import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuilderNavbar = ({ onPreview, onSave, hasUnsavedChanges }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (hasUnsavedChanges) {
            const confirmLogout = window.confirm(
                '⚠️ You have unsaved changes! Are you sure you want to logout?'
            );
            if (!confirmLogout) return;
        }
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">BuilderX</span>

                    {hasUnsavedChanges && (
                        <div className="flex items-center space-x-2 bg-yellow-500 bg-opacity-20 px-3 py-1 rounded-full border border-yellow-300">
                            <span className="animate-pulse text-yellow-300 text-lg">⚠️</span>
                            <span className="text-sm font-medium text-yellow-100">
                                Unsaved Changes
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={onSave}
                        disabled={!hasUnsavedChanges}
                        className={`
              px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md
              ${hasUnsavedChanges
                                ? 'bg-green-500 hover:bg-green-600 text-white cursor-pointer'
                                : 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-50'
                            }
            `}
                    >
                        💾 Save
                    </button>

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
