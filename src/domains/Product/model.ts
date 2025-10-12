import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { ShopKind } from "../Shop/model";
import { JPYRange, JPYValue } from "../../utils/intl";
import { JapanDate } from "../../utils/datetime";
import { Unreachable } from "../../utils/unreachable";

export const ProductKind = z.enum(["doujinshi", "merch"]);

export const ListingStatus = z.enum([
  "prerelease",
  "available",
  "stockout",
  "discontinued",
]);

/**
 * 販売サイトに対する出品
 * たとえば「メロンブックスにはこのProductの紙版というVariantが500円で売っており、このURLで買えます」などを表す
 */
export const Listing = z.object({
  shopKind: ShopKind,
  price: z.union([JPYValue, JPYRange]),
  url: z.string(),

  /**
   * @enum {string} 販売状況
   * - 'prerelease' - 発売前
   * - 'available' - 販売中
   * - 'stockout' - 在庫切れ
   * - 'discontinued' - 販売終了
   */
  status: ListingStatus.default(ListingStatus.enum.available),
});

/**
 * あるProductのバリエーション。
 * 本の場合は「紙版」「電子版」だし、Tシャツの場合は「Sサイズ」などの区別に使っても良い
 */
export const ProductVariant = z.object({
  slug: z.string().brand<"ProductVariant">(),
  name: z.string(),

  /**
   * どのショップで売っているか
   * ショップの数が多いので、全部を載せる必要はない
   */
  listings: z.array(Listing).default([]),
});

/**
 * 1つの商品、たとえば「1つの同人誌（紙版と電子版を束ねたもの）」を表す。
 */
export const Product = z.object({
  /**
   * @example episode_1, recap_1, tote_bag_1 など
   */
  slug: z.string().brand<"Product">(),
  title: z.string(),

  /**
   * @enum {string} 同人誌・グッズの種別
   * - 'doujinshi' - 同人誌
   * - 'merch' - グッズ
   */
  kind: ProductKind,
  variants: z.array(ProductVariant),
  images: z.array(ImageSource).min(1),
  description: z.string(),
  episodes: z.array(z.string()).default([]),
  publishedAt: JapanDate,
});

export type Product = z.infer<typeof Product>;
export type ProductKind = z.infer<typeof ProductKind>;
export type ProductVariant = z.infer<typeof ProductVariant>;
export type Listing = z.infer<typeof Listing>;

export function getShareUrl(product: Pick<Product, "slug">) {
  return new URL(`https://youdot.fm/shop/products/${product.slug}#main`);
}

export function getShareText(product: Product) {
  return `${product.title} - #ユードットエフエム`;
}

export function getKindLabel(kind: ProductKind) {
  switch (kind) {
    case "doujinshi": {
      return "同人誌";
    }
    case "merch": {
      return "グッズ";
    }
    default: {
      Unreachable.assert(kind);
    }
  }
}

function getAllListings(product: Product): Listing[] {
  return product.variants.flatMap(({ listings }) => listings);
}

function getAllListingPriceValue(product: Product): JPYValue[] {
  return getAllListings(product)
    .flatMap(({ price, status }) => (status === "available" ? price : []))
    .filter((jpy) => jpy != null) as JPYValue[];
}

export function getPriceRangeOfProduct(product: Product) {
  const priceValues = getAllListingPriceValue(product);

  const minPrice = Math.min(...priceValues);
  const maxPrice = Math.max(...priceValues);

  if (minPrice === maxPrice) {
    return minPrice as JPYValue;
  } else {
    return [minPrice as JPYValue, maxPrice as JPYValue] as JPYRange;
  }
}

export function getMinimumPriceOfProduct(product: Product): JPYRange {
  const priceValues = getAllListingPriceValue(product);

  return [Math.min(...priceValues) as JPYValue];
}

export function getPriceRangeOfVariant(variant: ProductVariant) {
  const priceValues = variant.listings
    .flatMap(({ price, status }) => (status === "available" ? price : []))
    .filter((jpy) => jpy != null) as JPYValue[];

  const minPrice = Math.min(...priceValues);
  const maxPrice = Math.max(...priceValues);

  if (minPrice === maxPrice) {
    return minPrice as JPYValue;
  } else {
    return [minPrice as JPYValue, maxPrice as JPYValue] as JPYRange;
  }
}
