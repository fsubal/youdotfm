import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";
import { Icon } from "./Icon";
import { defaultCharacter } from "../domains/Character/seeds";

export function Navbar() {
  return (
    <ul
      data-role="navbar"
      className={clsx(
        ["grid", "grid-cols-2"],
        ["screen2:flex", "screen2:flex-col"],
        "w-full",
        ["gap-12", "screen2:gap-24"],
        ["my-12", "screen2:my-24", "px-12", "screen2:px-6"],
      )}
    >
      <NavbarItem
        href="/news"
        subheading="News"
        icon={<Icon name="24/Announcement" unsafeNonGuidelineScale={20 / 24} />}
      >
        お知らせ
      </NavbarItem>
      <NavbarItem
        href={`/characters/${defaultCharacter.slug}`}
        subheading="Characters"
        icon={<Icon name="24/Person" unsafeNonGuidelineScale={20 / 24} />}
      >
        キャラクター
      </NavbarItem>
      <NavbarItem
        href="/episodes"
        subheading="Episodes"
        icon={<Icon name="24/Manga" unsafeNonGuidelineScale={20 / 24} />}
      >
        エピソード
      </NavbarItem>
      <NavbarItem
        href="/shop"
        subheading="Shop"
        icon={<Icon name="24/Shopping" unsafeNonGuidelineScale={20 / 24} />}
        isNew
      >
        本&amp;グッズ
      </NavbarItem>
    </ul>
  );
}
