import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-green/10 to-secondary-green/10 rounded-full floating-element blur-sm"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent-green/10 to-accent-yellow/10 rounded-lg floating-element blur-sm rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-accent-orange/10 to-accent-red/10 rounded-full floating-element blur-sm"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg floating-element blur-sm rotate-12"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-green/5 to-secondary-green/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-green/5 to-accent-yellow/5 rounded-full blur-3xl floating-element"></div>
    </div>
  );
};

export default FloatingElements;