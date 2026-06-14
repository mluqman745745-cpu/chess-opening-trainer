"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Copy, Check } from "lucide-react";

interface CoachMessageProps {
  message: string;
  type: "explanation" | "question" | "feedback" | "encouragement" | "error";
  moveNotation?: string;
}

const typeStyles = {
  explanation:
    "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-slate-900 dark:text-slate-50",
  question:
    "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-slate-900 dark:text-slate-50",
  feedback:
    "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-slate-900 dark:text-slate-50",
  encouragement:
    "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-slate-900 dark:text-slate-50",
  error:
    "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-slate-900 dark:text-slate-50",
};

const typeIcons = {
  explanation: "🎓",
  question: "❓",
  feedback: "✅",
  encouragement: "🎉",
  error: "⚠️",
};

export function CoachMessage({
  message,
  type,
  moveNotation,
}: CoachMessageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(moveNotation || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`p-4 rounded-lg border ${typeStyles[type]} coach-message-enter`}
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{typeIcons[type]}</span>
          <div className="flex-1">
            <p className="text-sm leading-relaxed">{message}</p>
            {moveNotation && (
              <div className="mt-3 flex items-center gap-2">
                <code className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded text-xs font-mono">
                  {moveNotation}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-slate-300 dark:hover:bg-slate-600 rounded transition-colors"
                  title="Copy move"
                >
                  {copied ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => speak(message)}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors flex-shrink-0"
            title="Listen"
          >
            <Volume2 size={18} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

interface CoachFeedbackProps {
  messages: CoachMessageProps[];
}

export function CoachFeedback({ messages }: CoachFeedbackProps) {
  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {messages.map((msg, idx) => (
        <CoachMessage key={idx} {...msg} />
      ))}
    </div>
  );
}
