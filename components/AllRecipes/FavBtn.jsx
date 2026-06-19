"use client";

import { HeartHandshakeIcon, HeartIcon } from "lucide-react";
import { useState } from "react";

export default function FavBtn({ recipeId }) {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <button
      data-id={recipeId}
      type="button"
      className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer hover:scale-110 duration-300"
      onClick={() => {
        setIsSelected((prev) => !prev);
      }}
    >
      <HeartIcon />
    </button>
  );
}
