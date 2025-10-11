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
      {
        // 1個しか選択肢がないときはTabを表示しない
        variants.length > 1 && (
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
        )
      }

      {variants.map((variant) => (
        <TabPanel key={variant.slug} id={variant.slug}>
          <PriceLabel>{variant.defaultPrice}</PriceLabel>

          <div className="space-y-8">
            {variant.listings.map((listing) => (
              <div key={listing.shopKind}>
                <ListingLink listing={listing} />
              </div>
            ))}

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
              ほかのサイトで購入する
              <Icon
                name="24/Next"
                className="mr-4"
                unsafeNonGuidelineScale={20 / 24}
              />
            </Link>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}
