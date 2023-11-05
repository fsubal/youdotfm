import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";
import { Icon } from "./Icon";

export function Navbar() {
  return (
    <ul
      data-role="navbar"
      className={clsx(
        "flex",
        "tablet:flex-col",
        ["overflow-x-auto", "overflow-y-hidden"],
        ["snap-x", "snap-mandatory"],
        "w-full",
        "tablet:h-full",
        ["tablet:border-r", "tablet:border-r-slate-100"],
        ["gap-3", "tablet:gap-6"],
        ["py-3", "tablet:py-6", "px-3", "tablet:px-6"]
      )}
    >
      <NavbarItem href="/">
        <Icon name="16/Info" />
        Introduction
      </NavbarItem>
      <NavbarItem href="https://youdotfm.fanbox.cc/" external>
        <Icon name="24/Announcement" unsafe-non-guideline-scale={16 / 24} />
        News
      </NavbarItem>
      <NavbarItem href="/characters">
        <Icon name="24/Person" unsafe-non-guideline-scale={16 / 24} />
        Characters
      </NavbarItem>
      <NavbarItem href="/episodes">
        <Icon name="24/Manga" unsafe-non-guideline-scale={16 / 24} />
        Episodes
      </NavbarItem>
      <NavbarItem href="/books">
        <Icon name="16/Book" />
        Books
      </NavbarItem>
    </ul>
  );
}
