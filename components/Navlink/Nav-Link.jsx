import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="gap-6 flex-1 hidden lg:flex justify-start items-center">
      <li>
        <Link href="/" className="text-orange-600">
          Discover
        </Link>
      </li>
      <li>
        <Link
          href="/collections"
          className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600"
        >
          Collection
        </Link>
      </li>
      <li>
        <Link
          href="/mealplanner"
          className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600"
        >
          Meal Planner
        </Link>
      </li>
      <li>
        <Link
          href="/favorites"
          className="text-stone-600 hover:text-orange-600 active:text-orange-600 duration-200"
        >
          Favorites
        </Link>
      </li>
    </ul>
  );
}
