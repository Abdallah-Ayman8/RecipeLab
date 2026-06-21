"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function DropDownMenu({ items }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-600 cursor-pointer hover:-translate-y-1 duration-300 hover:text-black">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 w-115">
        {items?.map((item) => (
          <div key={item.id}>
            <DropdownMenuItem>
              <div className="flex justify-between items-center w-full gap-3 h-16">
                <div>{item?.name}</div>
                <div className="w-16">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    width={310}
                    height={300}
                    loading="eager"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
