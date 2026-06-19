import Image from "next/image";

export default async function CollectionsPage() {
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
  const recipes = await data.recipes;
  return (
    <>
      <main className="bg-linear-to-r from-white to-orange-50 w-full flex flex-col justify-center items-center">
        <section className="w-full flex flex-col gap-4 font-semibold justify-center items-center h-100 lg:h-80 flex-wrap text-center border-b border-stone-200">
          <h1 className="font-serif text-5xl lg:text-6xl">
            Curated Recipe <em className="text-orange-600">Collections</em>
          </h1>
          <p className="text-stone-700 w-2/3 lg:w-1/2">
            Explore hand-picked recipe collections designed around cuisines,
            lifestyles, occasions, and seasonal flavors. Find your next favorite
            dish faster.
          </p>
        </section>
        <section className="px-4 py-12 w-full bg-linear-to-r from-white to-orange-50 flex flex-wrap gap-5 justify-center items-center">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white flex flex-col justify-center items-center hover:shadow-2xl duration-300 cursor-pointer hover:-translate-y-1 rounded-2xl"
            >
              <div className="rounded-t-2xl">
                <Image
                  className="w-full h-auto rounded-t-2xl"
                  src={recipe.image}
                  alt={recipe.name}
                  width={310}
                  height={210}
                />
              </div>
              <div className="px-2 w-full flex justify-start gap-2 mt-3 text-sm mb-1 font-semibold">
                <p className="px-3 py-1 bg-gray-200 rounded-full">
                  {recipe.tags.at(0)}
                </p>
                <p className="px-3 py-1 bg-gray-200 rounded-full">
                  {recipe.tags.at(1)}
                </p>
              </div>
              <div className="flex flex-col p-3 gap-y-2 w-full">
                <p className="text-stone-950">{recipe.name}</p>
                <div className="flex justify-between items-center w-full">
                  <p className="text-stone-600 text-sm">
                    ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
                  </p>
                  <p className="text-stone-600 text-sm">⭐ {recipe.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
