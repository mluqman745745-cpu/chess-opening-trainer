"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Brain } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
    >
      <div className="text-3xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Learn Structured",
      description:
        "Master chess openings step-by-step with clear explanations and strategic ideas.",
    },
    {
      icon: <Zap size={32} />,
      title: "Interactive Practice",
      description:
        "Practice every move with visual guidance. Arrows and highlights show exactly where to move.",
    },
    {
      icon: <Brain size={32} />,
      title: "Spaced Repetition",
      description:
        "Smart review scheduling ensures you remember what you learn using proven memory techniques.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {features.map((feature, idx) => (
        <FeatureCard key={idx} {...feature} />
      ))}
    </div>
  );
}
