import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { getComponentByType } from '../../utils/componentMap';

const DraggableDesignCard = ({ design, categoryId }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: design.id,
        data: {
            id: design.id,
            type: design.type,
            name: design.name,
        },
    });

    const DesignComponent = getComponentByType(design.type);

    if (!DesignComponent) {
        return (
            <div className="border-2 border-red-300 rounded-lg p-4 bg-red-50">
                <p className="text-red-600 text-sm">
                    Component not found: {design.type}
                </p>
            </div>
        );
    }

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`border-2 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-grab active:cursor-grabbing 
                ${isDragging ? 'opacity-50 border-blue-500' : 'border-gray-300'}`}
        >
            <div className="bg-gray-50 scale-50 origin-top-left transform w-[200%] pointer-events-none">
                <DesignComponent />
            </div>
        </div>
    );
};

const DesignPanel = ({ selectedCategory }) => {
    const designs = {
        navbar: [
            { id: 'navbar-1', name: 'Simple & Clean', type: 'NavbarDesign1' },
            { id: 'navbar-2', name: 'Dark Modern', type: 'NavbarDesign2' },
            { id: 'navbar-3', name: 'Colorful Gradient', type: 'NavbarDesign3' },
        ],
        hero: [
            { id: 'hero-1', name: 'Side by Side', type: 'HeroDesign1' },
            { id: 'hero-2', name: 'Centered Hero', type: 'HeroDesign2' },
        ],
        banner: [
            { id: 'banner-1', name: 'Gradient Promo', type: 'BannerDesign1' },
            { id: 'banner-2', name: 'Dark Modern', type: 'BannerDesign2' },
            { id: 'banner-3', name: 'Clean Centered', type: 'BannerDesign3' },
        ],
        cart: [
            { id: 'cart-1', name: 'Gradient Promo', type: 'CartDesign1' },
            { id: 'cart-2', name: 'Dark Modern', type: 'CartDesign2' },
            { id: 'cart-3', name: 'Clean Centered', type: 'CartDesign3' },
        ],
        courses: [
            { id: 'courses-1', name: 'Gradient Promo', type: 'NewCourseDesign1' },
            { id: 'courses-2', name: 'Dark Modern', type: 'NewCourseDesign2' },
            { id: 'courses-3', name: 'Clean Centered', type: 'NewCourseDesign3' },
        ],
        available: [
            { id: 'available-1', name: 'Gradient Promo', type: 'AvailableCourseDesign1' },
            { id: 'available-2', name: 'Dark Modern', type: 'AvailableCourseDesign2' },
        ],
        footer: [
            { id: 'footer-1', name: 'Minimal Footer', type: 'FooterDesign1' },
            { id: 'footer-2', name: 'Detailed Footer', type: 'FooterDesign2' },
            { id: 'footer-3', name: 'Newsletter Footer', type: 'FooterDesign3' },
        ],
    };

    const currentDesigns = selectedCategory
        ? designs[selectedCategory.id] || []
        : [];

    return (
        <div className="bg-[#F9FAFC] border-r border-gray-200 h-full overflow-y-auto">
            <div className="p-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-bold text-(--main-text-color)">
                    {selectedCategory
                        ? `${selectedCategory.name} Designs`
                        : 'Design Panel'}
                </h2>
                <p className="text-xs text-(--main-text-color) font-semibold mt-1">
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
                                <p className="text-sm">
                                    Designs coming soon for this category
                                </p>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="flex items-center justify-center h-64 text-gray-400">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <p className="text-sm text-(--main-text-color)">Select a component to see designs</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesignPanel;
