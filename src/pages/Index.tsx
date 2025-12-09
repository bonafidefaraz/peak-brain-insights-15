import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhatWeMeasure from '@/components/WhatWeMeasure';
import WhyPeakBrain from '@/components/WhyPeakBrain';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AssessmentForm, { AssessmentData } from '@/components/AssessmentForm';
import ResultsView from '@/components/ResultsView';
import { calculatePeakScore } from '@/services/peakScoreCalculator';

type ViewState = 'landing' | 'assessment' | 'results';

const Index = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [score, setScore] = useState(0);
  const assessmentRef = useRef<HTMLDivElement>(null);

  const handleStartAssessment = () => {
    setView('assessment');
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAssessmentComplete = (data: AssessmentData) => {
    const matrixScore = calculatePeakScore(data);
    setAssessmentData(data);
    setScore(matrixScore.OverallPeakScore);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setView('assessment');
    setAssessmentData(null);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'results' && assessmentData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onStartAssessment={handleRetake} />
        <main className="pt-24 pb-20 px-4">
          <ResultsView data={assessmentData} score={score} onRetake={handleRetake} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onStartAssessment={handleStartAssessment} />
      
      <main>
        {view === 'landing' ? (
          <>
            <Hero onStartAssessment={handleStartAssessment} />
            <HowItWorks />
            <WhatWeMeasure />
            <WhyPeakBrain />
            <Testimonials />
            <FAQ />
          </>
        ) : (
          <div ref={assessmentRef} className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Peak Brain Score <span className="gradient-text">Assessment</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Answer a few questions about your cognitive health and lifestyle to get your personalized brain score.
                </p>
              </div>
              <AssessmentForm onComplete={handleAssessmentComplete} />
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
