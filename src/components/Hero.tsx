import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RadialGauge from './RadialGauge';

interface HeroProps {
  onStartAssessment: () => void;
}

const Hero = ({ onStartAssessment }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peak-purple/10 rounded-full blur-[120px] animate-glow-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-peak-teal/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Science-Backed Assessment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Measure your{' '}
              <span className="gradient-text">Peak Brain Score.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              A science-backed snapshot of your focus, clarity, stress load, and lifestyle – in under 3 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onStartAssessment}
                className="btn-primary group text-base"
                size="lg"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline text-base"
                size="lg"
              >
                Talk to a Peak Brain Expert
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>No spam. Your data is private and encrypted.</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center animate-fade-in delay-300">
            {/* Brain Illustration Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Geometric Brain Pattern */}
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                  <defs>
                    <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(160, 83%, 35%)" />
                      <stop offset="50%" stopColor="hsl(180, 60%, 45%)" />
                      <stop offset="100%" stopColor="hsl(270, 60%, 55%)" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#brainGradient)" strokeWidth="1">
                    <circle cx="200" cy="200" r="150" />
                    <circle cx="200" cy="200" r="120" />
                    <circle cx="200" cy="200" r="90" />
                    <path d="M200 50 L200 350" />
                    <path d="M50 200 L350 200" />
                    <path d="M100 100 L300 300" />
                    <path d="M300 100 L100 300" />
                    {/* Neural network nodes */}
                    <circle cx="200" cy="80" r="8" fill="url(#brainGradient)" />
                    <circle cx="280" cy="120" r="6" fill="url(#brainGradient)" />
                    <circle cx="320" cy="200" r="8" fill="url(#brainGradient)" />
                    <circle cx="280" cy="280" r="6" fill="url(#brainGradient)" />
                    <circle cx="200" cy="320" r="8" fill="url(#brainGradient)" />
                    <circle cx="120" cy="280" r="6" fill="url(#brainGradient)" />
                    <circle cx="80" cy="200" r="8" fill="url(#brainGradient)" />
                    <circle cx="120" cy="120" r="6" fill="url(#brainGradient)" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Radial Gauge */}
            <div className="relative z-10 animate-float">
              <div className="glass-card p-8 rounded-3xl">
                <RadialGauge score={82} size={220} animated={true} />
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Sample Score Preview
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 z-20 glass-card px-4 py-2 rounded-xl animate-float delay-200">
              <span className="text-sm font-medium">Focus: <span className="text-primary">High</span></span>
            </div>
            <div className="absolute bottom-10 left-10 z-20 glass-card px-4 py-2 rounded-xl animate-float delay-400">
              <span className="text-sm font-medium">Stress: <span className="text-peak-teal">Moderate</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
