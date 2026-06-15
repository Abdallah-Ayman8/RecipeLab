"use client";

import { usePathname } from "next/navigation";

export default function SearchField() {
  const pathname = usePathname();

  return (
    <input
      type="text"
      className={`bg-white border-stone-200 focus:border focus:ring focus:border-orange-600
          focus:ring-orange-600/10 outline-none flex-1 py-2 rounded-full flex gap-2 px-4 text-sm
          placeholder-stone-400 duration-300 ${pathname !== "/" ? "hidden" : "flex"}`}
      placeholder="Search recipes..."
    />
  );
}
