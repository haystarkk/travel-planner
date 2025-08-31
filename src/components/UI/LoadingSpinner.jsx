import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-600"></div>
      <span className="ml-4 text-gray-600">Loading destination details...</span>
    </div>
  );
};

export default LoadingSpinner;