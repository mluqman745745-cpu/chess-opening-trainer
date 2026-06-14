"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
          </span>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "orange" | "red" | "purple";
}

const colorStyles = {
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  green: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
  red: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
};

export function StatCard({
  label,
  value,
  icon,
  color = "blue",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg border border-current/10 ${colorStyles[color]}`}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <div>
          <p className="text-xs font-medium opacity-75">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
