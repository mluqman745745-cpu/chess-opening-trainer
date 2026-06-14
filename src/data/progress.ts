// Store for progress tracking and spaced repetition

export interface LessonProgress {
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

export interface UserProgress {
  userId: string;
  lessonsCompleted: number;
  totalAccuracy: number;
  dailyStreak: number;
  lastActivityDate: string;
  totalPracticeTime: number; // in minutes
  lessonProgress: Record<string, LessonProgress>;
}

const STORAGE_KEY = "chess_opening_trainer_progress";
const USER_KEY = "chess_opening_trainer_user";

export const progressStore = {
  // Get user progress
  getUserProgress(): UserProgress {
    if (typeof window === "undefined") return null as any;
    
    const stored = localStorage.getItem(USER_KEY);
    if (!stored) {
      return {
        userId: `user_${Date.now()}`,
        lessonsCompleted: 0,
        totalAccuracy: 0,
        dailyStreak: 0,
        lastActivityDate: new Date().toISOString(),
        totalPracticeTime: 0,
        lessonProgress: {},
      };
    }
    return JSON.parse(stored);
  },

  // Save user progress
  saveUserProgress(progress: UserProgress): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(USER_KEY, JSON.stringify(progress));
  },

  // Get specific lesson progress
  getLessonProgress(openingId: string): LessonProgress | null {
    if (typeof window === "undefined") return null;
    
    const progress = this.getUserProgress();
    return progress.lessonProgress[openingId] || null;
  },

  // Update lesson progress
  updateLessonProgress(
    openingId: string,
    updates: Partial<LessonProgress>
  ): void {
    if (typeof window === "undefined") return;
    
    const progress = this.getUserProgress();
    progress.lessonProgress[openingId] = {
      ...progress.lessonProgress[openingId],
      ...updates,
      openingId,
    } as LessonProgress;
    this.saveUserProgress(progress);
  },

  // Calculate spaced repetition schedule
  getNextReviewDate(reviewCount: number): string {
    const intervals = [1, 3, 7, 14, 30]; // days
    const days = intervals[Math.min(reviewCount, intervals.length - 1)];
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString().split("T")[0];
  },

  // Get due reviews
  getDueReviews(): LessonProgress[] {
    if (typeof window === "undefined") return [];
    
    const progress = this.getUserProgress();
    const today = new Date().toISOString().split("T")[0];
    
    return Object.values(progress.lessonProgress).filter(
      (lesson) => lesson.nextReviewDate <= today && lesson.status === "completed"
    );
  },

  // Clear all progress (for testing)
  clearAllProgress(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(USER_KEY);
  },
};
