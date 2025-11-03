import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { getComponentByType } from '../../utils/componentMap';

const Canvas = ({ components, onDeleteComponent }) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-droppable' });

  return (
    <div className="bg-gray-50 h-full overflow-y-auto">

      {/* -- CANVAS HEADER -- */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-bold text-(--main-text-color)">Canvas</h2>
        <p className="text-xs text-(--main-text-color) font-semibold mt-1">
          {components.length > 0 ? `${components.length} component(s) added` : 'Drag designs here to build your page'}
        </p>
      </div>

      <div
        ref={setNodeRef}
        className={`p-8 min-h-full transition-colors ${isOver ? 'bg-blue-50' : ''}`}
      >
        {components.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center bg-white">
            <div className="text-6xl mb-4">{isOver ? '🎯' : '👇'}</div>
            <h3 className="text-xl font-semibold text-(--main-text-color) mb-2">
              {isOver ? 'Drop here!' : 'Start Building'}
            </h3>
            <p className="text-sm text-black">
              Drag components from the design panel
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {components.map((item) => {
              const ItemComponent = getComponentByType(item.type);

              if (!ItemComponent) {
                return (
                  <div
                    key={item.id}
                    className="bg-red-50 border-2 border-red-300 rounded-lg p-6 text-center"
                  >
                    <p className="text-red-600 font-semibold">
                      ⚠️ Component "{item.type}" not found!
                    </p>
                    <button
                      onClick={() => onDeleteComponent(item.id)}
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="relative group bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
                >
                  <div className="absolute top-2 right-2 z-10 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.type}
                    </span>
                    <button
                      onClick={() => onDeleteComponent(item.id)}
                      className="bg-(--main-text-color) text-white px-3 py-1 rounded-full text-xs font-semibold hover:(--hover-color) transition"
                    >
                      Delete
                    </button>
                  </div>

                  {/* -- ITEM COMPONENT -- */}
                  <ItemComponent />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas;
