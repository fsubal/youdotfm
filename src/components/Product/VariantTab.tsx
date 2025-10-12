"use client";

import clsx from "clsx";
import { ProductVariant } from "../../domains/Product/model";
import { PriceLabel } from "../PriceLabel";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { ListingLink } from "./ListingLink";
import Link from "next/link";
import { Icon } from "../Icon";

interface Props {
  variants: ProductVariant[];
}

export function VariantTab({ variants }: Props) {
  return (
    <Tabs>
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
          <CurrentVariant variant={variant} />
        </TabPanel>
      ))}
    </Tabs>
  );
}

export function CurrentVariant({ variant }: { variant: ProductVariant }) {
  return (
    <div className="py-16">
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
        <PriceLabel className={clsx("text-primary", "font-bold", "text-3xl")}>
          {variant.defaultPrice}
        </PriceLabel>
      </div>

      <div
        className={clsx(
          "text-xs",
          "text-text-500",
          "flex",
          "justify-center",
          "screen2:justify-start",
          "before:content-['※_']",
        )}
      >
        価格は販売サイトによって異なる場合があります
      </div>

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

      <div className={clsx("flex", "justify-center", "screen2:justify-start")}>
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
    </div>
  );
}
