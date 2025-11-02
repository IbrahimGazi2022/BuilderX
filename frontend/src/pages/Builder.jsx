import React, { useState } from 'react';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { BuilderNavbar, Canvas, ComponentLibrary, DesignPanel, PreviewModal } from '../components';

const Builder = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [canvasComponents, setCanvasComponents] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handlePreview = () => {
        setIsPreviewOpen(true);
    };

    const handleClosePreview = () => {
        setIsPreviewOpen(false);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleDragStart = (event) => {
        if (event.active.data.current) {
            setActiveItem(event.active.data.current);
        }
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === 'canvas-droppable' && active.data.current) {
            const draggedItem = active.data.current;

            const newComponent = {
                id: `${draggedItem.id}-${Date.now()}`,
                type: draggedItem.type,
                name: draggedItem.name,
                component: draggedItem.component
            };

            setCanvasComponents((prev) => [...prev, newComponent]);
        }

        setActiveItem(null);
    };

    const handleDeleteComponent = (componentId) => {
        setCanvasComponents((prev) =>
            prev.filter((comp) => comp.id !== componentId)
        );
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="h-screen flex flex-col">
                <BuilderNavbar onPreview={handlePreview} />
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-[15%]">
                        <ComponentLibrary onSelectCategory={handleSelectCategory} />
                    </div>
                    <div className="w-[30%]">
                        <DesignPanel selectedCategory={selectedCategory} />
                    </div>
                    <div className="w-[55%]">
                        <Canvas
                            components={canvasComponents}
                            onDeleteComponent={handleDeleteComponent}
                        />
                    </div>
                </div>
            </div>

            <DragOverlay>
                {activeItem ? (
                    <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500">
                        <p className="font-semibold text-sm">{activeItem.name}</p>
                    </div>
                ) : null}
            </DragOverlay>

            <PreviewModal
                isOpen={isPreviewOpen}
                onClose={handleClosePreview}
                components={canvasComponents}
            />
        </DndContext>
    );
};

export default Builder;
