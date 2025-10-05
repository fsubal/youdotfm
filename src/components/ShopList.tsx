import clsx from "clsx";
import { Shop } from "../domains/Shop/model";
import { Icon } from "./Icon";

interface Props {
  defaultShops: Shop[];
  hiddenShops: Shop[];
}

const shopLinkContainer = clsx("gap-x-24", "inline-flex", "flex-wrap");
const showMoreButtonClass = clsx(
  "order-2", // `<summary>`を下に表示したい
  "cursor-pointer",
  "bg-surface",
  "active:bg-active",
  "text-text-500",
  "font-bold",
  "w-full",
  "py-12",
  "rounded-full",
  "text-sm",
  "flex",
  "justify-center",
  "items-center",
);

const noteListClass = clsx(
  "text-text-500",
  "text-xs/relaxed",
  "mt-8",
  "list-none",
  "before:content-['※_']",
);

const linkStyle = clsx("text-primary", "underline");

export function ShopList({ defaultShops, hiddenShops }: Props) {
  return (
    <div data-role="shop-list" id="shop-list" className="my-16">
      <h2 className={clsx("flex", "mb-8", "items-center", "text-xl", "flex-1")}>
        通販サイト
      </h2>

      <div className={shopLinkContainer}>
        {defaultShops.map((shop) => (
          <ShopLink key={shop.kind} shop={shop} />
        ))}
      </div>

      {/**
       * ページ内検索の結果アコーディオンが勝手に開閉された際、
       * そのことをReactのステートで管理しているとかえってうまくいかない。
       *
       * そのため、`<details>`の状態には`useState()`を使用しない
       * （し、このファイルは"use client"しない）
       */}
      <details
        className={clsx("w-full", "group", "flex", "flex-col", "gap-8", "mt-8")}
      >
        <div className={shopLinkContainer}>
          {hiddenShops.map((shop) => (
            <ShopLink key={shop.kind} shop={shop} />
          ))}
        </div>

        <summary className={showMoreButtonClass}>
          もっと見る
          <Icon
            name="16/Menu"
            className={clsx("transition-transform", "group-open:rotate-180")}
          />
        </summary>
      </details>

      <ul className="mt-8">
        <li className={noteListClass}>
          電子書籍の配信は
          <a
            href="https://no9.co.jp"
            target="_blank"
            rel="noreferrer"
            className={linkStyle}
          >
            ナンバーナイン様
          </a>
          を使用しています。
        </li>
        <li className={noteListClass}>
          電子書籍は
          <a
            href="https://no9.co.jp/other/faq/591"
            target="_blank"
            rel="noreferrer"
            className={linkStyle}
          >
            「巻」「話」「読み放題」の配信先
          </a>
          のうち、商品ページが確認できたサイトのみを掲載しています。
        </li>
      </ul>
    </div>
  );
}

function ShopLink({ shop }: { shop: Shop }) {
  return (
    <a
      className={clsx(
        "inline-block",
        "text-sm/loose",
        ["text-text-500", "hover:text-text-950"],
        "underline",
      )}
      href={shop.url}
      target="_blank"
      rel="noreferrer"
    >
      {shop.name}
    </a>
  );
}
