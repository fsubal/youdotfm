import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { ShopKind } from "../Shop/model";
import { JPYRange, JPYValue } from "../../utils/intl";

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
  kind: z.array(ProductKind),
  variants: z.array(ProductVariant),
  images: z.array(ImageSource),
  description: z.string(),
  episodes: z.array(z.string()).default([]),
});

export type Product = z.infer<typeof Product>;
export type ProductKind = z.infer<typeof ProductKind>;
export type ProductVariant = z.infer<typeof ProductVariant>;
export type Listing = z.infer<typeof Listing>;
