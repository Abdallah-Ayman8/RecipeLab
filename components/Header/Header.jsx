import Link from "next/link";
import SurpriseBtn from "./SurpriseBtn/SurpriseBtn";
import SearchField from "../Input/SearchField";
import NavLink from "../Navlink/Nav-Link";

export default function Header() {
  return (
    <header className="flex p-3 bg-orange-50/90 backdrop-blur-md border-b border-stone-200">
      <nav className="px-5 flex justify-between items-center w-full">
        <div className="flex flex-1 justify-start items-center">
          <Link href="/" className="flex items-center gap-3">
            <p className="p-2 bg-orange-600 w-fit rounded-xl">🍽</p>
            <h3 className="text-xl text-stone-950 font-bold">RecipeLab</h3>
          </Link>
        </div>
        <NavLink />
        <div className="hidden sm:flex justify-end items-center gap-4 duration-200 flex-1">
          <SearchField />
          <SurpriseBtn />
        </div>
      </nav>
    </header>
  );
}
