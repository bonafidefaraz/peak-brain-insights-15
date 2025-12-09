import { Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RadialGauge from './RadialGauge';
import { AssessmentData } from './AssessmentForm';

interface ResultsViewProps {
  data: AssessmentData;
  score: number;
  onRetake: () => void;
}

const ResultsView = ({ data, score, onRetake }: ResultsViewProps) => {
  const getZone = (s: number) => {
    if (s >= 75) return { name: 'Peak Zone', description: "You're performing at a high level. Focus on maintaining these habits and making small optimizations." };
    if (s >= 50) return { name: 'Growth Zone', description: "You have solid foundations but there's room for improvement. Small changes can yield big results." };
    return { name: 'Recovery Zone', description: "Your brain is signaling that it needs support. Prioritize rest, stress reduction, and foundational habits." };
  };

  const zone = getZone(score);

  // Calculate domain scores
  const focusClarity = Math.round(
    ((data.mentalClarity + data.focus + (10 - data.forgetfulness)) / 30) * 100
  );
  const recoverySleep = Math.round(
    ((data.sleepQuality + data.energyLevels + (10 - data.stressLoad)) / 30) * 100
  );
  const lifestyle = Math.round(
    (((10 - data.screenTime) + data.physicalActivity + data.dietQuality + (10 - data.caffeineIntake) + (10 - data.alcoholIntake)) / 50) * 100
  );

  const domains = [
    { name: 'Focus & Clarity', score: focusClarity, color: 'hsl(160, 83%, 35%)' },
    { name: 'Recovery & Sleep', score: recoverySleep, color: 'hsl(180, 60%, 45%)' },
    { name: 'Lifestyle & Habits', score: lifestyle, color: 'hsl(270, 60%, 55%)' },
  ];

  const recommendations = score >= 75 
    ? [
        'Continue your current sleep routine - it\'s working well.',
        'Consider adding meditation to further enhance focus.',
        'Share your habits with others to stay accountable.',
      ]
    : score >= 50
    ? [
        'Try reducing screen time 1 hour before bed.',
        'Add a 20-minute walk to your daily routine.',
        'Consider a morning focus ritual before checking email.',
      ]
    : [
        'Prioritize 7-8 hours of sleep as your #1 goal.',
        'Take short breaks every 90 minutes during work.',
        'Reduce caffeine after 2 PM to improve sleep quality.',
      ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Assessment Complete</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Your Peak Brain Score
        </h2>
      </div>

      {/* Main Score Card */}
      <div className="glass-card p-8 md:p-12 mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Gauge */}
          <div className="flex-shrink-0">
            <RadialGauge score={score} size={280} />
          </div>

          {/* Score Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">{zone.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {zone.description}
            </p>

            {/* Domain Breakdown */}
            <div className="space-y-4">
              {domains.map((domain) => (
                <div key={domain.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{domain.name}</span>
                    <span style={{ color: domain.color }}>{domain.score}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${domain.score}%`,
                        backgroundColor: domain.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass-card p-8 mb-8">
        <h3 className="text-xl font-semibold mb-6">Personalized Recommendations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-muted/50 border border-border/50"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <span className="text-sm font-bold text-primary">{index + 1}</span>
              </div>
              <p className="text-sm leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Confirmation */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="font-medium">Your full report is on its way!</p>
          <p className="text-sm text-muted-foreground">
            We've emailed your detailed Peak Brain Report to <span className="text-primary">{data.email}</span>
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRetake} variant="outline" className="btn-outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Assessment
        </Button>
        <Button className="btn-primary">
          Book a Peak Brain Consult
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
