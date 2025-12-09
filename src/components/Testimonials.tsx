import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I wake up feeling fresh. Almost like a rebirth. For the first time in years, my mornings don't feel heavy.",
    name: "Arjun Mehra",
    role: "Chief of Staff",
    avatar: "AM",
  },
  {
    quote: "I feel sharp again. Focused. It feels like a door opened back to the version of me I thought I'd lost.",
    name: "Rohit Kulkarni",
    role: "Senior Software Engineer (SDE II), FAANG",
    avatar: "RK",
  },
  {
    quote: "I am getting more done in less time without pushing myself. The constant mental fatigue is finally gone.",
    name: "Ankit Jain",
    role: "Chief Technical Manager",
    avatar: "AJ",
  },
  {
    quote: "This did not just improve my focus. It helped me balance work, health, and everyday life.",
    name: "Priya Nair",
    role: "Marketing Manager, Rel Industries",
    avatar: "PN",
  },
  {
    quote: "As a quant researcher, clarity is everything. Peak Brain Tech helped me reduce noise and think cleanly again.",
    name: "Kunal Shah",
    role: "Quantitative Researcher",
    avatar: "KS",
  },
  {
    quote: "Mental endurance matters as much as physical readiness. This program restored my clarity, calm decision making, and focus.",
    name: "Dr. Vikram",
    role: "Medical Officer, Indian Army",
    avatar: "DV",
  },
  {
    quote: "What stood out was the clinical depth and seriousness. This is proper medical thinking applied to brain health.",
    name: "Dr. Ananya",
    role: "Associate Professor, AIIMS",
    avatar: "DA",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-4">
            Trusted by <span className="gradient-text">High Performers</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real words from people who demanded more from their brain and got it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card-hover p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg leading-relaxed mb-6">
                {testimonial.quote}
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
