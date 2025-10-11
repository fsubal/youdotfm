"use client";

import clsx from "clsx";
import { ProductVariant } from "../../domains/Product/model";
import { PriceLabel } from "../PriceLabel";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { ShopPurchaseLink } from "./ListingLink";
import Link from "next/link";

interface Props {
  variants: ProductVariant[];
}

export function VariantTab({ variants }: Props) {
  return (
    <Tabs>
      <TabList className="flex" aria-label="商品バリエーションを選択">
        {variants.map((variant) => (
          <Tab key={variant.slug} id={variant.slug}>
            {({ isSelected }) => (
              <div
                className={clsx(
                  "cursor-pointer",
                  "px-16",
                  "py-8",
                  "rounded",
                  isSelected
                    ? ["border-primary", "bg-active"]
                    : ["border-transparent"],
                  "border-2",
                )}
              >
                {variant.name}
              </div>
            )}
          </Tab>
        ))}
      </TabList>

      {variants.map((variant) => (
        <TabPanel key={variant.slug} id={variant.slug}>
          <PriceLabel>{variant.defaultPrice}</PriceLabel>

          <div className="space-y-8">
            {variant.listings.map((listing) => (
              <div key={listing.shopKind}>
                <ShopPurchaseLink listing={listing} />
              </div>
            ))}

            <Link href="/shop#shop-list">ほかのサイトで購入する</Link>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
