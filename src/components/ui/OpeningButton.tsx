"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface OpeningButtonProps {
  name: string;
  id: string;
  side: "white" | "black";
  difficulty?: "beginner" | "intermediate" | "advanced";
  onClick?: () => void;
}

const difficultyColors = {
  beginner: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
  intermediate:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
  advanced: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
};

export function OpeningButton({
  name,
  id,
  side,
  difficulty = "beginner",
  onClick,
}: OpeningButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 4 }}
    >
      <Link
        href={`/lesson/${side}/${id}`}
        onClick={onClick}
        className="block p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
              {name}
            </h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                difficultyColors[difficulty]
              }`}
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          </div>
          <ChevronRight className="text-slate-400 dark:text-slate-600" />
        </div>
      </Link>
    </motion.div>
  );
}

interface OpeningGridProps {
  openings: Array<{
    id: string;
    name: string;
    difficulty?: "beginner" | "intermediate" | "advanced";
  }>;
  side: "white" | "black";
}

export function OpeningGrid({ openings, side }: OpeningGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {openings.map((opening) => (
        <OpeningButton
          key={opening.id}
          id={opening.id}
          name={opening.name}
          side={side}
          difficulty={opening.difficulty}
        />
      ))}
    </div>
  );
}
