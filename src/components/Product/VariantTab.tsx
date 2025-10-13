"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  getPriceRangeOfVariant,
  ProductKind,
  ProductVariant,
} from "../../domains/Product/model";
import { PriceLabel } from "../PriceLabel";
import { Key, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { ListingLink } from "./ListingLink";
import Link from "next/link";
import { Icon } from "../Icon";

interface Props {
  kind: ProductKind;
  variants: ProductVariant[];
}

export function VariantTab({ kind, variants }: Props) {
  const [vatiantTab, setVariantTab] = useState<Key>(
    // ブラウザバックで戻ってきたとき、前に選んでいたタブを覚えていたらそっちをデフォルト選択
    () => history.state?.selectedTab ?? variants[0].slug,
  );

  function onSelectionChange(selectedTab: Key) {
    setVariantTab(selectedTab);
    window.history.replaceState({ selectedTab }, "");
  }

  return (
    <Tabs selectedKey={vatiantTab} onSelectionChange={onSelectionChange}>
      <TabList
        className={clsx("flex", "screen2:inline-flex")}
        aria-label="商品バリエーションを選択"
      >
        {variants.map((variant) => (
          <Tab
            key={variant.slug}
            id={variant.slug}
            className={clsx(
              "flex-1",
              "rounded-full",
              "overflow-hidden",
              "focus:outline-active",
            )}
          >
            {({ isSelected }) => (
              <div
                className={clsx(
                  "flex",
                  "justify-center",
                  "items-baseline",
                  "w-full",
                  "cursor-pointer",
                  "screen2:px-40",
                  "py-8",
                  "screen2:py-12",
                  "whitespace-nowrap",
                  isSelected && ["bg-active/50"],
                  "active:bg-active",
                  "text-text-500",
                  "text-sm",
                  "screen2:text-base",
                )}
              >
                <strong>{variant.name}</strong>
                <wbr />
                <span className="text-xs">を購入する</span>
              </div>
            )}
          </Tab>
        ))}
      </TabList>

      {variants.map((variant) => (
        <TabPanel key={variant.slug} id={variant.slug}>
          <CurrentVariant kind={kind} variant={variant} />
        </TabPanel>
      ))}
    </Tabs>
  );
}

const sidenoteStyle = clsx(
  "text-xs",
  "text-text-500",
  "flex",
  "justify-center",
  "screen2:justify-start",
  "before:content-['※_']",
);

export function CurrentVariant({
  kind,
  variant,
}: {
  kind: ProductKind;
  variant: ProductVariant;
}) {
  return (
    <div className="my-16">
      <div
        className={clsx(
          "flex",
          "justify-center",
          "screen2:justify-start",
          "items-baseline",
          "gap-4",
          "screen2:mb-4",
        )}
      >
        {variant.listings.length === 1 && <span>定価</span>}
        <PriceLabel className={clsx("text-primary", "font-bold", "text-3xl")}>
          {getPriceRangeOfVariant(variant)}
        </PriceLabel>
        <span>(税込)</span>
      </div>

      {kind === "merch" && (
        <div className={sidenoteStyle}>
          グッズは送料が別途かかる場合があります
        </div>
      )}

      {variant.listings.length > 1 && (
        <div className={sidenoteStyle}>
          価格は販売サイトによって異なる場合があります
        </div>
      )}

      <div
        className={clsx(
          "flex",
          "flex-col",
          "flex-wrap",
          "gap-8",
          "mt-16",
          "mb-16",
        )}
      >
        {variant.listings.map((listing) => (
          <div key={listing.shopKind}>
            <ListingLink listing={listing} />
          </div>
        ))}
      </div>

      {kind === "doujinshi" && (
        <div
          className={clsx("flex", "justify-center", "screen2:justify-start")}
        >
          <Link
            href="/shop#shop-list"
            className={clsx(
              "inline-flex",
              "text-text-500",
              "items-center",
              "text-sm",
              "font-bold",
            )}
          >
            すべての通販・配信サイトを見る
            <Icon
              name="24/Next"
              className="mr-4"
              unsafeNonGuidelineScale={20 / 24}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
