import React from 'react';

const Canvas = () => {
    return (
      <div className="bg-gray-50 h-full overflow-y-auto">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-bold text-gray-800">Canvas</h2>
          <p className="text-xs text-gray-500 mt-1">
            Your components will appear here
          </p>
        </div>
  
        <div className="p-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center bg-white">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Start Building
            </h3>
            <p className="text-sm text-gray-500">
              Select components from the library and add designs to get started
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Canvas;