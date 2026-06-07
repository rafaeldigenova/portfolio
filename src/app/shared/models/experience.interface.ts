export interface carrerProgression {
  title: string;
  date: string;
}

export interface baseExperience {
  title: string;
  company: string;
  location: string;
  summary: string;
  startDate: string;
  endDate: string;
  carrerProgression?: carrerProgression[]
}

export interface experience extends baseExperience {
  bulletPoints?: string[];
  skills: string[];
  highlights?: string[];
}