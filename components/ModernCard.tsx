import React from 'react';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  interactive?: boolean;
}

const ModernCard: React.FC<ModernCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  interactive = false 
}) => {
  const baseClasses = 'bg-surface rounded-google-xl shadow-card border border-outline-variant';
  const hoverClasses = hover ? 'card-hover' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-surface to-surface-variant' : '';
  const interactiveClasses = interactive ? 'interactive-hover cursor-pointer' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${interactiveClasses} ${className}`}>
      {children}
    </div>
  );
};

export default ModernCard;