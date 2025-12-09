import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The Peak Brain Score gave me clarity I didn't know I needed. I was running on empty and didn't even realize it.",
    name: "Alex Chen",
    role: "Founder & CEO",
    avatar: "AC",
  },
  {
    quote: "As a doctor, I appreciate the science behind this assessment. It's a great starting point for anyone serious about cognitive health.",
    name: "Dr. Sarah Mitchell",
    role: "Neurologist",
    avatar: "SM",
  },
  {
    quote: "Three minutes to understand why I've been struggling with focus lately. The personalized recommendations actually work.",
    name: "James Rodriguez",
    role: "Product Manager",
    avatar: "JR",
  },
  {
    quote: "I recommend Peak Brain Labs to all my executive clients. It's like a health check-up for your brain.",
    name: "Emily Winters",
    role: "Executive Coach",
    avatar: "EW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-4">
            Trusted by <span className="gradient-text">high performers</span>
          </h2>
          <p className="section-subheading mx-auto">
            See what founders, doctors, and professionals are saying
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
