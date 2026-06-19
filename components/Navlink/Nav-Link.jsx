import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="gap-6 flex-1 hidden lg:flex justify-start items-center">
      <Link href="/" className="text-orange-600">
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
  );
}
