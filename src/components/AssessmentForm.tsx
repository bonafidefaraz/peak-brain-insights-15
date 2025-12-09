import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';

interface AssessmentFormProps {
  onComplete: (data: AssessmentData) => void;
}

export interface AssessmentData {
  name: string;
  email: string;
  ageRange: string;
  role: string;
  city: string;
  mentalClarity: number;
  focus: number;
  forgetfulness: number;
  sleepQuality: number;
  energyLevels: number;
  stressLoad: number;
  screenTime: number;
  physicalActivity: number;
  dietQuality: number;
  caffeineIntake: number;
  alcoholIntake: number;
}

const sliderQuestions = [
  {
    key: 'mentalClarity',
    label: 'Mental Clarity',
    question: 'How clear does your thinking feel most days?',
    lowLabel: 'Very foggy',
    highLabel: 'Crystal clear',
  },
  {
    key: 'focus',
    label: 'Focus at Work/Study',
    question: 'How well can you concentrate on demanding tasks?',
    lowLabel: 'Constantly distracted',
    highLabel: 'Deeply focused',
  },
  {
    key: 'forgetfulness',
    label: 'Forgetfulness',
    question: 'How often do you forget important things?',
    lowLabel: 'Rarely forget',
    highLabel: 'Very forgetful',
    reversed: true,
  },
  {
    key: 'sleepQuality',
    label: 'Sleep Quality',
    question: 'How well-rested do you feel after sleeping?',
    lowLabel: 'Exhausted',
    highLabel: 'Fully restored',
  },
  {
    key: 'energyLevels',
    label: 'Energy Levels',
    question: 'How are your energy levels throughout the day?',
    lowLabel: 'Always tired',
    highLabel: 'High energy',
  },
  {
    key: 'stressLoad',
    label: 'Stress & Anxiety',
    question: 'How stressed or anxious do you typically feel?',
    lowLabel: 'Very calm',
    highLabel: 'Highly stressed',
    reversed: true,
  },
  {
    key: 'screenTime',
    label: 'Screen Time',
    question: 'How many hours per day are you on screens?',
    lowLabel: '2 hours or less',
    highLabel: '10+ hours',
    reversed: true,
  },
  {
    key: 'physicalActivity',
    label: 'Physical Activity',
    question: 'How active are you each week?',
    lowLabel: 'Sedentary',
    highLabel: 'Very active',
  },
  {
    key: 'dietQuality',
    label: 'Diet Quality',
    question: 'How would you rate your diet quality?',
    lowLabel: 'Mostly processed',
    highLabel: 'Mostly whole foods',
  },
  {
    key: 'caffeineIntake',
    label: 'Caffeine Intake',
    question: 'How much caffeine do you consume daily?',
    lowLabel: 'None',
    highLabel: 'Very high',
    reversed: true,
  },
  {
    key: 'alcoholIntake',
    label: 'Alcohol Intake',
    question: 'How often do you consume alcohol?',
    lowLabel: 'Never',
    highLabel: 'Daily',
    reversed: true,
  },
];

const AssessmentForm = ({ onComplete }: AssessmentFormProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<AssessmentData>({
    name: '',
    email: '',
    ageRange: '',
    role: '',
    city: '',
    mentalClarity: 5,
    focus: 5,
    forgetfulness: 5,
    sleepQuality: 5,
    energyLevels: 5,
    stressLoad: 5,
    screenTime: 5,
    physicalActivity: 5,
    dietQuality: 5,
    caffeineIntake: 5,
    alcoholIntake: 5,
  });

  const totalSteps = 3;

  const handleInputChange = (field: keyof AssessmentData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 0) {
      if (!formData.name.trim()) {
        toast({ title: 'Please enter your name', variant: 'destructive' });
        return false;
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast({ title: 'Please enter a valid email', variant: 'destructive' });
        return false;
      }
      if (!formData.ageRange) {
        toast({ title: 'Please select your age range', variant: 'destructive' });
        return false;
      }
      if (!formData.role) {
        toast({ title: 'Please select your role', variant: 'destructive' });
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      if (step < totalSteps - 1) {
        setStep(step + 1);
      } else {
        onComplete(formData);
      }
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-muted border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-muted border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label>Age Range *</Label>
              <Select
                value={formData.ageRange}
                onValueChange={(value) => handleInputChange('ageRange', value)}
              >
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select your age range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="18-24">18-24</SelectItem>
                  <SelectItem value="25-34">25-34</SelectItem>
                  <SelectItem value="35-44">35-44</SelectItem>
                  <SelectItem value="45-54">45-54</SelectItem>
                  <SelectItem value="55+">55+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Role *</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleInputChange('role', value)}
              >
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="Founder / CXO">Founder / CXO</SelectItem>
                  <SelectItem value="Working Professional">Working Professional</SelectItem>
                  <SelectItem value="Doctor">Doctor</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City / Country</Label>
              <Input
                id="city"
                placeholder="e.g., San Francisco, USA"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="bg-muted border-border focus:border-primary"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8 animate-fade-in">
            {sliderQuestions.slice(0, 6).map((q) => (
              <div key={q.key} className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <Label className="text-base font-medium">{q.label}</Label>
                    <p className="text-sm text-muted-foreground mt-1">{q.question}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {formData[q.key as keyof AssessmentData]}
                  </span>
                </div>
                <div className="relative">
                  <Slider
                    value={[formData[q.key as keyof AssessmentData] as number]}
                    onValueChange={(value) => handleInputChange(q.key as keyof AssessmentData, value[0])}
                    max={10}
                    min={0}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{q.lowLabel}</span>
                    <span>{q.highLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-8 animate-fade-in">
            {sliderQuestions.slice(6).map((q) => (
              <div key={q.key} className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <Label className="text-base font-medium">{q.label}</Label>
                    <p className="text-sm text-muted-foreground mt-1">{q.question}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {formData[q.key as keyof AssessmentData]}
                  </span>
                </div>
                <div className="relative">
                  <Slider
                    value={[formData[q.key as keyof AssessmentData] as number]}
                    onValueChange={(value) => handleInputChange(q.key as keyof AssessmentData, value[0])}
                    max={10}
                    min={0}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{q.lowLabel}</span>
                    <span>{q.highLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-sm text-muted-foreground">
            {step === 0 ? 'Basic Info' : step === 1 ? 'Cognitive Health' : 'Lifestyle'}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-peak-teal transition-all duration-500"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="glass-card p-8">
        <h3 className="text-xl font-semibold mb-6">
          {step === 0
            ? "Let's start with the basics"
            : step === 1
            ? 'Tell us about your cognitive health'
            : 'Finally, your lifestyle habits'}
        </h3>

        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 0}
            className="btn-outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={nextStep} className="btn-primary">
            {step === totalSteps - 1 ? (
              <>
                Get My Score
                <Check className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;
