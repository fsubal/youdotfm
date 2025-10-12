import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";
import { Icon } from "../Icon";

export function NavbarMenu() {
  return (
    <ul
      className={clsx(
        ["flex", "flex-col"],
        "w-full",
        ["gap-12"],
        ["my-12", "px-12"],
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
        href="/characters"
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
      <div className={clsx("border-t", "py-12")}>
        <NavbarItem
          href="/terms"
          subheading="Terms"
          icon={<Icon name="16/Info" unsafeNonGuidelineScale={20 / 16} />}
        >
          プライバシーポリシー
        </NavbarItem>
      </div>
    </ul>
  );
}
