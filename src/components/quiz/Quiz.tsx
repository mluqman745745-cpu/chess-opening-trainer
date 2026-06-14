"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface QuizQuestion {
  id: string;
  question: string;
  type: "multiple-choice" | "true-false" | "open-ended";
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setShowResult(false);
    } else {
      setQuizComplete(true);
      onComplete((score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / questions.length);
    }
  };

  if (quizComplete) {
    const finalScore = (score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / questions.length;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 text-center"
      >
        <div className="flex justify-center mb-6">
          {finalScore === 1 ? (
            <div className="text-6xl">🌟</div>
          ) : finalScore >= 0.8 ? (
            <div className="text-6xl">👍</div>
          ) : (
            <div className="text-6xl">📚</div>
          )}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Quiz Complete!
        </h2>
        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          {Math.round(finalScore * 100)}%
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          You got {Math.round(finalScore * questions.length)} out of {questions.length} questions correct!
        </p>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-blue-500"
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
          {question.question}
        </h3>

        {/* Options */}
        {question.type === "multiple-choice" && question.options && (
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ x: 4 }}
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : showResult && option === question.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        )}

        {question.type === "true-false" && (
          <div className="flex gap-4">
            {["True", "False"].map((option) => (
              <motion.button
                key={option}
                whileHover={{ scale: 1.05 }}
                onClick={() => !showResult && setSelectedAnswer(option)}
                disabled={showResult}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold border-2 transition-all ${
                  selectedAnswer === option
                    ? showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-red-500 bg-red-500 text-white"
                      : "border-blue-500 bg-blue-500 text-white"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Result and Explanation */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg border-l-4 ${
            isCorrect
              ? "bg-green-50 dark:bg-green-900/20 border-green-500"
              : "bg-red-50 dark:bg-red-900/20 border-red-500"
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            )}
            <div>
              <p className={`font-semibold ${
                isCorrect
                  ? "text-green-900 dark:text-green-100"
                  : "text-red-900 dark:text-red-100"
              }`}>
                {isCorrect ? "Correct!" : "Not quite."}
              </p>
              <p className={`text-sm mt-1 ${
                isCorrect
                  ? "text-green-800 dark:text-green-200"
                  : "text-red-800 dark:text-red-200"
              }`}>
                {question.explanation}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Button */}
      {!showResult ? (
        <Button
          variant="primary"
          size="lg"
          onClick={handleAnswer}
          disabled={!selectedAnswer}
          className="w-full"
        >
          Submit Answer
        </Button>
      ) : (
        <Button
          variant="success"
          size="lg"
          onClick={handleNext}
          className="w-full"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      )}
    </motion.div>
  );
}
