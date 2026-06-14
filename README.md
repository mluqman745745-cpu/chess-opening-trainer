# Chess Opening Trainer 🎯

An interactive, AI-powered Chess Opening Trainer website built with Next.js, React, and TypeScript. Learn chess openings step-by-step with an AI coach that teaches through conversation, forces you to practice each move, and uses spaced repetition for maximum retention.

## ✨ Features

### 📚 Comprehensive Opening Library
- **20+ White Openings**: Ruy Lopez, Italian Game, Queen's Gambit, London System, Catalan, and more
- **20+ Black Defenses**: Sicilian Defense, French Defense, King's Indian Defense, and more
- Each opening includes:
  - Move-by-move explanations
  - Strategic ideas and concepts
  - Common mistakes and traps
  - Typical plans and middlegame themes

### 🤖 AI Coach Bot
- **Natural Language Teaching**: Explains every move with clear, beginner-friendly language
- **Interactive Move Practice**: Forces users to practice each move before continuing
- **Smart Feedback**: 
  - Explains why a move is correct
  - Corrects wrong moves with strategic reasoning
  - Provides encouragement and motivation
- **Progressive Learning**: Guides users from opening introduction through move completion

### 🎮 Interactive Chess Board
- **Drag & Drop Pieces**: Smooth, responsive piece movement
- **Visual Guidance**:
  - Green arrows showing the correct move
  - Highlighted source and target squares
  - Move notation display
- **Touch Support**: Full mobile compatibility
- **Board Orientation**: Flips automatically based on chosen side (White/Black)
- **Move Validation**: Only legal moves are accepted

### 📊 Spaced Repetition System
- **Smart Scheduling**: Automatically schedules reviews based on performance
- **Review Intervals**: 1, 3, 7, 14, and 30-day intervals
- **Progress Tracking**: Remembers:
  - Completed lessons
  - Accuracy percentage
  - Mistakes made
  - Last practice date
  - Review count
- **Due Reviews Dashboard**: Shows which openings need practice

### 📈 Progress Dashboard
- **Statistics Tracking**:
  - Lessons completed
  - Average accuracy
  - Daily streak
  - Due reviews
  - Total practice time
- **Recent Lessons**: See your latest training sessions
- **Performance Analytics**: Track improvement over time

### 🎓 Learning Levels
- **Beginner**: Simple explanations, fundamental concepts
- **Intermediate**: Strategic depth, tactical ideas
- **Advanced**: Theory, move-order nuances, transpositions

### 🌓 Modern UI
- **Dark/Light Mode**: Toggle between themes
- **Mobile-First Design**: Fully responsive on all devices
- **Smooth Animations**: Framer Motion for delightful interactions
- **Clean Typography**: Professional, easy-to-read interface
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful SVG icons

### Chess
- **chess.js**: Chess logic and move validation
- **react-chessboard**: Interactive chess board component

### State Management & Storage
- **Zustand**: (Optional) Lightweight state management
- **Local Storage**: Client-side progress persistence
- **IndexedDB**: (Optional) Advanced data storage

### Development
- **TypeScript**: Static type checking
- **ESLint**: Code quality
- **Prettier**: Code formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chess-opening-trainer.git
   cd chess-opening-trainer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📖 How It Works

### Step 1: Choose Your Path
- Select "Learn as White" or "Learn as Black"
- Choose from comprehensive opening list

### Step 2: Opening Introduction
- AI Coach explains the opening
- Learn the main ideas and strategies
- Understand what makes the opening strong/weak

### Step 3: Move-by-Move Training
1. Coach explains the next move
2. Coach shows strategic ideas
3. You play the move on the board
4. Coach corrects mistakes if needed
5. Move to the next position

### Step 4: Interactive Practice
- **Visual Arrows**: See exactly where pieces move
- **Square Highlights**: Know source and target squares
- **Smart Validation**: Only correct moves are accepted
- **Immediate Feedback**: Get instant coaching feedback

### Step 5: Progress Tracking
- Track accuracy percentage
- Monitor mistakes made
- See completion status
- Review weak points

### Step 6: Spaced Repetition
- System automatically schedules reviews
- Practice when memory is fading
- Maximize long-term retention
- Build muscle memory

## 📁 Project Structure

```
chess-opening-trainer/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── choose-side/        # Side selection
│   │   ├── lesson/             # Lesson pages
│   │   └── dashboard/          # Progress dashboard
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── CoachMessage.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── OpeningButton.tsx
│   │   │   ├── Progress.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── chess/              # Chess-specific components
│   │   │   └── Chessboard.tsx
│   │   ├── quiz/               # Quiz components
│   │   │   └── Quiz.tsx
│   │   ├── dashboard/          # Dashboard components
│   │   │   └── Dashboard.tsx
│   │   ├── layout/             # Layout components
│   │   │   └── Header.tsx
│   │   └── providers.tsx       # Context providers
│   ├── data/
│   │   ├── openings.ts         # Opening database
│   │   └── progress.ts         # Progress storage
│   ├── lib/
│   │   ├── chessUtil.ts        # Chess utilities
│   │   └── aiCoach.ts          # AI coach logic
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 Key Features Explained

### AI Coach System
The AI Coach provides intelligent tutoring through:
- **Explanations**: Clear reasoning for each move
- **Strategic Ideas**: Teaches underlying concepts
- **Feedback**: Corrects mistakes with educational value
- **Encouragement**: Motivates continued learning
- **Adaptive Difficulty**: Adjusts based on performance

### Interactive Board
- Full drag-and-drop support
- Touch-friendly on mobile devices
- Visual feedback for correct/incorrect moves
- Arrow indicators for guidance
- Real-time move validation

### Progress System
- LocalStorage-based persistence
- No backend required
- Automatic review scheduling
- Accuracy tracking
- Mistake recording

### Responsive Design
- Mobile-first approach
- Tablets and desktop optimization
- Touch and mouse support
- Readable on all screen sizes

## 🎓 Learning Content

### White Openings (20+)
1. **Ruy Lopez (Spanish Opening)** - Most popular opening
2. **Italian Game** - Classical development
3. **Scotch Game** - Open, tactical play
4. **Vienna Game** - Aggressive center control
5. **King's Gambit** - Romantic chess
6. **Queen's Gambit** - Solid, strategic
7. **London System** - Easy to learn system
8. **Colle System** - Flexible setup
9. **Catalan Opening** - Long diagonal control
10. **English Opening** - Flexible approach

### Black Defenses (20+)

**Against 1.e4:**
1. **Sicilian Defense** - Most popular response
2. **French Defense** - Solid structure
3. **Caro-Kann Defense** - Rock-solid defense
4. **Scandinavian Defense** - Counterattacking
5. **Alekhine Defense** - Unique approach

**Against 1.d4:**
1. **King's Indian Defense** - Fianchetto setup
2. **Nimzo-Indian Defense** - Flexible
3. **Queen's Indian Defense** - Solid control
4. **Grünfeld Defense** - Dynamic counterplay
5. **Queen's Gambit Declined** - Classical

## 💾 Data Storage

All user progress is stored locally:
- **localStorage**: Progress data, settings
- **No cloud required**: Complete privacy
- **No authentication**: Instant access
- **Automatic syncing**: Data persists across sessions

### Progress Data Structure
```typescript
interface LessonProgress {
  openingId: string;
  side: "white" | "black";
  completedMoves: number;
  totalMoves: number;
  accuracy: number;
  mistakes: string[];
  lastPracticedDate: string;
  timesReviewed: number;
  nextReviewDate: string;
  status: "not-started" | "in-progress" | "completed";
}
```

## 🎨 UI/UX Highlights

- **Intuitive Navigation**: Clear path from home to lessons to dashboard
- **Visual Feedback**: Colors indicate correctness, progress, and status
- **Smooth Animations**: Framer Motion for delightful interactions
- **Dark Mode**: Eye-friendly night learning
- **Responsive Layout**: Works perfectly on phones, tablets, and desktops
- **Accessibility**: Semantic HTML, color contrast ratios

## 🔧 Development

### Adding New Openings

Edit `src/data/openings.ts`:

```typescript
const myOpening: Opening = {
  id: "my-opening",
  name: "My Opening",
  side: "white",
  description: "Description here",
  keyIdeas: ["Idea 1", "Idea 2"],
  strengths: ["Strength 1"],
  weaknesses: ["Weakness 1"],
  mainLine: [
    {
      move: "e2e4",
      san: "e4",
      explanation: "Explanation",
      strategicIdea: "Strategic idea",
      whyCorrect: "Why correct",
    },
  ],
  // ... more fields
};
```

### Customizing AI Coach Messages

Edit `src/lib/aiCoach.ts` to modify coaching feedback and messages.

### Styling Modifications

All styling is in `tailwind.config.js` and component files. Modify colors, animations, and responsive breakpoints as needed.

## 📱 Mobile Optimization

- **Touch Support**: Full touch gestures on mobile
- **Responsive Board**: Chess board scales to screen size
- **Readable Text**: Appropriate font sizes for small screens
- **Fast Loading**: Optimized for slow connections
- **No External APIs**: Works offline after initial load

## 🚀 Performance

- **Next.js Optimization**: Automatic code splitting
- **Image Optimization**: Auto WebP conversion
- **CSS-in-JS**: Tailwind for minimal CSS
- **Tree Shaking**: Unused code removed
- **Fast Refresh**: Instant updates during development

## 📝 Future Enhancements

- [ ] Quiz system with spaced repetition questions
- [ ] Memory test (play entire opening from memory)
- [ ] Opening review screen showing statistics
- [ ] Multiple language support
- [ ] Puzzle training based on opening positions
- [ ] Coach difficulty levels (Beginner/Intermediate/Advanced)
- [ ] Video tutorials for each opening
- [ ] PGN import/export
- [ ] Social features (share progress, compete with friends)
- [ ] Stockfish engine integration for "play against computer"

## 🐛 Known Issues

- None currently known. Please report issues on GitHub.

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal and commercial use.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Chess logic by [chess.js](https://github.com/jhlywa/chess.js)
- Board UI by [react-chessboard](https://www.react-chessboard.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide React](https://lucide.dev/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check existing documentation
- Review code examples

## 🎓 Learning Resources

- [Chess.com Lessons](https://www.chess.com/lessons)
- [Lichess Study](https://lichess.org/study)
- [Opening Theory Guide](https://www.chess.com/openings)

---

**Happy learning! 🎯♟️**

Master chess openings at your own pace with intelligent coaching and spaced repetition.
