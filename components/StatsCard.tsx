import React from 'react';
import ModernCard from './ModernCard';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'from-accent-blue to-blue-500',
    green: 'from-primary-green to-secondary-green',
    orange: 'from-accent-orange to-accent-yellow',
    red: 'from-accent-red to-pink-500',
    purple: 'from-purple-500 to-indigo-500'
  };

  const trendColors = {
    up: 'text-accent-green',
    down: 'text-accent-red',
    neutral: 'text-secondary-text'
  };

  const trendIcons = {
    up: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    ),
    down: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-9.2 9.2M7 7v10h10" />
      </svg>
    ),
    neutral: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
      </svg>
    )
  };

  return (
    <ModernCard className="p-3 sm:p-4 md:p-5 animate-fade-in-up">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-secondary-text mb-1">{title}</p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary-text mb-1">{value}</p>
          {description && (
            <p className="text-sm text-tertiary-text">{description}</p>
          )}
          {trend && trendValue && (
            <div className={`flex items-center gap-1 mt-1 text-sm ${trendColors[trend]}`}>
              <div className="w-3 h-3 sm:w-4 sm:h-4">
                {trend === 'up' && (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                )}
                {trend === 'down' && (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-9.2 9.2M7 7v10h10" />
                  </svg>
                )}
                {trend === 'neutral' && (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                )}
              </div>
              <span className="text-sm">{trendValue}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-google bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-white flex-shrink-0`}>
            <div className="scale-75">{icon}</div>
          </div>
        )}
      </div>
    </ModernCard>
  );
};

export default StatsCard;