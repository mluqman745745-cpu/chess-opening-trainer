"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="text-blue-500" size={28} />
            <span className="hidden sm:inline">Chess Opening Trainer</span>
            <span className="sm:hidden">Chess Trainer</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
