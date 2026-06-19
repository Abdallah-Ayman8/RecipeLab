"use client";

import { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function SearchField() {
  const [inputs, setInputs] = useState(null);
  const [item, setItem] = useState(null);

  function searchHandler(e) {
    setInputs(e.currentTarget.value);
  }

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://dummyjson.com/recipes/search?q=${inputs}`,
        );
        const data = await res.json();
        const recipes = data.recipes;
        setItem(recipes);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    fetchRecipe();
  }, [inputs, setItem]);

  return (
    <>
      <input
        type="text"
        className="bg-white border-stone-200 focus:border focus:ring focus:border-orange-600 focus:ring-orange-600/10 outline-none flex-1 py-2 rounded-full flex gap-2 px-4 text-sm placeholder-stone-400 duration-300"
        placeholder="Search recipes..."
        onChange={searchHandler}
      />
      {inputs ? <DropDownMenu items={item} /> : null}
    </>
  );
}
