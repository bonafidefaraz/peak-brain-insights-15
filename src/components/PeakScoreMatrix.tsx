import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { PeakMatrixScore } from '@/services/peakScoreCalculator';

interface PeakScoreMatrixProps {
  score: PeakMatrixScore;
  className?: string;
}

const PeakScoreMatrix = ({ score, className = '' }: PeakScoreMatrixProps) => {
  const data = [
    {
      domain: 'Cognitive & Emotional',
      value: score.CognitiveEmotional,
      fullMark: 100,
    },
    {
      domain: 'Physical & Aesthetic',
      value: score.PhysicalAesthetic,
      fullMark: 100,
    },
    {
      domain: 'Gut & Digestive',
      value: score.GutDigestive,
      fullMark: 100,
    },
    {
      domain: 'Hormonal & Vitality',
      value: score.HormonalVitality,
      fullMark: 100,
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid 
            stroke="hsl(var(--border))" 
            strokeOpacity={0.3}
          />
          <PolarAngleAxis
            dataKey="domain"
            tick={{ 
              fill: 'hsl(var(--muted-foreground))', 
              fontSize: 11,
              fontWeight: 500,
            }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={45}
            domain={[0, 100]}
            tick={{ 
              fill: 'hsl(var(--muted-foreground))', 
              fontSize: 10 
            }}
            tickCount={5}
            stroke="hsl(var(--border))"
            strokeOpacity={0.2}
          />
          <Radar
            name="Peak Score"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.25}
            strokeWidth={2}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Domain Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item) => (
          <div
            key={item.domain}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/30"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {item.domain}
            </span>
            <span className="text-sm font-bold text-primary">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeakScoreMatrix;
