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

type ViewState = 'landing' | 'assessment' | 'results';

const Index = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [score, setScore] = useState(0);
  const assessmentRef = useRef<HTMLDivElement>(null);

  const calculateScore = (data: AssessmentData): number => {
    // Score calculation with reversed scoring for certain metrics
    const mentalClarity = data.mentalClarity * 10;
    const focus = data.focus * 10;
    const forgetfulness = (10 - data.forgetfulness) * 10;
    const sleepQuality = data.sleepQuality * 10;
    const energyLevels = data.energyLevels * 10;
    const stressLoad = (10 - data.stressLoad) * 10;
    const screenTime = (10 - data.screenTime) * 10;
    const physicalActivity = data.physicalActivity * 10;
    const dietQuality = data.dietQuality * 10;
    const caffeineIntake = (10 - data.caffeineIntake) * 10;
    const alcoholIntake = (10 - data.alcoholIntake) * 10;

    const total = mentalClarity + focus + forgetfulness + sleepQuality + 
                  energyLevels + stressLoad + screenTime + physicalActivity + 
                  dietQuality + caffeineIntake + alcoholIntake;

    return Math.round(total / 11);
  };

  const handleStartAssessment = () => {
    setView('assessment');
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAssessmentComplete = (data: AssessmentData) => {
    const calculatedScore = calculateScore(data);
    setAssessmentData(data);
    setScore(calculatedScore);
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
