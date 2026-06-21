import Image from "next/image";
import Filter from "../Filter/Filter";
import FavBtn from "./FavBtn";

import { ArrowRight } from "lucide-react";

export default async function AllRecipes() {
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
  const recipes = await data.recipes.slice(0, 12);
  return (
    <>
      <main className="px-2 md:px-16 pt-10 bg-linear-to-r from-white pb-30 to-orange-100">
        <Filter />
        <div className="flex flex-wrap justify-center items-center gap-8">
          {recipes?.map((item) => (
            <div
              key={item?.id}
              className="bg-white rounded-2xl mt-8 shadow hover:shadow-xl relative
              hover:-translate-y-0.5 duration-200
              cursor-pointer"
            >
              <FavBtn recipeId={item?.id} />
              <Image
                className="rounded-t-2xl object-cover w-full h-auto"
                src={item?.image}
                alt={item?.name}
                width={310}
                height={200}
                loading="eager"
              />
              <div className="px-2">
                <div className="flex justify-start gap-2 mt-2 text-sm mb-2 font-semibold">
                  <p className="px-3 py-1 bg-gray-200 rounded-full">
                    {item?.tags.at(0)}
                  </p>
                  <p className="px-3 py-1 bg-gray-200 rounded-full">
                    {item?.tags.at(1)}
                  </p>
                </div>
                <h3 className="px-2 font-serif text-stone-950">{item?.name}</h3>
                <div className="mt-2 flex justify-start items-center gap-2 text-sm pb-3 border-b mx-2">
                  <p className="text-stone-600 text-sm">
                    ⏱ {item?.prepTimeMinutes + item?.cookTimeMinutes} mins
                  </p>
                  <p>.</p>
                  <p className="text-stone-600 text-sm">
                    👥 {item?.servings} Servings
                  </p>
                </div>
                <div className="flex justify-between items-center gap-4 pb-3 mt-3 text-sm px-2">
                  <p className="text-orange-600">★★★★★ {item?.rating}</p>
                  <p className="flex justify-baseline text-orange-600">
                    View recipe <ArrowRight />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
