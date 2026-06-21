"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="hover:cursor-pointer hover:-rotate-90 duration-300"
        >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 mt-2 mr-4" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/" className="text-orange-600 w-full">
              Discover
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/collection"
              className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600 w-full"
            >
              Collection
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/mealplanner"
              className="text-stone-600 duration-200 hover:text-orange-600 active:text-orange-600 w-full"
            >
              Meal Planner
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/favorites"
              className="text-stone-600 hover:text-orange-600 active:text-orange-600 duration-200 w-full"
            >
              Favorites
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
