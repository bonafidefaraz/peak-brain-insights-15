import { useEffect, useState } from 'react';

interface RadialGaugeProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
  showLabel?: boolean;
  className?: string;
}

const RadialGauge = ({
  score,
  size = 200,
  strokeWidth = 12,
  animated = true,
  showLabel = true,
  className = '',
}: RadialGaugeProps) => {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayScore / 100) * circumference;
  const dashOffset = circumference - progress;

  useEffect(() => {
    if (animated) {
      const duration = 1500;
      const steps = 60;
      const increment = score / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= score) {
          setDisplayScore(score);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [score, animated]);

  const getScoreColor = (s: number) => {
    if (s >= 75) return 'hsl(160, 83%, 35%)'; // Peak Zone - Green
    if (s >= 50) return 'hsl(180, 60%, 45%)'; // Growth Zone - Teal
    return 'hsl(270, 60%, 55%)'; // Recovery Zone - Purple
  };

  const getZoneLabel = (s: number) => {
    if (s >= 75) return 'Peak Zone';
    if (s >= 50) return 'Growth Zone';
    return 'Recovery Zone';
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(220, 30%, 15%)"
          strokeWidth={strokeWidth}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(160, 83%, 35%)" />
            <stop offset="50%" stopColor="hsl(180, 60%, 45%)" />
            <stop offset="100%" stopColor="hsl(270, 60%, 55%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getScoreColor(displayScore)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          filter="url(#glow)"
          className="transition-all duration-100"
        />
      </svg>
      
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold tracking-tight gradient-text">
            {displayScore}
          </span>
          <span className="text-sm text-muted-foreground mt-1">/ 100</span>
          <span 
            className="text-xs font-medium mt-2 px-3 py-1 rounded-full"
            style={{ 
              backgroundColor: `${getScoreColor(displayScore)}20`,
              color: getScoreColor(displayScore)
            }}
          >
            {getZoneLabel(displayScore)}
          </span>
        </div>
      )}
    </div>
  );
};

export default RadialGauge;
