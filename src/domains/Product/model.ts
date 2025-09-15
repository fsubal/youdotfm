import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { ShopKind } from "../Shop/model";
import { JPYRange, JPYValue } from "../../utils/intl";

export const ProductKind = z.enum(["doujinshi", "merch"]);

export const Product = z.object({
  /**
   * @example episode_1, recap_1, tote_bag_1 など
   */
  slug: z.string().brand<"Product">(),
  title: z.string(),
  kind: z.array(ProductKind),
  variants: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
    }),
  ),
  images: z.array(ImageSource),
  description: z.string(),
  episodes: z.array(z.string()).default([]),
});

/**
 * あるProductのバリエーション。
 * 本の場合は「紙版」「電子版」だし、Tシャツの場合は「Sサイズ」などの区別に使っても良い
 */
export const ProductVariant = z.object({
  slug: z.string().brand<"ProductVariant">(),
  name: z.string(),

  /**
   * 販売サイトに対する出品
   * たとえば「メロンブックスにはこのProductの紙版というVariantが500円で売っており、このURLで買えます」などを表す
   */
  listings: z
    .array(
      z.object({
        shopKind: ShopKind,
        price: z.union([JPYValue, JPYRange]),
        url: z.string(),
      }),
    )
    .default([]),
});

export type Product = z.infer<typeof Product>;
export type ProductKind = z.infer<typeof ProductKind>;
export type ProductVariant = z.infer<typeof ProductVariant>;

/**
 * ある商品に収録されている話数
 * たとえば、「総集編というProductに1話が収録されています」などを表現する
 */
export const ProductEpisode = z.object({
  productSlug: z.string(),
  episodeSlug: z.string(),
});

export type ProductEpisode = z.infer<typeof ProductEpisode>;
