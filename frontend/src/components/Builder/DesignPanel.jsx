import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import NavbarDesign1 from '../PrebuiltComponents/Navbars/NavbarDesign1';
import NavbarDesign2 from '../PrebuiltComponents/Navbars/NavbarDesign2';
import NavbarDesign3 from '../PrebuiltComponents/Navbars/NavbarDesign3';
import HeroDesign1 from '../PrebuiltComponents/Heroes/HeroDesign1';
import HeroDesign2 from '../PrebuiltComponents/Heroes/HeroDesign2';
import BannerDesign1 from '../PrebuiltComponents/Banners/BannerDesign1';
import BannerDesign2 from '../PrebuiltComponents/Banners/BannerDesign2';
import BannerDesign3 from '../PrebuiltComponents/Banners/BannerDesign3';

const DraggableDesignCard = ({ design, categoryId }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: design.id,
        data: {
            id: design.id,
            type: categoryId,
            name: design.name,
            component: design.component
        }
    });

    const DesignComponent = design.component;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`border-2 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-50 border-blue-500' : 'border-gray-300'
                }`}
        >
            {/* Design Preview */}
            <div className="bg-gray-50 scale-50 origin-top-left transform w-[200%] pointer-events-none">
                <DesignComponent />
            </div>
        </div>
    );
};

const DesignPanel = ({ selectedCategory }) => {
    const designs = {
        navbar: [
            { id: 'navbar-1', name: 'Simple & Clean', component: NavbarDesign1 },
            { id: 'navbar-2', name: 'Dark Modern', component: NavbarDesign2 },
            { id: 'navbar-3', name: 'Colorful Gradient', component: NavbarDesign3 },
        ],
        hero: [
            { id: 'hero-1', name: 'Side by Side', component: HeroDesign1 },
            { id: 'hero-2', name: 'Centered Hero', component: HeroDesign2 },
        ],
        banner: [
            { id: 'banner-1', name: 'Gradient Promo', component: BannerDesign1 },
            { id: 'banner-2', name: 'Dark Modern', component: BannerDesign2 },
            { id: 'banner-3', name: 'Clean Centered', component: BannerDesign3 },
        ],
    };

    const currentDesigns = selectedCategory ? designs[selectedCategory.id] || [] : [];

    return (
        <div className="bg-white border-r border-gray-200 h-full overflow-y-auto">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-bold text-gray-800">
                    {selectedCategory ? `${selectedCategory.name} Designs` : 'Design Panel'}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                    {selectedCategory
                        ? 'Choose a design to add to canvas'
                        : 'Select a component from the library'}
                </p>
            </div>

            <div className="p-4">
                {selectedCategory ? (
                    currentDesigns.length > 0 ? (
                        <div className="space-y-4">
                            {currentDesigns.map((design) => (
                                <DraggableDesignCard
                                    key={design.id}
                                    design={design}
                                    categoryId={selectedCategory.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-64 text-gray-400">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚧</div>
                                <p className="text-sm">Designs coming soon for this category</p>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="flex items-center justify-center h-64 text-gray-400">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <p className="text-sm">Select a component to see designs</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesignPanel;