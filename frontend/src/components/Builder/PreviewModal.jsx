import React from "react";
import { getComponentByType } from "../../utils/componentMap";

const PreviewModal = ({ isOpen, onClose, components }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full h-full bg-white overflow-y-auto">

                {/* -- HEADER -- */}
                <div className="sticky top-0 z-10 bg-(--bg-color)  shadow-md">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div>
                            <h2 className="text-2xl font-bold text-(--main-text-color)">Live Preview</h2>
                            <p className="text-sm font-semibold text-(--main-text-color)">
                                This is how your page will look
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-(--main-text-color) text-white px-6 py-2 rounded-lg font-semibold hover:bg-(--hover-color) transition"
                        >
                            ✕ Close Preview
                        </button>
                    </div>
                </div>

                {/* -- PREVIEW BODY -- */}
                <div className="bg-gray-50 min-h-screen">
                    {components.length === 0 ? (
                        <div className="flex items-center justify-center h-screen">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-(--main-text-color) mb-2">
                                    No Components Yet
                                </h3>
                                <p className="text-gray-500">
                                    Add some components to see the preview
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {components.map((item) => {
                                const ItemComponent = getComponentByType(item.type);

                                if (!ItemComponent) {
                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-red-50 border-2 border-red-300 p-8 text-center"
                                        >
                                            <p className="text-red-600 font-semibold text-lg">
                                                ⚠️ Component "{item.type}" not found!
                                            </p>
                                            <p className="text-red-500 text-sm mt-2">
                                                This component may have been removed or renamed.
                                            </p>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={item.id}>
                                        <ItemComponent />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;
