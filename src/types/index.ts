export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
