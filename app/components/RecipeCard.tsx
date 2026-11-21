import React from "react";
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const difficultyColor = {
    Easy: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    Medium: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    Hard: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  }[recipe.difficulty];

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/90 dark:hover:border-amber-700/60">
      <div>
        {/* Header badges: Cuisine & Difficulty */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold tracking-wide text-amber-900 border border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40">
            {recipe.cuisine}
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${difficultyColor}`}
          >
            {recipe.difficulty}
          </span>
        </div>

        {/* Recipe Title */}
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors dark:text-zinc-50 dark:group-hover:text-amber-400">
          {recipe.title}
        </h3>

        {/* Recipe Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {recipe.description}
        </p>

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Meta: Time, Servings, Calories */}
      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-medium">
            <svg
              className="h-4 w-4 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{recipe.minutes} mins</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium">
            <svg
              className="h-4 w-4 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{recipe.servings} servings</span>
          </div>

          <div className="font-medium text-zinc-400 dark:text-zinc-500">
            {recipe.calories} kcal
          </div>
        </div>
      </div>
    </article>
  );
}
