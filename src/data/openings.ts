// Chess opening database with complete move sequences and explanations

export interface OpeningMove {
  move: string;
  san: string; // Standard Algebraic Notation
  explanation: string;
  strategicIdea: string;
  whyCorrect: string;
  commonMistakes?: string[];
  controlledSquares?: string[];
}

export interface Opening {
  id: string;
  name: string;
  side: "white" | "black";
  category?: string;
  description: string;
  keyIdeas: string[];
  strengths: string[];
  weaknesses: string[];
  mainLine: OpeningMove[];
  commonTraps: string[];
  typicalPlans: string[];
  middlegameThemes: string[];
  difficultyLevel: "beginner" | "intermediate" | "advanced";
}

export const whiteOpenings: Opening[] = [
  {
    id: "ruy-lopez",
    name: "Ruy Lopez (Spanish Opening)",
    side: "white",
    description: "The most popular opening, focusing on central control and piece development.",
    keyIdeas: ["Control the center", "Develop pieces quickly", "Create pressure on e5"],
    strengths: ["Strong central presence", "Active piece play", "Rich strategic content"],
    weaknesses: ["Can lead to closed positions", "Requires good knowledge"],
    mainLine: [
      {
        move: "e2e4",
        san: "e4",
        explanation: "We move the pawn two squares forward to control the center. This is the most popular first move because it:",
        strategicIdea: "Controls d5 and f5, opens lines for the bishop and queen, and supports strong central play.",
        whyCorrect: "Controls two central squares and opens lines for development.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "e7e5",
        san: "e5",
        explanation: "Black mirrors our move to claim the center.",
        strategicIdea: "Black also wants to control the center and prepare for piece development.",
        whyCorrect: "Black controls central squares d4 and f4.",
        controlledSquares: ["d4", "f4"],
      },
      {
        move: "g1f3",
        san: "Nf3",
        explanation: "We develop the knight to f3, which attacks the e5 pawn and controls key squares.",
        strategicIdea: "Develops a piece while attacking Black's center pawn. Knights on f3 and c3 are ideal squares.",
        whyCorrect: "Develops a piece with tempo, attacks e5, and prepares to control the center.",
        controlledSquares: ["d4", "e5", "g5", "h4"],
      },
      {
        move: "b8c6",
        san: "Nc6",
        explanation: "Black develops the knight to defend the e5 pawn and prepare queenside development.",
        strategicIdea: "Develops a piece and defends the center.",
        whyCorrect: "Defends e5 and prepares to develop other pieces.",
        controlledSquares: ["a5", "b4", "d4", "e4"],
      },
      {
        move: "f1b5",
        san: "Bb5",
        explanation: "The bishop moves to b5, pinning the knight on c6 to the king on e8.",
        strategicIdea: "Creates immediate pressure. The knight is pinned and can't move without exposing the king.",
        whyCorrect: "Creates a pin that restricts Black's pieces and puts pressure on the position.",
        controlledSquares: ["a4", "a6", "c6", "d7"],
      },
    ],
    commonTraps: ["Trapped bishop after ...a6 and ...b5", "Losing the bishop pair after ...g6"],
    typicalPlans: ["Exchange on c6 to damage Black's pawn structure", "Pressure f7 with Ng5", "Create weaknesses on kingside"],
    middlegameThemes: ["Pawn breaks with d4 or f4", "Knight jumps to g5 or d5", "Exploitation of the d5 square"],
    difficultyLevel: "beginner",
  },
  {
    id: "italian-game",
    name: "Italian Game",
    side: "white",
    description: "A classical opening emphasizing rapid piece development and central control.",
    keyIdeas: ["Rapid development", "Attack f7", "Central control"],
    strengths: ["Open, tactical positions", "Quick piece development", "Classical attacking chances"],
    weaknesses: ["Black has solid defensive resources", "Can become drawish with accurate play"],
    mainLine: [
      {
        move: "e2e4",
        san: "e4",
        explanation: "Control the center.",
        strategicIdea: "Classical center control.",
        whyCorrect: "Controls d5 and f5.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "e7e5",
        san: "e5",
        explanation: "Black claims the center.",
        strategicIdea: "Mirror strategy for central control.",
        whyCorrect: "Balances the center.",
        controlledSquares: ["d4", "f4"],
      },
      {
        move: "g1f3",
        san: "Nf3",
        explanation: "Develop knight with tempo.",
        strategicIdea: "Attacks e5 and develops a piece.",
        whyCorrect: "Tempo move attacking e5.",
        controlledSquares: ["d4", "e5"],
      },
      {
        move: "b8c6",
        san: "Nc6",
        explanation: "Black defends e5.",
        strategicIdea: "Develops and defends the center.",
        whyCorrect: "Supports central control.",
        controlledSquares: ["d4", "e4"],
      },
      {
        move: "f1c4",
        san: "Bc4",
        explanation: "Develop bishop to attack f7, the weakest square in Black's position.",
        strategicIdea: "Targets f7, which is only defended by the king. This is the key feature of the Italian Game.",
        whyCorrect: "Develops a piece while attacking f7, creating immediate threats.",
        controlledSquares: ["e6", "f7", "d5"],
      },
    ],
    commonTraps: ["...Nd4 trying to trade pieces", "...g6 preparing defensive setup"],
    typicalPlans: ["Attack f7 with Ng5", "Create tactics around f7", "Open lines with d4"],
    middlegameThemes: ["f7 weakness", "Central pawn breaks", "King safety"],
    difficultyLevel: "beginner",
  },
  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    side: "white",
    description: "A solid opening gaining space with d4 and c4, leading to rich middlegame play.",
    keyIdeas: ["Control the center", "Queenside expansion", "Solid position"],
    strengths: ["Solid position", "Space advantage", "Rich strategic battles"],
    weaknesses: ["Sacrifices the c4 pawn", "Requires accurate play"],
    mainLine: [
      {
        move: "d2d4",
        san: "d4",
        explanation: "We start with the queen pawn, controlling the center differently than e4.",
        strategicIdea: "Controls e5 and c5. This move leads to more strategic, closed positions compared to 1.e4.",
        whyCorrect: "Controls central squares and prepares solid development.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "d7d5",
        san: "d5",
        explanation: "Black mirrors our move, fighting for the center.",
        strategicIdea: "Black also wants central squares and a solid position.",
        whyCorrect: "Fights for central control.",
        controlledSquares: ["c4", "e4"],
      },
      {
        move: "c2c4",
        san: "c4",
        explanation: "We offer a pawn! This is the gambit. We sacrifice it to gain space and development.",
        strategicIdea: "We sacrifice the c4 pawn to: (1) control the center, (2) gain space, (3) open the queenside, (4) create tactical opportunities. This is a calculated risk.",
        whyCorrect: "Opens lines and controls the center, making up for the pawn sacrifice with superior development.",
        controlledSquares: ["b5", "d5"],
      },
      {
        move: "e7e6",
        san: "e6",
        explanation: "Black plays solid defense, not taking the pawn immediately.",
        strategicIdea: "Black prepares to develop the bishop and keeps options open.",
        whyCorrect: "Solid defense, preparing development.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "b1c3",
        san: "Nc3",
        explanation: "We develop the knight and support the center.",
        strategicIdea: "Develops a piece, supports d4, and prepares future moves.",
        whyCorrect: "Develops with purpose, supporting the center.",
        controlledSquares: ["b5", "d5", "e4"],
      },
    ],
    commonTraps: ["...dxc4 followed by e3 and Bxc4", "Black falling behind in development"],
    typicalPlans: ["Recapture on d5", "Control the d5 square", "Create pawn breaks"],
    middlegameThemes: ["Control of d5 square", "Pawn breaks e4 or f4", "Queenside play"],
    difficultyLevel: "intermediate",
  },
  {
    id: "london-system",
    name: "London System",
    side: "white",
    description: "A solid system with predictable setup: d4, e3, c4, Nf3, Nc3, Bf4, Be2.",
    keyIdeas: ["Solid setup", "Stable position", "Easy to understand"],
    strengths: ["Easy to learn", "Solid positions", "Less theory to memorize"],
    weaknesses: ["Can be passive", "Limited attacking chances early on"],
    mainLine: [
      {
        move: "d2d4",
        san: "d4",
        explanation: "Start with the central pawn.",
        strategicIdea: "Control the center.",
        whyCorrect: "Controls e5 and c5.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "d7d5",
        san: "d5",
        explanation: "Black plays solidly in the center.",
        strategicIdea: "Mirror strategy for central control.",
        whyCorrect: "Fights for the center.",
        controlledSquares: ["c4", "e4"],
      },
      {
        move: "c2c4",
        san: "c4",
        explanation: "We expand on the queenside.",
        strategicIdea: "Control more space and gain queenside advantage.",
        whyCorrect: "Gains space and creates options.",
        controlledSquares: ["b5", "d5"],
      },
      {
        move: "e7e6",
        san: "e6",
        explanation: "Black prepares development.",
        strategicIdea: "Solid defensive structure.",
        whyCorrect: "Prepares to develop the bishop.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "b1c3",
        san: "Nc3",
        explanation: "We develop the knight to its ideal square.",
        strategicIdea: "Develops a piece while supporting the center.",
        whyCorrect: "Supports d4 and develops a piece.",
        controlledSquares: ["b5", "d5", "e4"],
      },
      {
        move: "f7f6",
        san: "...f6",
        explanation: "Black prepares fianchetto or solid setup.",
        strategicIdea: "Prepares king-side development.",
        whyCorrect: "Supports Black's development plans.",
        controlledSquares: ["e5", "g5"],
      },
      {
        move: "g1f3",
        san: "Nf3",
        explanation: "We develop the knight to f3.",
        strategicIdea: "Develops a piece and prepares to support the center.",
        whyCorrect: "Develops toward the center.",
        controlledSquares: ["d4", "e5", "g5"],
      },
      {
        move: "c8f5",
        san: "...Bf5",
        explanation: "Black develops the bishop.",
        strategicIdea: "Develops a piece to an active square.",
        whyCorrect: "Develops with good placement.",
        controlledSquares: ["g4", "e4"],
      },
      {
        move: "c1f4",
        san: "Bf4",
        explanation: "We develop our bishop to f4, the ideal square in the London System.",
        strategicIdea: "Completes our solid setup. The bishop on f4 supports the d4 pawn and eyes the long diagonal.",
        whyCorrect: "Places the bishop on its ideal square in the system.",
        controlledSquares: ["e5", "e3", "g5"],
      },
    ],
    commonTraps: ["Black pushing ...c5 trying to break the center", "Tactical shots on the long diagonal"],
    typicalPlans: ["Maintain central control", "Create pawn breaks", "Gradual pressure buildup"],
    middlegameThemes: ["Central pawn breaks", "Rook activity", "Gradual improvement of position"],
    difficultyLevel: "beginner",
  },
];

export const blackOpenings: Opening[] = [
  {
    id: "sicilian-defense",
    name: "Sicilian Defense",
    side: "black",
    category: "Against 1.e4",
    description: "The most popular and dynamic response to 1.e4. Black immediately fights for the center.",
    keyIdeas: ["Fight for the center", "Create imbalance", "Active counterplay"],
    strengths: ["Active piece play", "Counter-chances", "Psychologically comfortable"],
    weaknesses: ["Can be theoretically demanding", "Requires knowledge of many variations"],
    mainLine: [
      {
        move: "e2e4",
        san: "e4",
        explanation: "White opens with the king pawn.",
        strategicIdea: "White controls the center.",
        whyCorrect: "White's most popular first move.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "c7c5",
        san: "c5",
        explanation: "We play the Sicilian! Instead of mirroring with ...e5, we attack d4 and fight for the center.",
        strategicIdea: "The Sicilian creates immediate imbalance. We don't allow White a comfortable center and create tactical opportunities. The c-pawn attacks the center and opens lines.",
        whyCorrect: "Creates imbalance, attacks d4 potential, and fights for the center.",
        controlledSquares: ["d4", "b4"],
      },
      {
        move: "g1f3",
        san: "Nf3",
        explanation: "White develops the knight.",
        strategicIdea: "White develops with tempo.",
        whyCorrect: "Develops and attacks e5 if Black plays it.",
        controlledSquares: ["d4", "e5"],
      },
      {
        move: "d7d6",
        san: "d6",
        explanation: "We support the c5 pawn and prepare to develop our pieces.",
        strategicIdea: "This prepares fianchetto or solid development, supporting our c5 pawn.",
        whyCorrect: "Supports the center and prepares development.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "d2d4",
        san: "d4",
        explanation: "White pushes in the center.",
        strategicIdea: "White gains space in the center.",
        whyCorrect: "White controls the center.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "c5d4",
        san: "cxd4",
        explanation: "We capture the pawn, keeping the position balanced.",
        strategicIdea: "We capture to maintain central balance and create an open position.",
        whyCorrect: "Captures and keeps the center.",
        controlledSquares: ["c5"],
      },
    ],
    commonTraps: ["Nd4 fork tricks", "Back rank weaknesses"],
    typicalPlans: ["Develop with ...Nf6 and ...e6", "Create counterplay on queenside", "Prophylactic moves"],
    middlegameThemes: ["Active piece play", "Queenside counterplay", "Tactical opportunities"],
    difficultyLevel: "intermediate",
  },
  {
    id: "french-defense",
    name: "French Defense",
    side: "black",
    category: "Against 1.e4",
    description: "A solid, strategic defense leading to good winning chances for Black.",
    keyIdeas: ["Solid structure", "Control d4", "Strategic counterplay"],
    strengths: ["Solid pawn structure", "Good endgame chances", "Flexibility"],
    weaknesses: ["Can be cramped", "Light squares may be weak"],
    mainLine: [
      {
        move: "e2e4",
        san: "e4",
        explanation: "White opens.",
        strategicIdea: "White's standard center move.",
        whyCorrect: "Controls d5 and f5.",
        controlledSquares: ["d5", "f5"],
      },
      {
        move: "e7e6",
        san: "e6",
        explanation: "We play the French Defense! We prepare to control d5 with ...d5.",
        strategicIdea: "Unlike the Sicilian, we don't immediately attack d4. Instead, we prepare ...d5, controlling the center strategically. This is a solid, strategic approach.",
        whyCorrect: "Prepares strong central control and a solid structure.",
        controlledSquares: ["d5"],
      },
      {
        move: "d2d4",
        san: "d4",
        explanation: "White expands in the center.",
        strategicIdea: "White gains more space.",
        whyCorrect: "Controls the center.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "d7d5",
        san: "d5",
        explanation: "We claim the center! This is the key move of the French Defense.",
        strategicIdea: "We achieve our ideal center setup: we control the center and prepare solid development.",
        whyCorrect: "Establishes excellent central control and a solid position.",
        controlledSquares: ["c4", "e4"],
      },
    ],
    commonTraps: ["Pinned pieces with Bg5", "e5 pawn breaks"],
    typicalPlans: ["Solid defense", "Create counterplay", "Endgame chances"],
    middlegameThemes: ["Control of d4 and e5 squares", "Queenside expansion", "Solid structure"],
    difficultyLevel: "intermediate",
  },
  {
    id: "kings-indian-defense",
    name: "King's Indian Defense",
    side: "black",
    category: "Against 1.d4",
    description: "A flexible, dynamic defense based on fianchetto and counterplay in the center.",
    keyIdeas: ["Fianchetto structure", "Counterplay", "Flexibility"],
    strengths: ["Active piece play", "Fianchetto bishop", "Tactical opportunities"],
    weaknesses: ["Requires accurate play", "Can be cramped initially"],
    mainLine: [
      {
        move: "d2d4",
        san: "d4",
        explanation: "White plays the queen pawn opening.",
        strategicIdea: "White controls the center.",
        whyCorrect: "Controls e5 and c5.",
        controlledSquares: ["c5", "e5"],
      },
      {
        move: "g7g6",
        san: "g6",
        explanation: "We play the fianchetto! We move the g-pawn to prepare to place our bishop on g7, controlling the long diagonal.",
        strategicIdea: "The fianchetto is a powerful setup in the King's Indian. Our bishop will control the long diagonal and support the center. This is a very flexible move.",
        whyCorrect: "Prepares fianchetto with the powerful g7 bishop.",
        controlledSquares: ["f7"],
      },
      {
        move: "c2c4",
        san: "c4",
        explanation: "White expands on the queenside.",
        strategicIdea: "White gains more space.",
        whyCorrect: "Controls the queenside.",
        controlledSquares: ["b5", "d5"],
      },
      {
        move: "f8g7",
        san: "Bg7",
        explanation: "We fianchetto our bishop! The bishop on g7 is powerful, controlling the long diagonal toward a1.",
        strategicIdea: "This is the key piece of the King's Indian. The long diagonal bishop is very strong and participates actively in the game.",
        whyCorrect: "Completes the fianchetto, placing the bishop on its ideal diagonal.",
        controlledSquares: ["f6", "e5", "d4", "c3", "b2", "a1"],
      },
    ],
    commonTraps: ["e4 break by White", "c5 break by Black"],
    typicalPlans: ["Control the center with ...d6", "Rook lifts", "Queenside counterplay"],
    middlegameThemes: ["Long diagonal control", "Pawn breaks", "Active piece play"],
    difficultyLevel: "intermediate",
  },
];

export function getOpeningById(
  id: string,
  side: "white" | "black"
): Opening | undefined {
  const openings = side === "white" ? whiteOpenings : blackOpenings;
  return openings.find((o) => o.id === id);
}

export function getAllOpenings(): Opening[] {
  return [...whiteOpenings, ...blackOpenings];
}
