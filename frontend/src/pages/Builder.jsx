import React, { useState, useEffect } from 'react';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { BuilderNavbar, Canvas, ComponentLibrary, DesignPanel, PreviewModal } from '../components';

// ========================================
// Project service import - save/load করার জন্য
// ========================================
import { saveProject, getMyProject } from '../services/projectService';

// ========================================
// Design components import - load করার সময় component resolve করার জন্য
// ========================================
import NavbarDesign1 from '../components/PrebuiltComponents/Navbars/NavbarDesign1';
import NavbarDesign2 from '../components/PrebuiltComponents/Navbars/NavbarDesign2';
import NavbarDesign3 from '../components/PrebuiltComponents/Navbars/NavbarDesign3';
import HeroDesign1 from '../components/PrebuiltComponents/Heroes/HeroDesign1';
import HeroDesign2 from '../components/PrebuiltComponents/Heroes/HeroDesign2';
import BannerDesign1 from '../components/PrebuiltComponents/Banners/BannerDesign1';
import BannerDesign2 from '../components/PrebuiltComponents/Banners/BannerDesign2';
import BannerDesign3 from '../components/PrebuiltComponents/Banners/BannerDesign3';

// ========================================
// Design ID → Component mapping
// Load করার সময় designId থেকে actual component বের করার জন্য
// ========================================
const designComponents = {
    'navbar-1': NavbarDesign1,
    'navbar-2': NavbarDesign2,
    'navbar-3': NavbarDesign3,
    'hero-1': HeroDesign1,
    'hero-2': HeroDesign2,
    'banner-1': BannerDesign1,
    'banner-2': BannerDesign2,
    'banner-3': BannerDesign3,
};

const Builder = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [canvasComponents, setCanvasComponents] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // ========================================
    // Component mount হলে database থেকে project load করি
    // ========================================
    useEffect(() => {
        loadProjectFromDB();
    }, []);

    // ========================================
    // Canvas components change হলে unsaved changes track করি
    // ========================================
    useEffect(() => {
        // Loading complete হওয়ার পরেই track করব
        if (!isLoading && canvasComponents.length >= 0) {
            setHasUnsavedChanges(true);
        }
    }, [canvasComponents, isLoading]);

    // ========================================
    // Database থেকে project load করার function
    // ========================================
    const loadProjectFromDB = async () => {
        try {
            setIsLoading(true);
            console.log('📥 Loading project from database...');

            const response = await getMyProject();

            if (response.success && response.data.components) {
                // ========================================
                // Backend থেকে components array পেয়েছি
                // এখন প্রতিটা component এর জন্য designId use করে actual React component add করি
                // ========================================
                const loadedComponents = response.data.components.map(comp => ({
                    id: comp.id,
                    type: comp.type,
                    name: comp.name,
                    designId: comp.designId,
                    component: designComponents[comp.designId]  // ✅ Component resolve করলাম
                }));

                setCanvasComponents(loadedComponents);
                setHasUnsavedChanges(false);
                console.log('✅ Project loaded successfully:', loadedComponents.length, 'components');
            } else {
                console.log('ℹ️ No saved project found. Starting fresh.');
            }

        } catch (error) {
            console.error('❌ Failed to load project:', error);
            // Error হলেও page কাজ করবে, শুধু empty canvas থাকবে
        } finally {
            setIsLoading(false);
        }
    };

    // ========================================
    // Database এ project save করার function
    // ========================================
    const handleSave = async () => {
        try {
            setIsSaving(true);
            console.log('💾 Saving project to database...');

            // ========================================
            // canvasComponents থেকে শুধু necessary data নিয়ে backend এ পাঠাই
            // React component object পাঠাব না (JSON serializable না)
            // ========================================
            const componentsToSave = canvasComponents.map(comp => ({
                id: comp.id,
                type: comp.type,
                name: comp.name,
                designId: comp.designId  // ✅ এটা দিয়ে পরে component resolve করব
            }));

            console.log('Sending to backend:', componentsToSave);

            const response = await saveProject(componentsToSave);

            if (response.success) {
                setHasUnsavedChanges(false);
                alert('✅ Platform saved successfully!');
                console.log('✅ Project saved successfully');
            }

        } catch (error) {
            console.error('❌ Failed to save project:', error);
            alert('❌ Failed to save platform. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handlePreview = () => setIsPreviewOpen(true);
    const handleClosePreview = () => setIsPreviewOpen(false);
    const handleSelectCategory = (category) => setSelectedCategory(category);

    const handleDragStart = (event) => {
        if (event.active.data.current) setActiveItem(event.active.data.current);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && over.id === 'canvas-droppable' && active.data.current) {
            const draggedItem = active.data.current;

            // ========================================
            // নতুন component add করার সময় designId ও component save করি
            // ========================================
            const newComponent = {
                id: `${draggedItem.id}-${Date.now()}`,
                type: draggedItem.type,
                name: draggedItem.name,
                designId: draggedItem.id,           // ✅ Design ID
                component: draggedItem.component    // ✅ React component
            };

            setCanvasComponents((prev) => [...prev, newComponent]);
        }
        setActiveItem(null);
    };

    const handleDeleteComponent = (componentId) => {
        setCanvasComponents((prev) => prev.filter((comp) => comp.id !== componentId));
    };

    // ========================================
    // Loading state - project load হওয়া পর্যন্ত দেখাব
    // ========================================
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50">
                <div className="text-center">
                    <div className="animate-spin text-6xl mb-4">⏳</div>
                    <p className="text-xl font-semibold text-gray-700">Loading your project...</p>
                    <p className="text-sm text-gray-500 mt-2">Please wait a moment</p>
                </div>
            </div>
        );
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="h-screen flex flex-col">
                <BuilderNavbar
                    onPreview={handlePreview}
                    onSave={handleSave}
                    hasUnsavedChanges={hasUnsavedChanges}
                    isSaving={isSaving}
                />

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
                {activeItem && (
                    <div className="bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500">
                        <p className="font-semibold text-sm">{activeItem.name}</p>
                    </div>
                )}
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