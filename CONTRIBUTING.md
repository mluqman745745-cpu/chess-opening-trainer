# Contributing to Chess Opening Trainer

Thank you for your interest in contributing! Here's how you can help.

## Code of Conduct

Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Use a clear, descriptive title
3. Provide detailed reproduction steps
4. Include screenshots if applicable
5. Mention your environment (browser, OS)

### Suggesting Enhancements

1. Check if the enhancement already exists
2. Use a clear, descriptive title
3. Provide detailed description of the feature
4. Explain why it would be useful
5. List possible implementations

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Ensure code follows project style
5. Test thoroughly
6. Commit with clear messages: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request with detailed description

## Development Setup

```bash
git clone https://github.com/yourusername/chess-opening-trainer.git
cd chess-opening-trainer
npm install
npm run dev
```

## Code Style

- Use TypeScript for type safety
- Follow ESLint rules: `npm run lint`
- Format with Prettier: `npx prettier --write .`
- Use meaningful variable names
- Add comments for complex logic
- Write clean, readable code

## Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to...")
- Limit first line to 72 characters
- Reference issues when applicable

Example:
```
Add new Sicilian Defense variation

This adds the Najdorf variation to the Sicilian Defense
with 5 new opening moves and strategic explanations.

Fixes #123
```

## Adding Openings

When adding new openings:

1. Research the opening thoroughly
2. Add to `src/data/openings.ts`
3. Include accurate move sequences (UCI notation)
4. Provide clear explanations
5. Add strategic ideas
6. Include common mistakes
7. Add difficulty rating
8. Test in the application
9. Submit pull request with references

## Testing

Before submitting:

1. Test your changes locally
2. Try on different browsers
3. Test on mobile devices
4. Check dark/light mode
5. Verify localStorage works
6. Ensure no console errors

## Questions?

Feel free to open an issue for clarification or join our community discussions.

Thank you for contributing! 🙏
