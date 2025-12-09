import { Mail, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RadialGauge from './RadialGauge';
import PeakScoreMatrix from './PeakScoreMatrix';
import { AssessmentData } from './AssessmentForm';
import { PeakMatrixScore, calculatePeakScore } from '@/services/peakScoreCalculator';

interface ResultsViewProps {
  data: AssessmentData;
  score: number;
  onRetake: () => void;
}

const ResultsView = ({ data, score, onRetake }: ResultsViewProps) => {
  const matrixScore: PeakMatrixScore = calculatePeakScore(data);

  const getZone = (s: number) => {
    if (s >= 75) return { name: 'Peak Zone', description: "You're performing at a high level. Focus on maintaining these habits and making small optimizations." };
    if (s >= 50) return { name: 'Growth Zone', description: "You have solid foundations but there's room for improvement. Small changes can yield big results." };
    return { name: 'Recovery Zone', description: "Your brain is signaling that it needs support. Prioritize rest, stress reduction, and foundational habits." };
  };

  const zone = getZone(matrixScore.OverallPeakScore);

  // Generate recommendations based on lowest scoring quadrants
  const getRecommendations = (matrix: PeakMatrixScore) => {
    const recommendations: string[] = [];

    if (matrix.CognitiveEmotional < 60) {
      recommendations.push('Practice 10 minutes of daily meditation to reduce mental fog and stress.');
      recommendations.push('Take short breaks every 90 minutes during focused work.');
    }
    if (matrix.PhysicalAesthetic < 60) {
      recommendations.push('Add a 20-minute walk to your daily routine for energy boost.');
      recommendations.push('Focus on whole foods and reduce processed food intake.');
    }
    if (matrix.HormonalVitality < 60) {
      recommendations.push('Prioritize 7-8 hours of quality sleep as your #1 goal.');
      recommendations.push('Reduce caffeine after 2 PM to improve sleep quality.');
    }

    // If all scores are good, give maintenance tips
    if (recommendations.length === 0) {
      recommendations.push('Continue your current sleep routine - it\'s working well.');
      recommendations.push('Consider adding meditation to further enhance focus.');
      recommendations.push('Share your habits with others to stay accountable.');
    }

    return recommendations.slice(0, 3);
  };

  const recommendations = getRecommendations(matrixScore);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Assessment Complete</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Your Peak Brain Matrix
        </h2>
      </div>

      {/* Main Score Card */}
      <div className="glass-card p-8 md:p-12 mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Gauge */}
          <div className="flex-shrink-0">
            <RadialGauge score={matrixScore.OverallPeakScore} size={280} />
          </div>

          {/* Score Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2">{zone.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {zone.description}
            </p>
          </div>
        </div>
      </div>

      {/* Peak Score Matrix - Radar Chart */}
      <div className="glass-card p-8 mb-8">
        <h3 className="text-xl font-semibold mb-6 text-center">High-Performance Decay Matrix</h3>
        <PeakScoreMatrix score={matrixScore} />
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
