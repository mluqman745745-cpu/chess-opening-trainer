"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProgressBar, StatCard } from "@/components/ui/Progress";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { progressStore, type LessonProgress } from "@/data/progress";
import { Calendar, Target, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

interface DashboardStats {
  lessonsCompleted: number;
  totalAccuracy: number;
  dailyStreak: number;
  dueReviews: number;
  totalPracticeTime: number;
}

export function ProgressDashboard() {
  const [stats, setStats] = useState<DashboardStats>(() => {
    if (typeof window === "undefined") {
      return {
        lessonsCompleted: 0,
        totalAccuracy: 0,
        dailyStreak: 0,
        dueReviews: 0,
        totalPracticeTime: 0,
      };
    }

    const progress = progressStore.getUserProgress();
    const dueReviews = progressStore.getDueReviews();

    return {
      lessonsCompleted: progress.lessonsCompleted,
      totalAccuracy: progress.totalAccuracy,
      dailyStreak: progress.dailyStreak,
      dueReviews: dueReviews.length,
      totalPracticeTime: progress.totalPracticeTime,
    };
  });

  const [recentLessons, setRecentLessons] = useState<LessonProgress[]>(() => {
    if (typeof window === "undefined") return [];
    const progress = progressStore.getUserProgress();
    return Object.values(progress.lessonProgress)
      .filter((l) => l.status === "completed")
      .sort(
        (a, b) =>
          new Date(b.lastPracticedDate).getTime() -
          new Date(a.lastPracticedDate).getTime()
      )
      .slice(0, 5);
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Your Progress
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Track your chess opening training journey
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
          >
            <StatCard
              label="Lessons Completed"
              value={stats.lessonsCompleted}
              icon="📚"
              color="blue"
            />
            <StatCard
              label="Average Accuracy"
              value={`${stats.totalAccuracy}%`}
              icon="🎯"
              color="green"
            />
            <StatCard
              label="Daily Streak"
              value={stats.dailyStreak}
              icon="🔥"
              color="orange"
            />
            <StatCard
              label="Due Reviews"
              value={stats.dueReviews}
              icon="🔄"
              color="purple"
            />
            <StatCard
              label="Practice Time"
              value={`${stats.totalPracticeTime}m`}
              icon="⏱️"
              color="red"
            />
          </motion.div>

          {/* Recent Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Recent Lessons
            </h2>

            {recentLessons.length === 0 ? (
              <p className="text-slate-600 dark:text-slate-400 py-8 text-center">
                No lessons completed yet. Start your first lesson to see progress here!
              </p>
            ) : (
              <div className="space-y-3">
                {recentLessons.map((lesson) => (
                  <motion.div
                    key={lesson.openingId}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                          {lesson.openingId}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Reviewed {lesson.timesReviewed} time(s) • Last: {new Date(lesson.lastPracticedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {lesson.accuracy}%
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          accuracy
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <ProgressBar
                        current={lesson.completedMoves}
                        total={lesson.totalMoves}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Link href="/choose-side">
              <Button variant="primary" size="lg">
                Continue Learning
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
