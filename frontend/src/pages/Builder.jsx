import React, { useState } from 'react';
import BuilderNavbar from '../components/Builder/BuilderNavbar';
import ComponentLibrary from '../components/Builder/ComponentLibrary';
import DesignPanel from '../components/Builder/DesignPanel';
import Canvas from '../components/Builder/Canvas';

const Builder = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlePreview = () => {
        alert('Preview functionality coming soon!');
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="h-screen flex flex-col">
            {/* Top Navbar */}
            <BuilderNavbar onPreview={handlePreview} />

            {/* Main Builder Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Component Library - 10% */}
                <div className="w-[15%]">
                    <ComponentLibrary onSelectCategory={handleSelectCategory} />
                </div>

                {/* Design Panel - 30% */}
                <div className="w-[30%]">
                    <DesignPanel selectedCategory={selectedCategory} />
                </div>

                {/* Canvas - 60% */}
                <div className="w-[55%]">
                    <Canvas />
                </div>
            </div>
        </div>
    );
};

export default Builder;