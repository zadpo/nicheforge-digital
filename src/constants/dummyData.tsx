import { Service, Feature, Project, Testimonial, PricingPlan, ProcessStep, FAQ } from "../types";
import { Code, Search, Wrench, Zap } from "lucide-react";

export const services: Service[] = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Design",
    description: "Stunning, user-friendly designs tailored for your brand",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Web Development",
    description: "Fast, responsive websites built with cutting-edge tech",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO Optimization",
    description: "SEO-friendly design for improved search rankings",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Maintenance",
    description: "Ongoing support to keep your site running smoothly",
  },
];

export const features: Feature[] = [
  { title: "Responsive Design", description: "Perfect experience on all devices" },
  { title: "Custom Functionality", description: "Tailored features for your business needs" },
  { title: "E-commerce Integration", description: "Seamless online selling capabilities" },
  { title: "Content Management", description: "Easy-to-use CMS for updates" },
  { title: "Performance Optimization", description: "Fast-loading pages for better user experience" },
  { title: "Analytics Integration", description: "Track and analyze your site's performance" },
];

export const projects: Project[] = [
  {
    image: "/uploads/proj/proj11.png",
    title: "Goodmood",
    description: "Increased lead generation by 60%",
  },
  {
    image: "/uploads/proj/proj7.png",
    title: "iluy.ai",
    description: "A multi-model AI chatbot",
  },
  {
    image: "/uploads/proj/proj9.png",
    title: "Corebride Solutions",
    description: "Bridging Vision Building Success",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechNova Solutions",
    quote: "The team delivered a cutting-edge website that perfectly represents our innovative brand.",
  },
  {
    name: "Michael Chen",
    title: "Founder, EcoGreen Products",
    quote: "Our online sales have skyrocketed since launching our new e-commerce site.",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, FitLife Gym",
    quote: "The website design perfectly captures our energetic and motivational brand essence.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Starter",
    price: "$999",
    features: ["5-page website", "Mobile responsive", "Basic SEO", "1 month support"],
  },
  {
    title: "Business",
    price: "$2,499",
    features: [
      "10-page website",
      "Mobile responsive",
      "Advanced SEO",
      "E-commerce functionality",
      "3 months support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Mobile responsive",
      "Advanced SEO",
      "Custom functionality",
      "Priority support",
      "6 months support",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  // {
  //   step: "01",
  //   title: "Discovery",
  //   description: "We learn about your business and goals",
  //   image: "/uploads/pro1.png",
  // },
  {
    step: "01",
    title: "Planning",
    description: "We create a detailed project plan and timeline",
    image: "/uploads/pro2.png",
  },
  {
    step: "02",
    title: "Design",
    description: "We craft a custom design that aligns with your brand",
    image: "/uploads/pro3.png",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your site with cutting-edge technology",
    image: "/uploads/pro4.png",
  },
  // {
  //   step: "05",
  //   title: "Testing",
  //   description: "We rigorously test for quality and performance",
  //   image: "/uploads/pro5.png",
  // },
  {
    step: "04",
    title: "Launch",
    description: "We ensure a smooth launch and provide training",
    image: "/uploads/pro6.png",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How long does a typical web project take?",
    answer: "Project timelines vary based on complexity, but most projects are completed within 6-12 weeks.",
  },
  {
    question: "What's included in your maintenance plans?",
    answer:
      "Our maintenance plans include regular updates, security checks, backups, and content updates as needed.",
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer:
      "Yes, we provide robust e-commerce solutions that can be customized to fit your specific business needs.",
  },
  {
    question: "Can you help with content creation?",
    answer: "We offer content creation services including copywriting and graphic design.",
  },
  {
    question: "Do you provide hosting services?",
    answer: "Yes, we offer fast, secure hosting solutions optimized for performance and reliability.",
  },
];
