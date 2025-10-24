import React from 'react';
import ModernCard from './ModernCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'indigo';
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  color = 'blue',
  link
}) => {
  const colorClasses = {
    blue: 'from-accent-blue to-blue-500',
    green: 'from-primary-green to-secondary-green',
    orange: 'from-accent-orange to-accent-yellow',
    red: 'from-accent-red to-pink-500',
    purple: 'from-purple-500 to-indigo-500',
    indigo: 'from-indigo-500 to-blue-600'
  };

  const CardContent = () => (
    <ModernCard className="p-3 sm:p-4 md:p-6 h-full group cursor-pointer" interactive>
      <div className="flex flex-col items-center text-center h-full">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-google-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white scale-75">{icon}</div>
        </div>
        
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary-text mb-2 sm:mb-3 group-hover:text-primary-green transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-secondary-text leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="mt-3 sm:mt-4 flex items-center text-primary-green font-medium text-sm group-hover:gap-1 transition-all duration-200">
          <span>Pelajari lebih lanjut</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </ModernCard>
  );

  if (link) {
    return (
      <a href={link} className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default FeatureCard;