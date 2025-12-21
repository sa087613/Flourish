import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <img
        src="/flourish.svg"
        alt="flourish Icon"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-115 h-115 animate-spin"
      />
    </div>
  );
};

export default AnimatedLogo;