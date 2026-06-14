"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { OpeningGrid } from "@/components/ui/OpeningButton";
import { whiteOpenings, blackOpenings } from "@/data/openings";
import { ArrowLeft } from "lucide-react";

interface CategoryGroup {
  category: string;
  openings: Array<{
    id: string;
    name: string;
    difficulty?: "beginner" | "intermediate" | "advanced";
  }>;
}

export default function ChooseSidePage() {
  const searchParams = useSearchParams();
  const side = (searchParams.get("side") || "white") as "white" | "black";

  const openings = side === "white" ? whiteOpenings : blackOpenings;

  // Group black openings by category
  const groupedOpenings: CategoryGroup[] = [];
  if (side === "black") {
    const categories = new Map<string, typeof blackOpenings>();
    openings.forEach((opening) => {
      const cat = opening.category || "Other";
      if (!categories.has(cat)) categories.set(cat, []);
      categories.get(cat)!.push(opening);
    });

    categories.forEach((ops, cat) => {
      groupedOpenings.push({
        category: cat,
        openings: ops.map((o) => ({ id: o.id, name: o.name, difficulty: o.difficultyLevel })),
      });
    });
  } else {
    groupedOpenings.push({
      category: "All Openings",
      openings: openings.map((o) => ({
        id: o.id,
        name: o.name,
        difficulty: o.difficultyLevel,
      })),
    });
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{side === "white" ? "♔" : "♚"}</span>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                  Learn as {side === "white" ? "White" : "Black"}
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  Choose an opening to start your training
                </p>
              </div>
            </div>
          </motion.div>

          {/* Openings Grid */}
          {groupedOpenings.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="mb-12"
            >
              {groupedOpenings.length > 1 && (
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {group.category}
                </h2>
              )}
              <OpeningGrid openings={group.openings} side={side} />
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
