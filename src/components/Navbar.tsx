import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";

export function Navbar() {
  return (
    <ul
      data-role="navbar"
      className={clsx(
        "flex",
        "tablet:flex-col",
        "overflow-auto",
        "w-full",
        "tablet:h-full",
        ["tablet:border-r", "tablet:border-r-slate-100"],
        ["gap-3", "tablet:gap-6"],
        ["py-3", "tablet:py-6", "px-3", "tablet:px-6"]
      )}
    >
      <NavbarItem href="/">Introduction</NavbarItem>
      <NavbarItem href="/news">News</NavbarItem>
      <NavbarItem href="/characters">Characters</NavbarItem>
      <NavbarItem href="/episodes">Episodes</NavbarItem>
      <NavbarItem href="/books">Books</NavbarItem>
    </ul>
  );
}
