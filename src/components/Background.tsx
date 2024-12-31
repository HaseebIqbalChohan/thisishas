import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Darker gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Brighter red accent blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-red-500/25 rounded-full blur-3xl animate-pulse" />
      
      {/* Additional accents */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
      
      {/* Subtle grid overlay with more contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
};

export default Background; 