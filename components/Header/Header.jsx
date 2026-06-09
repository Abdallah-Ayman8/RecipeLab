import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 bg-orange-50/90 backdrop-blur-md border border-stone-200">
      <nav className="px-5 flex justify-between items-center">
        <div className="flex flex-1">
          <Link href="#" className="flex items-center gap-3">
            <div className="p-2 bg-orange-600 w-fit rounded-xl">🍽</div>
            <h3 className="text-xl text-stone-950 font-bold">RecipeLab</h3>
          </Link>
        </div>
        <ul className="gap-6 flex-1 hidden lg:flex">
          <Link href="/discover" className="text-orange-600">
            Discover
          </Link>
          <Link
            href="/collection"
            className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600"
          >
            Collection
          </Link>
          <Link
            href="/mealplanner"
            className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600"
          >
            Meal Planner
          </Link>
          <Link
            href="/favorites"
            className="text-stone-600 hover:text-orange-600 active:text-orange-600 duration-200"
          >
            Favorites
          </Link>
        </ul>
        <div className="hidden sm:flex justify-end items-center gap-4 duration-200 flex-1">
          <input
            type="text"
            className="bg-white border-stone-200 focus:border focus:ring focus:border-orange-600
          focus:ring-orange-600/10 outline-none flex-1 py-2 rounded-full flex gap-2 px-4 text-sm
          placeholder-stone-400 duration-300"
            placeholder="Search recipes..."
          />
          <button
            type="button"
            className="hidden sm:flex text-sm p-2 px-4 shadow-2xl hover:shadow-orange-600/30
          text-white bg-orange-600 hover:bg-orange-700 cursor-pointer
          duration-200 rounded-full font-bold hover:-translate-y-0.5"
          >
            ✦ Surprise Me
          </button>
        </div>
      </nav>
    </header>
  );
}
