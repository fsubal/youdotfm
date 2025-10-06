import clsx from "clsx";
import { NavbarItem } from "./NavbarItem";
import { Icon } from "../Icon";
import { defaultCharacter } from "../../domains/Character/seeds";
import Image from "next/image";
import Link from "next/link";

export function LogoOneline() {
  return (
    <hgroup className={clsx("pt-24", "px-24", "mb-3")}>
      <Link
        className={clsx(
          "flex",
          "flex-col",
          "justify-start",
          "items-start",
          "gap-4",
        )}
        href="/"
      >
        <p className={clsx("text-xs", "text-text-500")}>
          ポッドキャスト百合漫画
        </p>
        <Image
          src="/logo_oneline.svg"
          alt="トップに戻る"
          width={160}
          height={18}
          className={clsx("h-[18px]", "w-auto")}
        />
      </Link>
    </hgroup>
  );
}

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
