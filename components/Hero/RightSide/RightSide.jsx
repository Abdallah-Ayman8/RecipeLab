import Image from "next/image";

export default async function RightSide() {
  const res = await fetch("https://dummyjson.com/recipes");
  if (!res.ok) {
    return;
  }
  const data = await res.json();
  const recipes = data.recipes.slice(0, 3);

  return (
    <>
      {recipes.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded-xl cursor-pointer 
            hover:shadow-2xl focus:shadow-2xl bg-white duration-300"
        >
          <div className="rounded-t-xl w-60 h-fit flex flex-col">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="rounded-t-xl w-full h-auto"
            />
          </div>
          <div className="flex flex-col p-3 gap-y-2">
            <p className="text-stone-950">{item.name}</p>
            <div className="flex justify-between items-center w-full">
              <p className="text-stone-600 text-sm">
                ⏱ {item.prepTimeMinutes + item.cookTimeMinutes} mins
              </p>
              <p className="text-stone-600 text-sm">⭐ {item.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
