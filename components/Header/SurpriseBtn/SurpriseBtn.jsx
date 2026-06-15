"use client";

import { RandomRecipe } from "@/api/api";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SurpriseBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState();
  const pathname = usePathname();
  async function handleSurpriseBtn() {
    const data = await RandomRecipe();
    setItem(data);
    setIsOpen((prev) => !prev);
  }

  function exitPopUpWindow() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button
        type="button"
        className={`${pathname !== "/" ? "hidden" : "flex"} text-sm p-2 px-4 shadow-2xl hover:shadow-orange-600/30 text-white bg-orange-600 hover:bg-orange-700 cursor-pointer duration-200 rounded-full font-bold hover:-translate-y-0.5`}
        onClick={() => handleSurpriseBtn()}
        onTouchMove={() => handleSurpriseBtn()}
      >
        ✦ Surprise Me
      </button>
      {isOpen && (
        <div className="absolute overflow-y-scroll h-125 w-1/2 bg-white -top-1/2 right-1/2 rounded-3xl ring ring-orange-600 translate-1/2">
          <div className="w-full rounded-t-3xl relative">
            <XCircle
              size={35}
              className="absolute top-2 right-4 bg-white text-stone-400 rounded-full cursor-pointer hover:scale-110 duration-300"
              onClick={() => exitPopUpWindow()}
            />
            <Image
              src={item?.image}
              alt={item?.name}
              className="w-full h-72 rounded-t-3xl"
              width={310}
              height={300}
            />
          </div>
          <div className="pt-6 flex justify-between items-center gap-2 p-4">
            <div className="flex justify-center gap-2">
              <p className="bg-stone-300 px-3 rounded-full text-orange-600">
                {item?.tags?.at(0)}
              </p>
              <p className="bg-stone-300 px-3 rounded-full text-orange-600">
                {item?.tags?.at(1)}
              </p>
            </div>
            <div className="text-orange-600 text-xl">★ {item.rating}</div>
          </div>
          <div className="px-4 pt-1">
            <h1 className="font-serif text-xl">{item.name}</h1>
          </div>
          <div className="px-4 pt-1 w-full flex justify-center items-center gap-3">
            <div className="w-1/3 flex flex-col justify-center items-center bg-gray-200 p-3 rounded-xl">
              <em className="font-serif">
                ⏱ {item.prepTimeMinutes + item.cookTimeMinutes}
              </em>
              <p className="text-sm text-stone-400 uppercase">mins</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center bg-gray-200 p-3 rounded-xl">
              <em className="font-serif">👥 {item.servings}</em>
              <p className="text-sm text-stone-400 uppercase">Servings</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center bg-gray-200 p-3 rounded-xl">
              <em className="font-serif">🔥 {item.difficulty}</em>
              <p className="text-sm text-stone-400 uppercase">Difficulty</p>
            </div>
          </div>
          <h1 className="px-4 py-2 font-serif">Instructions</h1>
          <div className="px-4 pb-4 bg-stone-50/50">
            <ul className="px-4">
              {item.instructions.map((instruction) => (
                <li
                  key={instruction}
                  className="w-full list-decimal p-2 text-stone-500"
                >
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
