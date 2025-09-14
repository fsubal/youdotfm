import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";
import { Icon } from "./Icon";
import { NewBadge } from "./NewBadge";

export function Navbar() {
  return (
    <ul
      data-role="navbar"
      className={clsx(
        ["grid", "grid-cols-2"],
        ["tablet:flex", "tablet:flex-col"],
        "w-full",
        ["gap-12", "tablet:gap-24"],
        ["my-12", "tablet:my-24", "px-12", "tablet:px-6"],
      )}
    >
      <NavbarItem href="/">
        <Icon name="16/Info" />
        Introduction
      </NavbarItem>
      <NavbarItem href="/outbound/fanbox" external>
        <Icon name="24/Announcement" unsafeNonGuidelineScale={16 / 24} />
        Blog (FANBOX)
      </NavbarItem>
      <NavbarItem href="/characters">
        <Icon name="24/Person" unsafeNonGuidelineScale={16 / 24} />
        Characters
      </NavbarItem>
      <NavbarItem href="/episodes">
        <Icon name="24/Manga" unsafeNonGuidelineScale={16 / 24} />
        Episodes
      </NavbarItem>
      <NavbarItem href="/buy">
        <Icon name="24/Shopping" unsafeNonGuidelineScale={16 / 24} />
        Buy
        <NewBadge />
      </NavbarItem>
    </ul>
  );
}
