"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  icon: ReactNode 
  path: string
}

const NavItem = ({icon, path}: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link href={path}  className="w-full flex justify-center">
      <span className={pathName === path ? "rounded-md bg-orange-300 w-10/12 flex justify-center transition-colors transition-all duration-300" : "w-10/12 py-2"}>
        {icon}
      </span>
    </Link>
  )
};


export default NavItem;