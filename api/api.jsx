export async function RandomRecipe() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  const recipes = await data.recipes;
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];

  return recipe;
}

export function filterRecipes(mealType) {
  const filtered = recipes.filter((recipe) =>
    recipe.mealType.includes(mealType),
  );
}
