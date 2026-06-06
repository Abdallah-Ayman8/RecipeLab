import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: "1",
    name: "Spaghetti Carbonara",
    time: "25",
    rating: "4.8",
    image: "/images/spaghetti.jpg",
  },
  {
    id: "2",
    name: "Tikka Masala",
    time: "40",
    rating: "4.9",
    image: "/images/Tikka_Masala.jpg",
  },
  {
    id: "3",
    name: "Avocado Toast",
    time: "10",
    rating: "4.5",
    image: "/images/Avocado_Toast.jpg",
  },
];

export default function Hero() {
  return (
    <main
      className="flex-col lg:flex-row bg-linear-to-r from-white to-orange-50
    flex justify-start items-start pt-22 px-16 md:px-45 border-b pb-10 border-stone-200"
    >
      <div className="flex justify-start items-start flex-col w-full lg:w-1/2">
        <p className="text-orange-600">World Flavors Await</p>
        <h1 className="text-4xl md:text-7xl mt-4 font-serif text-stone-950 font-bold">
          Cook with <em className="text-orange-600">confidence</em> & curiosity
        </h1>
        <p className="w-[90%] lg:w-[70%] mt-5 text-stone-600">
          Explore thousands of recipes from every corner of the world. Filter by
          cuisine, time, ingredients — find exactly what you feel like cooking.
        </p>
        <div className="flex justify-center items-baseline gap-4 mt-8">
          <button
            className="flex justify-center items-center gap-2 px-5 py-2 
          bg-orange-600 rounded-full text-white 
          hover:bg-orange-700 focus:bg-orange-700 cursor-pointer
          hover:shadow-orange-600/30 shadow-2xl hover:-translate-y-0.5 focus:-translate-y-0.5
          duration-200"
          >
            Browse Recipes <ArrowRight />
          </button>
          <Link
            href=""
            className="text-stone-600 border-stone-400 border-dashed border-b"
          >
            Watch how it works
          </Link>
        </div>
        <div className="flex justify-start items-center gap-8 font-semibold">
          <div className="flex flex-col mt-15">
            <p className="font-serif text-xl sm:text-2xl text-stone-950">
              12,400+
            </p>
            <p className="text-sm text-stone-400">Recipes</p>
          </div>
          <div className="flex flex-col mt-15">
            <p className="font-serif text-xl sm:text-2xl text-stone-950">85</p>
            <p className="text-sm text-stone-400">Cuisines</p>
          </div>
          <div className="flex flex-col mt-15">
            <p className="font-serif text-xl sm:text-2xl text-stone-950">
              4.9★
            </p>
            <p className="text-sm text-stone-400">Avg Rating</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-8 mb-5 flex gap-5 flex-wrap justify-center items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-xl cursor-pointer 
            hover:shadow-2xl focus:shadow-2xl bg-white duration-300"
          >
            <div className="rounded-t-xl w-72 md:w-50 h-fit flex flex-col">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-t-xl h-40 w-72 md:w-50"
              />
            </div>
            <div className="flex flex-col p-3 gap-y-2">
              <p className="text-stone-950">{item.name}</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-stone-600 text-sm">⏱{item.time}</p>
                <p className="text-stone-600 text-sm">⭐{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
