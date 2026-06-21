"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FavoritesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    async function fetchRecipes() {
      const results = await Promise.all(
        favorites.map((id) =>
          fetch(`https://dummyjson.com/recipes/${id}`).then((res) =>
            res.json(),
          ),
        ),
      );
      setRecipes(results);
    }
    fetchRecipes();
  }, []);

  if (recipes.length === 0) {
    return (
      <p className="text-stone-600 px-14 py-4 rounded-3xl ring ring-orange-600 shadow-2xl">
        No favorite recipes yet.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {recipes?.map((recipe) => (
        <div key={recipe?.id} className="border rounded-xl p-4">
          <Image
            src={recipe?.image}
            alt={recipe?.name}
            className="w-full h-auto rounded-lg object-cover"
            width={310}
            height={300}
            loading="eager"
          />
          <h2 className="mt-3 font-semibold">{recipe?.name}</h2>
        </div>
      ))}
    </div>
  );
}
