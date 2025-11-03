import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuilderNavbar = ({ onPreview, onSave, hasUnsavedChanges }) => {
    const navigate = useNavigate();

    // -- LOGOUT FUNCTION --
    const handleLogout = () => {
        if (hasUnsavedChanges) {
            const confirmLogout = window.confirm(
                'You have unsaved changes! Are you sure you want to logout?'
            );
            if (!confirmLogout) return;
        }
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="bg-(--bg-color) text-white shadow-lg">
            <div className="px-6 py-4 flex items-center justify-between">

                {/* -- LOGO -- */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#354E33] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">B</span>
                    </div>
                    <span className="text-3xl font-bold text-(--main-text-color) tracking-wider">BuilderX</span>
                </div>

                {/* -- RIGHT SIDE BUTTONS -- */}
                <div className="flex items-center space-x-4">
                    {/* -- SAVE BUTTON -- */}
                    <button
                        onClick={onSave}
                        disabled={!hasUnsavedChanges}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md
                        ${hasUnsavedChanges ? 'bg-(--main-text-color) hover:bg-(--hover-color) text-white cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-50'}`}>
                        Save
                    </button>

                    {/* -- PREVIEW BUTTON -- */}
                    <button
                        onClick={onPreview}
                        className="bg-(--hover-color) text-white px-6 py-2 rounded-lg font-semibold hover:bg-(--main-text-color) transition-all duration-200 shadow-md">
                        Preview
                    </button>

                    {/* -- LOGOUT BUTTON -- */}
                    <button
                        onClick={handleLogout}
                        className="bg-(--main-text-color) px-6 py-2 rounded-lg font-semibold hover:bg-(--hover-color) transition-all duration-200 shadow-md">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default BuilderNavbar;
