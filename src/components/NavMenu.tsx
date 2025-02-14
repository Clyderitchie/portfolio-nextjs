"use client";

import { useSession } from "@/app/(main)/SessionProvider";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import { useState } from "react";

interface NavMenuProps {
  className?: string;
}

export default function NavMenu({ className }: NavMenuProps) {
  const { user } = useSession();
  const [isPopoverTopOpen, setIsPopoverTopOpen] = useState(false);

  const handleClick = () => {
    setIsPopoverTopOpen(true);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="fixed bottom-4 right-0 m-3 hidden items-center justify-between px-8 py-3 md:flex">
            <Menu onClick={handleClick} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="mx-4 min-w-fit max-w-64 p-1">
          <div className="flex flex-col items-center">
            <Link href="/projects">
              <h3 className="py-5">Projects</h3>
            </Link>
            <Link href="/about">
              <h3 className="py-5">About</h3>
            </Link>
            <Link href="/resume">
              <h3 className="py-5">Resume</h3>
            </Link>
            <Link href="/contact">
              <h3 className="py-5">Contact</h3>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
