# Chess Opening Trainer - Development Guide

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

### Data Layer (`src/data/`)
- **openings.ts**: Complete opening database with move sequences
- **progress.ts**: Spaced repetition and progress tracking system

### Logic Layer (`src/lib/`)
- **chessUtil.ts**: Chess.js wrapper utilities
- **aiCoach.ts**: AI coaching message generation

### UI Components (`src/components/`)
- **ui/**: Reusable components (Button, Progress, CoachMessage)
- **chess/**: Chessboard component with arrows and highlighting
- **quiz/**: Quiz system component
- **dashboard/**: Progress dashboard
- **layout/**: Header and navigation

### Pages (`src/app/`)
- **/**: Home page with features
- **/choose-side**: Opening selection
- **/lesson/[side]/[id]**: Interactive lesson page
- **/dashboard**: Progress tracking

## Key Technologies

### Frontend
- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations

### Chess
- **chess.js**: Move validation and game logic
- **react-chessboard**: Interactive board UI

### Storage
- **localStorage**: Progress persistence

## Adding New Openings

Edit `src/data/openings.ts`:

```typescript
const newOpening: Opening = {
  id: "opening-id",
  name: "Opening Name",
  side: "white", // or "black"
  description: "Brief description",
  keyIdeas: [
    "Idea 1",
    "Idea 2",
    "Idea 3",
  ],
  strengths: ["Advantage 1", "Advantage 2"],
  weaknesses: ["Weakness 1"],
  mainLine: [
    {
      move: "e2e4", // UCI notation
      san: "e4", // Standard Algebraic Notation
      explanation: "Explains the move for students",
      strategicIdea: "The key strategic concept",
      whyCorrect: "Why this is the best move",
      controlledSquares: ["d5", "f5"],
    },
    // Add more moves...
  ],
  commonTraps: ["Trap 1", "Trap 2"],
  typicalPlans: ["Plan 1", "Plan 2"],
  middlegameThemes: ["Theme 1", "Theme 2"],
  difficultyLevel: "beginner", // or "intermediate", "advanced"
};
```

## Customizing AI Coach

Edit `src/lib/aiCoach.ts` to modify coaching messages and feedback.

## Styling

- All styles use Tailwind CSS
- Color scheme defined in `tailwind.config.js`
- Dark mode support via `dark:` classes
- Custom animations in `globals.css`

## Building

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Testing

To test locally:
1. Start dev server: `npm run dev`
2. Visit http://localhost:3000
3. Select an opening and start a lesson
4. Play moves on the board
5. Check dashboard for progress tracking

## Debugging

- Use browser DevTools for React debugging
- Check Console for TypeScript errors
- Use `npm run lint` to check code quality

## Performance Tips

- Opening database is loaded client-side (no API calls)
- Progress stored in localStorage (instant access)
- CSS minified by Tailwind
- Images optimized by Next.js
- Code split automatically by Next.js

## Common Issues

### Chessboard not showing
- Ensure react-chessboard is installed: `npm install react-chessboard`
- Check that Chessboard component is properly imported

### Progress not saving
- Check browser localStorage is enabled
- Open DevTools > Application > Storage > LocalStorage
- Verify `chess_opening_trainer_progress` key exists

### Moves not working
- Ensure lessonStarted is true
- Check that piece drag is enabled
- Verify chess.js move validation

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit a pull request

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [chess.js GitHub](https://github.com/jhlywa/chess.js)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## License

MIT
