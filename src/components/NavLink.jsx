"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      className={`${pathname === href ? "text-primary" : ""} font-semibold text-xl`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
