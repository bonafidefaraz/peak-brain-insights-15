import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Clarity',
    description: 'Cut through brain fog and understand exactly where your cognitive performance stands today.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Get targeted insights to optimize focus, energy, and mental sharpness for peak productivity.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevention',
    description: 'Identify early warning signs of burnout and cognitive decline before they become problems.',
  },
];

const WhyPeakBrain = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="section-heading mb-6">
              Why <span className="gradient-text">Peak Brain Labs</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We combine cutting-edge neuroscience, biomarker research, and AI-powered analysis 
              with human expertise to give you actionable insights about your cognitive health.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our assessment is designed by neuroscientists and validated against real-world 
              cognitive performance data. Every question is intentional, every insight is actionable.
            </p>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group glass-card-hover p-6 flex gap-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPeakBrain;
