"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create-Post",
  },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li
              className={` ${
                pathname === link.href ? "text-zinc-900" : "text-zinc-400"
              }`}
              key={link.href}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
