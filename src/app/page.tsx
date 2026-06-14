"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BookOpen } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { FeaturesSection } from "@/components/ui/FeatureCard";
import { PrimaryButton } from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  🎯 Master Chess Openings
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight"
            >
              Learn Chess Openings with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                {" "}AI Coach
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Interactive chess opening trainer with an AI coach that teaches you move-by-move,
              forces you to practice, and uses spaced repetition for maximum retention.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/choose-side">
                <PrimaryButton>Start Learning Now</PrimaryButton>
              </Link>
              <button className="px-6 py-3 rounded-lg font-semibold border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                View Features
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              A complete learning system designed to make you a better chess player
            </p>
          </motion.div>
          <FeaturesSection />
        </section>

        {/* Side Selection Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Learn as White or Black - Master different strategic ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* White Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/choose-side?side=white">
                <div className="p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all cursor-pointer h-full hover:border-blue-400 dark:hover:border-blue-500">
                  <div className="text-5xl mb-4">♔</div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    Learn as White
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Master aggressive openings like Ruy Lopez, Italian Game, and Queen's Gambit.
                    Learn to seize the initiative.
                  </p>
                  <div className="flex items-center text-blue-500 font-semibold">
                    20+ Openings <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Black Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/choose-side?side=black">
                <div className="p-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all cursor-pointer h-full hover:border-purple-400 dark:hover:border-purple-500">
                  <div className="text-5xl mb-4">♚</div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                    Learn as Black
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Master solid defenses like Sicilian, French Defense, and King's Indian.
                    Learn to neutralize White's attacks.
                  </p>
                  <div className="flex items-center text-purple-500 font-semibold">
                    20+ Defenses <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Start your journey to chess mastery today with interactive learning and an AI coach.
            </p>
            <Link href="/choose-side">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
                Begin Now <Zap size={20} />
              </button>
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}
