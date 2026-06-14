// AI Coach logic for teaching and interaction

export interface CoachState {
  currentMoveIndex: number;
  userMoves: string[];
  mistakes: string[];
  completed: boolean;
  accuracy: number;
}

export interface CoachMessage {
  type: "explanation" | "question" | "feedback" | "encouragement" | "error";
  text: string;
  moveNotation?: string;
}

export const aiCoach = {
  // Generate opening explanation
  getOpeningIntroduction(name: string, description: string): CoachMessage {
    return {
      type: "explanation",
      text: `Welcome! Today we will learn the ${name}. ${description}\n\nI will teach you each move step by step. After I explain a move, you must play it on the board before we continue. Let's begin!`,
    };
  },

  // Generate move explanation
  generateMoveExplanation(
    moveNotation: string,
    explanation: string,
    strategicIdea: string
  ): CoachMessage {
    return {
      type: "explanation",
      text: `Now we play ${moveNotation}.\n\n${explanation}\n\nStrategic Idea: ${strategicIdea}\n\nYour turn! Please play ${moveNotation} on the board.`,
      moveNotation,
    };
  },

  // Generate encouraging message after correct move
  generateSuccessMessage(moveNotation: string): CoachMessage {
    const messages = [
      `Excellent! You played ${moveNotation} perfectly! This is exactly right.`,
      `Great job! ${moveNotation} is the correct move. You're learning well!`,
      `Perfect! You found ${moveNotation}. Let's continue to the next move.`,
      `Fantastic! ${moveNotation} is exactly what we need here!`,
    ];
    return {
      type: "encouragement",
      text: messages[Math.floor(Math.random() * messages.length)],
    };
  },

  // Generate error message for incorrect move
  generateErrorMessage(
    attemptedMove: string,
    correctMove: string,
    explanation: string
  ): CoachMessage {
    return {
      type: "error",
      text: `Not quite. You played ${attemptedMove}, but we need to play ${correctMove}.\n\n${explanation}\n\nTry again! Look at the highlighted squares and arrows for guidance.`,
      moveNotation: correctMove,
    };
  },

  // Generate quiz question
  generateQuizQuestion(question: string): CoachMessage {
    return {
      type: "question",
      text: question,
    };
  },

  // Generate completion message
  generateCompletionMessage(accuracy: number): CoachMessage {
    let message = "";
    if (accuracy === 100) {
      message =
        "Perfect! You have memorized this opening completely! You're a star! 🌟";
    } else if (accuracy >= 90) {
      message =
        "Excellent performance! You have a strong understanding of this opening. Keep practicing to reach 100%!";
    } else if (accuracy >= 75) {
      message =
        "Good job! You understand the main ideas. Review the tricky moves to improve your accuracy.";
    } else {
      message =
        "You're learning! Review this opening again tomorrow to strengthen your memory.";
    }

    return {
      type: "feedback",
      text: `Lesson Complete! Your accuracy: ${accuracy}%\n\n${message}`,
    };
  },

  // Generate custom feedback based on mistakes
  generateMistakeFeedback(mistake: string, correctIdea: string): CoachMessage {
    return {
      type: "feedback",
      text: `Common mistake: ${mistake}\n\nRemember: ${correctIdea}`,
    };
  },
};
