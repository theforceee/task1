"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import iconMenu from "@images/icon-menu.svg";
import Image from "next/image";

const links = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <div className="xs:hidden p-2">
        <Image
          src={iconMenu}
          width={24}
          height={24}
          alt="menu"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={clsx(
          showMenu ? "!flex" : "hidden",
          "hidden w-full flex-col flex-1 border-gray-500 duration-300 ease-in-out",
          "xs:flex xs:max-w-[20rem] xs:border-r-2",
        )}
      >
        <ul
          role="list"
          className={clsx(
            "p-2 gap-3 flex flex-row w-full text-center",
            "xs:flex-col xs:gap-5 xs:p-5 xs:text-left",
          )}
        >
          {links.map((link, index) => (
            <li key={index} className="w-full flex">
              <Link
                href={link.hash || "#"}
                className={clsx(
                  "w-full font-semibold",
                  "xs:text-gray-500 hover:text-gray-900 duration-200",
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
