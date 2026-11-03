import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Hero Header */}
      <section className="mb-10 sm:mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
          <span>✨ Curated Collection</span>
        </div>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50">
          Discover & Cook <span className="text-amber-500">Delicious Recipes</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Explore wholesome meals, quick weeknight wonders, and authentic global
          favorites crafted for home cooks of every skill level.
        </p>
        <div className="mt-4 flex items-center justify-center sm:justify-start gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <span>Showing {recipes.length} recipes</span>
          <span>•</span>
          <span>Refined for home cooks</span>
        </div>
      </section>

      {/* Responsive Recipe Grid */}
      <section
        aria-label="Recipe List"
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]"
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
