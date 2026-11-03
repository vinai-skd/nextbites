export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  calories: number;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "creamy-tuscan-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    description:
      "Tender pan-seared chicken cutlets simmered in a luscious garlic cream sauce with sun-dried tomatoes and fresh baby spinach.",
    cuisine: "Italian",
    minutes: 30,
    difficulty: "Easy",
    servings: 4,
    calories: 520,
    tags: ["Dinner", "High-Protein", "Comfort Food"],
  },
  {
    id: "spicy-thai-basil-beef",
    title: "Spicy Thai Basil Beef (Pad Krapow)",
    description:
      "A fast and fiery stir-fry featuring minced beef, birds eye chilies, garlic, and fragrant holy basil, traditionally served over jasmine rice.",
    cuisine: "Thai",
    minutes: 20,
    difficulty: "Easy",
    servings: 2,
    calories: 460,
    tags: ["Quick & Easy", "Spicy", "Stir-Fry"],
  },
  {
    id: "mediterranean-mezze-bowl",
    title: "Mediterranean Mezze Bowl",
    description:
      "A vibrant and refreshing grain bowl layered with crisp cucumbers, cherry tomatoes, kalamata olives, creamy hummus, and herbed feta.",
    cuisine: "Mediterranean",
    minutes: 15,
    difficulty: "Easy",
    servings: 2,
    calories: 380,
    tags: ["Vegetarian", "Healthy", "No-Cook"],
  },
  {
    id: "classic-tonkotsu-ramen",
    title: "Classic Japanese Shoyu Ramen",
    description:
      "Rich umami-packed soy sauce broth with springy ramen noodles, soft-boiled marinated ajitsuke tamago egg, tender chashu, and scallions.",
    cuisine: "Japanese",
    minutes: 45,
    difficulty: "Medium",
    servings: 2,
    calories: 610,
    tags: ["Comfort Food", "Noodles", "Soup"],
  },
  {
    id: "smoky-black-bean-tacos",
    title: "Smoky Chipotle Black Bean Tacos",
    description:
      "Warm corn tortillas filled with spiced black beans, roasted corn salsa, avocado slices, and a zesty cilantro-lime crema drizzle.",
    cuisine: "Mexican",
    minutes: 25,
    difficulty: "Easy",
    servings: 3,
    calories: 340,
    tags: ["Vegetarian", "Gluten-Free", "Tacos"],
  },
  {
    id: "lemon-herb-butter-salmon",
    title: "French Lemon Herb Butter Salmon",
    description:
      "Crispy-skinned Atlantic salmon fillets basted with fresh dill, garlic, melted lemon herb butter, and roasted asparagus spears.",
    cuisine: "French",
    minutes: 25,
    difficulty: "Easy",
    servings: 2,
    calories: 480,
    tags: ["Seafood", "Keto", "Quick & Easy"],
  },
];
