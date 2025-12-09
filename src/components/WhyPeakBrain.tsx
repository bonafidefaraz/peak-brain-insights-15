import { FlaskConical, Stethoscope, Pill, FileText, CalendarCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: FlaskConical,
    title: '100+ Comprehensive Biomarker Testing',
    description: 'One of the most exhaustive metabolic and neurological biomarker panels available — lipid metabolism, glycemic markers, vitamins, inflammatory indicators, and brain-relevant cofactors.',
  },
  {
    icon: Stethoscope,
    title: 'Specialist Doctor Consultation',
    description: 'Reports reviewed by MD, DM, and DNB qualified specialists. Expert-driven clinical interpretation, not automated diagnosis.',
  },
  {
    icon: Pill,
    title: 'Precision Prescription',
    description: 'Precisely calculated dosages, frequency-specific schedules, organ-safety validation, and interaction screening — adjusted to your physiology.',
  },
  {
    icon: FileText,
    title: 'Personalized Health Report',
    description: 'Risk visualizations, organ safety radar, clear abnormality explanations, doctor-issued prescriptions, and lifestyle guidance — a working medical document.',
  },
  {
    icon: CalendarCheck,
    title: 'Follow-Up & Outcome Tracking',
    description: '1-week early response monitoring and 6-week outcome assessment with biomarker-driven adjustments. Measurable progress, not static advice.',
  },
  {
    icon: TrendingUp,
    title: 'Outcomes That Matter',
    description: 'Delivered 40,000+ IQ points restored. Helped professionals reverse brain fog, burnout, and fatigue. Identified hidden deficiencies missed in routine checkups.',
  },
];

const WhyPeakBrain = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-6">
            What Makes <span className="gradient-text">Peak Brain Tech</span> Different
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Peak Brain Tech goes beyond questionnaires and generic advice. This is clinical-grade digital healthcare for people who demand results, not reassurance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card-hover p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Medical Legitimacy Note */}
        <div className="mt-16 glass-card p-8 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-semibold mb-4">Is This Medical Advice? <span className="text-primary">Yes.</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Peak Brain Tech provides legitimate medical consultation through licensed doctors. All recommendations follow medical ethics, telemedicine regulations, and prescription governance standards. This is clinical-grade digital healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyPeakBrain;
