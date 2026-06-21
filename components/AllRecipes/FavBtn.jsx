"use client";

import { addFavorite, removeFavorite, isFavorite } from "@/lib/favorites";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FavBtn({ recipeId }) {
  // const [favorite, setFavorite] = useState(isFavorite(recipeId));

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(recipeId));
  }, [recipeId]);

  function toggleFavorite() {
    if (favorite) {
      removeFavorite(recipeId);
      setFavorite(false);
    } else {
      addFavorite(recipeId);
      setFavorite(true);
    }
  }

  return (
    <button
      type="button"
      className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer hover:scale-110 duration-300"
      onClick={toggleFavorite}
    >
      <HeartIcon fill={favorite ? "orange" : "none"} />
    </button>
  );
}
