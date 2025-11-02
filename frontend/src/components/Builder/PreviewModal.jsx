import React from "react";
import { getComponentByType } from "../../utils/componentMap";

const PreviewModal = ({ isOpen, onClose, components }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full h-full bg-white overflow-y-auto">
                <div className="sticky top-0 z-10 bg-white border-b shadow-md">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
                            <p className="text-sm text-gray-500">
                                This is how your page will look
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                        >
                            ✕ Close Preview
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 min-h-screen">
                    {components.length === 0 ? (
                        <div className="flex items-center justify-center h-screen">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📭</div>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
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

                <div className="sticky bottom-0 bg-white border-t py-3">
                    <p className="text-center text-sm text-gray-500">
                        💡 This is a preview. Close to continue editing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;
