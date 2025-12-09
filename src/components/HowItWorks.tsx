import { ClipboardList, Gauge, Mail } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Answer a 3-minute questionnaire',
    description: 'Quick, science-backed questions about your focus, sleep, stress, and daily habits.',
    step: '01',
  },
  {
    icon: Gauge,
    title: 'Instant Peak Brain Score dashboard',
    description: 'See your personalized score with detailed breakdowns across cognitive domains.',
    step: '02',
  },
  {
    icon: Mail,
    title: 'Get a personalised email report',
    description: 'Receive actionable insights and recommendations delivered to your inbox.',
    step: '03',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="section-subheading mx-auto">
            Three simple steps to understand your cognitive performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group glass-card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-sm font-bold text-primary">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Decorative line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
