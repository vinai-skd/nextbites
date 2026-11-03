import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-black tracking-tight text-zinc-900 transition-opacity hover:opacity-90 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-tr from-amber-500 to-orange-500 text-lg shadow-sm">
            🍳
          </span>
          <span>
            Next<span className="text-amber-500">Bites</span>
          </span>
        </Link>

        {/* Navigation links */}
        <nav aria-label="Main Navigation" className="flex items-center gap-1 sm:gap-4">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-zinc-900"
          >
            Recipes
          </Link>
          <Link
            href="#cuisines"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
          >
            Cuisines
          </Link>
          <Link
            href="#about"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
          >
            About
          </Link>
          <a
            href="#submit"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            + Add Recipe
          </a>
        </nav>
      </div>
    </header>
  );
}
