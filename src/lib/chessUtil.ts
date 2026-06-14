// Chess utilities using chess.js

import { Chess } from "chess.js";

export interface Square {
  file: number; // 0-7 (a-h)
  rank: number; // 0-7 (1-8)
}

export interface Move {
  from: string;
  to: string;
  promotion?: string;
}

export interface BoardPosition {
  fen: string;
  piece?: string;
  square?: string;
}

export const chessUtil = {
  // Create new chess instance
  createGame(): Chess {
    return new Chess();
  },

  // Load FEN position
  loadPosition(fen: string): Chess {
    const game = new Chess();
    game.load(fen);
    return game;
  },

  // Get current FEN
  getFEN(game: Chess): string {
    return game.fen();
  },

  // Make a move
  makeMove(game: Chess, move: Move): boolean {
    const result = game.move(move);
    return result !== null;
  },

  // Get legal moves
  getLegalMoves(game: Chess): any[] {
    return game.moves({ verbose: true });
  },

  // Check if move is legal
  isLegalMove(game: Chess, move: Move): boolean {
    const legalMoves = this.getLegalMoves(game);
    return legalMoves.some(
      (m) => m.from === move.from && m.to === move.to
    );
  },

  // Get piece on square
  getPieceOnSquare(game: Chess, square: string): string | null {
    const board = game.board();
    const file = square.charCodeAt(0) - 97; // a-h to 0-7
    const rank = parseInt(square[1]) - 1; // 1-8 to 0-7
    const piece = board[7 - rank][file];
    return piece ? `${piece.color}${piece.type}` : null;
  },

  // Convert square to coordinates
  squareToCoords(square: string): { x: number; y: number } {
    const file = square.charCodeAt(0) - 97;
    const rank = parseInt(square[1]) - 1;
    return { x: file, y: rank };
  },

  // Convert coordinates to square
  coordsToSquare(x: number, y: number): string {
    const file = String.fromCharCode(97 + x);
    const rank = (y + 1).toString();
    return `${file}${rank}`;
  },

  // Get all moves in algebraic notation
  getMovesSAN(game: Chess): string[] {
    return game.moves({ verbose: false }) as string[];
  },

  // Undo last move
  undoMove(game: Chess): boolean {
    const result = game.undo();
    return result !== null;
  },

  // Reset game
  resetGame(game: Chess): void {
    game.reset();
  },

  // Get move in SAN notation
  getMoveSAN(game: Chess, from: string, to: string): string | null {
    const moves = game.moves({ verbose: true });
    const move = moves.find((m) => m.from === from && m.to === to);
    return move ? move.san : null;
  },
};
