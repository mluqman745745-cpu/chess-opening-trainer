"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Button, IconButton, ResetButton } from "@/components/ui/Button";
import { CoachFeedback } from "@/components/ui/CoachMessage";
import { ProgressBar, StatCard } from "@/components/ui/Progress";
import { ChessboardBoard } from "@/components/chess/Chessboard";
import { getOpeningById } from "@/data/openings";
import { aiCoach, CoachMessage } from "@/lib/aiCoach";
import { progressStore } from "@/data/progress";
import { motion } from "framer-motion";
import { RotateCcw, BookMarked, CheckCircle2, AlertCircle } from "lucide-react";

export default function LessonPage() {
  const params = useParams();
  const side = params.side as "white" | "black";
  const openingId = params.id as string;

  const opening = getOpeningById(openingId, side);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [coachMessages, setCoachMessages] = useState<CoachMessage[]>([]);
  const [userMoves, setUserMoves] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [lessonStarted, setLessonStarted] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [accuracy, setAccuracy] = useState(100);

  // Initialize lesson
  useEffect(() => {
    if (opening && !lessonStarted) {
      const intro = aiCoach.getOpeningIntroduction(
        opening.name,
        opening.description
      );
      setCoachMessages([intro]);
    }
  }, [opening, lessonStarted]);

  // Start lesson - show first move
  const handleStartLesson = () => {
    if (!opening) return;
    setLessonStarted(true);
    const firstMove = opening.mainLine[0];
    const moveExplanation = aiCoach.generateMoveExplanation(
      firstMove.san,
      firstMove.explanation,
      firstMove.strategicIdea
    );
    setCoachMessages((prev) => [...prev, moveExplanation]);
  };

  // Handle user move on the board
  const handleMoveOnBoard = (moveNotation: string) => {
    if (!opening || lessonCompleted) return;

    const correctMove = opening.mainLine[currentMoveIndex];
    if (!correctMove) return;

    // Check if move is correct
    if (moveNotation === correctMove.san) {
      // Correct move!
      const successMsg = aiCoach.generateSuccessMessage(moveNotation);
      setCoachMessages((prev) => [...prev, successMsg]);
      setUserMoves((prev) => [...prev, moveNotation]);

      // Check if lesson is complete
      if (currentMoveIndex === opening.mainLine.length - 1) {
        // Lesson complete
        const completionMsg = aiCoach.generateCompletionMessage(accuracy);
        setCoachMessages((prev) => [...prev, completionMsg]);
        setLessonCompleted(true);

        // Save progress
        progressStore.updateLessonProgress(openingId, {
          side,
          completedMoves: currentMoveIndex + 1,
          totalMoves: opening.mainLine.length,
          accuracy,
          status: "completed",
          lastPracticedDate: new Date().toISOString(),
          timesReviewed: (progressStore.getLessonProgress(openingId)?.timesReviewed || 0) + 1,
          nextReviewDate: progressStore.getNextReviewDate(
            (progressStore.getLessonProgress(openingId)?.timesReviewed || 0) + 1
          ),
        });
      } else {
        // Continue to next move
        setTimeout(() => {
          const nextMove = opening.mainLine[currentMoveIndex + 1];
          const nextMoveMsg = aiCoach.generateMoveExplanation(
            nextMove.san,
            nextMove.explanation,
            nextMove.strategicIdea
          );
          setCoachMessages((prev) => [...prev, nextMoveMsg]);
          setCurrentMoveIndex((prev) => prev + 1);
        }, 1500);
      }
    } else {
      // Wrong move
      const errorMsg = aiCoach.generateErrorMessage(
        moveNotation,
        correctMove.san,
        correctMove.whyCorrect
      );
      setCoachMessages((prev) => [...prev, errorMsg]);
      setMistakes((prev) => [...prev, moveNotation]);
      setAccuracy((prev) => Math.max(prev - 5, 0));
    }
  };

  // Reset lesson
  const handleReset = () => {
    setCurrentMoveIndex(0);
    setUserMoves([]);
    setMistakes([]);
    setLessonStarted(false);
    setLessonCompleted(false);
    setAccuracy(100);
    if (opening) {
      const intro = aiCoach.getOpeningIntroduction(
        opening.name,
        opening.description
      );
      setCoachMessages([intro]);
    }
  };

  if (!opening) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Opening not found
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              The opening you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {opening.name}
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                  {opening.description}
                </p>
              </div>
              <ResetButton onClick={handleReset} disabled={false} />
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chess Board - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <ChessboardBoard
                  openingId={openingId}
                  side={side}
                  currentMoveIndex={currentMoveIndex}
                  onMoveComplete={handleMoveOnBoard}
                  lessonStarted={lessonStarted}
                />
              </div>
            </motion.div>

            {/* Sidebar - Coach & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Stats */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BookMarked size={20} />
                  Progress
                </h3>
                <ProgressBar
                  current={currentMoveIndex}
                  total={opening.mainLine.length}
                  label="Moves"
                />
                <StatCard
                  label="Accuracy"
                  value={`${accuracy}%`}
                  color="blue"
                />
                <StatCard
                  label="Mistakes"
                  value={mistakes.length}
                  color={mistakes.length === 0 ? "green" : "red"}
                />
              </div>

              {/* Coach Messages */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  🤖 Chess Coach
                </h3>
                <CoachFeedback messages={coachMessages} />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!lessonStarted ? (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleStartLesson}
                    className="w-full"
                  >
                    Start Lesson
                  </Button>
                ) : lessonCompleted ? (
                  <Button
                    variant="success"
                    size="lg"
                    disabled
                    className="w-full"
                    icon={<CheckCircle2 size={20} />}
                  >
                    Lesson Complete!
                  </Button>
                ) : null}
              </div>

              {/* Opening Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Key Ideas
                </h4>
                <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                  {opening.keyIdeas.map((idea, idx) => (
                    <li key={idx}>• {idea}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
