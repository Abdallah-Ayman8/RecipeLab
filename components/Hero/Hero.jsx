import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RightSide from "./RightSide/RightSide";

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
          <Link href={"/collection"}>
            <button
              className="flex justify-center items-center gap-2 px-5 py-2 
            bg-orange-600 rounded-full text-white 
          hover:bg-orange-700 focus:bg-orange-700 cursor-pointer
          hover:shadow-orange-600/30 shadow-2xl hover:-translate-y-0.5 focus:-translate-y-0.5
          duration-200"
            >
              Browse Recipes <ArrowRight />
            </button>
          </Link>
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
        <RightSide />
      </div>
    </main>
  );
}
