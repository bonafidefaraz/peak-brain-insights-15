import { AssessmentData } from '@/components/AssessmentForm';

export interface PeakMatrixScore {
  CognitiveEmotional: number;  // 0-100
  PhysicalAesthetic: number;   // 0-100
  GutDigestive: number;        // 0-100 (fixed at 50 - no data available)
  HormonalVitality: number;    // 0-100
  OverallPeakScore: number;    // 0-100 (average of 4 quadrants)
}

export function calculatePeakScore(data: AssessmentData): PeakMatrixScore {
  // Quadrant 1: Cognitive & Emotional
  // Positive: mentalClarity, focus | Negative: forgetfulness, stressLoad
  const cognitiveEmotional = Math.round(
    ((data.mentalClarity + data.focus + (10 - data.forgetfulness) + (10 - data.stressLoad)) / 40) * 100
  );

  // Quadrant 2: Physical & Aesthetic
  // Positive: energyLevels, physicalActivity, dietQuality
  const physicalAesthetic = Math.round(
    ((data.energyLevels + data.physicalActivity + data.dietQuality) / 30) * 100
  );

  // Quadrant 3: Gut & Digestive
  // No data available - fixed at 50 (neutral)
  const gutDigestive = 50;

  // Quadrant 4: Hormonal & Vitality
  // Positive: sleepQuality | Negative: caffeineIntake, alcoholIntake
  const hormonalVitality = Math.round(
    ((data.sleepQuality + (10 - data.caffeineIntake) + (10 - data.alcoholIntake)) / 30) * 100
  );

  // Overall Peak Score: Average of all 4 quadrants
  const overallPeakScore = Math.round(
    (cognitiveEmotional + physicalAesthetic + gutDigestive + hormonalVitality) / 4
  );

  return {
    CognitiveEmotional: cognitiveEmotional,
    PhysicalAesthetic: physicalAesthetic,
    GutDigestive: gutDigestive,
    HormonalVitality: hormonalVitality,
    OverallPeakScore: overallPeakScore,
  };
}
