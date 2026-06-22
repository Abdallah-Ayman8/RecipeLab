import { slugify } from "@/lib/utils";
import Image from "next/image";

export default async function RecipePage({ params }) {
  const { slug } = await params;

  const res = await fetch("https://dummyjson.com/recipes");
  if (!res.ok) {
    return (
      <main className="flex justify-center items-center px-16 py-12 w-full bg-linear-to-r from-white to-orange-50/50">
        <div className="flex justify-center items-center ring p-4 rounded-full hover:cursor-pointer hover:bg-orange-600 duration-300 hover:ring-stone-600 ring-orange-600">
          <p className="px-16 w-full">couldn&apos;t fetch data</p>
        </div>
      </main>
    );
  }
  const data = await res.json();
  const recipes = data.recipes;

  const recipe = recipes?.find(
    (recipe) => slugify(recipe?.name) === slug
  );

  if (!recipe)
    return (
      <div className="flex justify-center items-center min-h-dvh">
        <p className="px-16 py-3 ring ring-orange-600 duration-300 rounded-3xl shadow-2xl">
          Recipe not found.
        </p>
      </div>
    );

  return (
    <main className="flex justify-center items-center px-2 py-6 w-full flex-wrap flex-col gap-4">
      <h1 className="text-4xl text-stone-600 font-serif">{recipe?.name}</h1>
      <div className="w-100">
        <Image
          src={recipe?.image}
          alt={recipe?.name}
          width={310}
          height={300}
          className="w-full h-auto rounded-3xl"
          loading="eager"
        />
      </div>
      <h2 className="text-2xl text-orange-600">ingredients:</h2>
      <ul className="flex flex-col gap-2 justify-center items-start list-decimal">
        {recipe?.ingredients?.map((ingredient) => (
          <li key={ingredient} className="text-stone-600">
            {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl text-orange-600">instructions:</h2>
      <ul className="flex flex-col gap-2 justify-center items-start list-decimal">
        {recipe?.instructions?.map((instruction) => (
          <li key={instruction} className="text-stone-600">
            {instruction}
          </li>
        ))}
      </ul>
    </main>
  );
}
