"use client";

import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { getOpeningById } from "@/data/openings";
import { chessUtil } from "@/lib/chessUtil";
import { motion } from "framer-motion";

interface ChessboardBoardProps {
  openingId: string;
  side: "white" | "black";
  currentMoveIndex: number;
  onMoveComplete: (move: string) => void;
  lessonStarted: boolean;
}

interface MoveArrow {
  from: string;
  to: string;
}

interface SquareHighlight {
  square: string;
  type: "source" | "target" | "correct" | "error";
}

export function ChessboardBoard({
  openingId,
  side,
  currentMoveIndex,
  onMoveComplete,
  lessonStarted,
}: ChessboardBoardProps) {
  const opening = getOpeningById(openingId, side);
  const [game, setGame] = useState<Chess | null>(null);
  const [fen, setFen] = useState("");
  const [moveArrows, setMoveArrows] = useState<MoveArrow[]>([]);
  const [squareHighlights, setSquareHighlights] = useState<SquareHighlight[]>([]);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null
  );

  // Initialize game
  useEffect(() => {
    const newGame = chessUtil.createGame();
    setGame(newGame);
    setFen(newGame.fen());
  }, []);

  // Update arrows and highlights when move index changes
  useEffect(() => {
    if (!opening || currentMoveIndex >= opening.mainLine.length) return;

    const currentMove = opening.mainLine[currentMoveIndex];
    const move = currentMove.move;
    const from = move.slice(0, 2);
    const to = move.slice(2, 4);

    // Set move arrow
    setMoveArrows([{ from, to }]);

    // Set square highlights
    const highlights: SquareHighlight[] = [
      { square: from, type: "source" },
      { square: to, type: "target" },
    ];
    setSquareHighlights(highlights);
  }, [currentMoveIndex, opening]);

  // Handle user moves
  const handlePieceClick = (square: string) => {
    if (!game || !lessonStarted) return;

    // For simplicity, we'll use drag and drop instead
    // This is a helper for visual feedback
  };

  const handleMove = (sourceSquare: string, targetSquare: string) => {
    if (!game || !opening || !lessonStarted) return;

    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move) {
      // Valid move
      setGame(gameCopy);
      setFen(gameCopy.fen());
      setLastMove({ from: sourceSquare, to: targetSquare });

      // Get SAN notation
      const sanMove = move.san;
      onMoveComplete(sanMove);
    }
    return false;
  };

  const boardOrientation = side === "white" ? ("white" as const) : ("black" as const);

  const customSquareStyles: { [key: string]: React.CSSProperties } = {};

  // Add highlight styles
  squareHighlights.forEach((highlight) => {
    if (highlight.type === "source") {
      customSquareStyles[highlight.square] = {
        backgroundColor: "rgba(255, 193, 7, 0.4)",
        borderRadius: "50%",n      };
    } else if (highlight.type === "target") {
      customSquareStyles[highlight.square] = {
        backgroundColor: "rgba(76, 175, 80, 0.5)",
        borderRadius: "50%",
      };
    } else if (highlight.type === "correct") {
      customSquareStyles[highlight.square] = {
        backgroundColor: "rgba(76, 175, 80, 0.6)",
      };
    } else if (highlight.type === "error") {
      customSquareStyles[highlight.square] = {
        backgroundColor: "rgba(244, 67, 54, 0.6)",
      };
    }
  });

  // Highlight last move
  if (lastMove) {
    customSquareStyles[lastMove.from] = {
      ...customSquareStyles[lastMove.from],
      backgroundColor: "rgba(150, 150, 250, 0.3)",
    };
    customSquareStyles[lastMove.to] = {
      ...customSquareStyles[lastMove.to],
      backgroundColor: "rgba(150, 150, 250, 0.3)",
    };
  }

  if (!game) return <div className="animate-pulse h-96 bg-slate-300 rounded-lg" />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-white dark:bg-slate-700 p-4 rounded-lg">
        <Chessboard
          position={fen}
          onPieceDrop={handleMove}
          boardOrientation={boardOrientation}
          customSquareStyles={customSquareStyles}
          customArrowColor="rgba(76, 175, 80, 0.8)"
          arePiecesDraggable={lessonStarted}
          customArrows={moveArrows.map((arrow) => [
            arrow.from,
            arrow.to,
          ] as [string, string])}
        />
      </div>

      {/* Move Notation Display */}
      {lessonStarted && opening && currentMoveIndex < opening.mainLine.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Move {currentMoveIndex + 1} of {opening.mainLine.length}
          </div>
          <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">
            {opening.mainLine[currentMoveIndex].san}
          </div>
        </motion.div>
      )}

      {/* Status Messages */}
      {!lessonStarted && (
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-sm">
          Click "Start Lesson" to begin training
        </div>
      )}
    </motion.div>
  );
}
