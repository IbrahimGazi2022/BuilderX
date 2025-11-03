import React, { useState } from 'react';

const ComponentLibrary = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { id: 'navbar', name: 'Navbar' },
        { id: 'hero', name: 'Hero Section' },
        { id: 'banner', name: 'Banners' },
        { id: 'cart', name: 'Add to Cart' },
        { id: 'course', name: 'New Course' },
        { id: 'payment', name: 'Payment Page' },
        { id: 'available', name: 'Available Course' },
        { id: 'footer', name: 'Footer' },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.id);
        onSelectCategory(category);
    };

    return (
        <div className="bg-[#F9FAFC] border-r border-gray-200 h-full overflow-y-auto">

            {/* COMPONENTS HEADER */}
            <div className="p-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-bold text-gray-800">Components</h2>
                <p className="text-xs text-(--main-text-color) font-semibold mt-1">Select a component type</p>
            </div>

            {/* COMPONENTS LIST */}
            <div className="p-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        className={`w-full text-left p-4 mb-2 rounded-lg transition-all duration-200 
                            ${selectedCategory === category.id ? 'bg-(--hover-color) text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        <div className="flex items-center space-x-3">
                            <span className="font-semibold">{category.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ComponentLibrary;