import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Builder = () => {
    const navigate = useNavigate();
    const [components, setComponents] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSave = () => {
        alert("Save functionality - later implement করবো");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="h-screen flex flex-col bg-gray-50">
            {/* Top Navbar */}
            <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">BuilderX</h1>
                    <span className="text-sm text-gray-600">
                        Welcome, <span className="font-medium">{user?.name}</span>
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowPreview(true)}
                        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
                    >
                        Live Preview
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content - 2 Columns (Component Library + Canvas) */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - Component Library */}
                <aside className="w-72 bg-white border-r border-gray-200 overflow-y-auto">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Components Library
                        </h2>
                        <div className="space-y-2">
                            {["Navbar", "Hero", "Banner", "Course", "Filter", "Cart", "Payment", "Order History"].map(
                                (comp) => (
                                    <div
                                        key={comp}
                                        className="p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg cursor-pointer transition"
                                    >
                                        <p className="text-sm font-medium text-gray-700">{comp}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </aside>

                {/* Main Canvas - Full Width */}
                <main className="flex-1 bg-gray-100 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Canvas (Drop Zone)
                                </h3>
                                <span className="text-sm text-gray-500">
                                    {components.length} component(s) added
                                </span>
                            </div>

                            {components.length === 0 ? (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-20 text-center">
                                    <div className="text-gray-400 text-6xl mb-4">📦</div>
                                    <p className="text-gray-600 text-lg font-medium mb-2">
                                        Your canvas is empty
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        Click components from the left sidebar to add them here
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {components.map((comp, index) => (
                                        <div
                                            key={index}
                                            className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-between hover:shadow-md transition"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span className="text-blue-600 font-bold text-lg">
                                                    {index + 1}
                                                </span>
                                                <span className="font-semibold text-gray-800 text-lg">
                                                    {comp}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="px-3 py-1 bg-white hover:bg-gray-100 text-gray-700 rounded border border-gray-300 text-sm transition">
                                                    ↑
                                                </button>
                                                <button className="px-3 py-1 bg-white hover:bg-gray-100 text-gray-700 rounded border border-gray-300 text-sm transition">
                                                    ↓
                                                </button>
                                                <button className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded text-sm font-medium transition">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {/* Live Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Live Preview
                            </h2>
                            <button
                                onClick={() => setShowPreview(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body - Scrollable Preview */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                            {components.length === 0 ? (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <div className="text-gray-400 text-8xl mb-4">👀</div>
                                        <p className="text-xl text-gray-500 mb-2">
                                            No components added yet
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Add components from the left sidebar to see preview
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="max-w-5xl mx-auto space-y-6">
                                    {components.map((comp, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
                                        >
                                            <div className="text-sm text-gray-500 mb-2">
                                                Component {index + 1}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800">
                                                {comp} Component
                                            </h3>
                                            <p className="text-gray-600 mt-2">
                                                This is a placeholder for the {comp} component.
                                                Actual component will render here.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                            <button
                                onClick={() => setShowPreview(false)}
                                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                            >
                                Save & Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Builder;