import { 
  Focus, 
  Brain, 
  AlertTriangle, 
  Moon, 
  Activity, 
  Beaker 
} from 'lucide-react';

const metrics = [
  {
    icon: Focus,
    title: 'Focus & Attention',
    description: 'Your ability to concentrate and maintain deep work sessions.',
    color: 'hsl(160, 83%, 35%)',
  },
  {
    icon: Brain,
    title: 'Memory & Recall',
    description: 'Short-term memory efficiency and information retention.',
    color: 'hsl(180, 60%, 45%)',
  },
  {
    icon: AlertTriangle,
    title: 'Stress Load & Burnout Risk',
    description: 'Current stress levels and early warning signs of burnout.',
    color: 'hsl(270, 60%, 55%)',
  },
  {
    icon: Moon,
    title: 'Sleep & Recovery',
    description: 'Quality of rest and overnight cognitive restoration.',
    color: 'hsl(200, 70%, 50%)',
  },
  {
    icon: Activity,
    title: 'Lifestyle & Habits',
    description: 'Screen time, caffeine, movement, and daily routines.',
    color: 'hsl(320, 60%, 55%)',
  },
  {
    icon: Beaker,
    title: 'Biomarker Readiness',
    description: 'Likelihood that lab tests might reveal underlying issues.',
    color: 'hsl(45, 80%, 50%)',
  },
];

const WhatWeMeasure = () => {
  return (
    <section id="what-we-measure" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-4">
            What we <span className="gradient-text">measure</span>
          </h2>
          <p className="section-subheading mx-auto">
            Comprehensive cognitive domains backed by neuroscience research
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="group glass-card-hover p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <metric.icon 
                  className="w-6 h-6" 
                  style={{ color: metric.color }}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">
                {metric.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeMeasure;
