import z from "zod";
import { OutboundLink } from "../OutboundLink/model";
import { ProductVariant } from "../Product/model";
import { JPYRange, JPYValue } from "../../utils/intl";

/**
 * 販売サイトの区分
 */
export const ShopKind = z.enum([
  "BOOTH",
  "MelonBooks",
  "AmazonKindle",
  "ComicCmoa",
]);

export type ShopKind = z.infer<typeof ShopKind>;

export const Shop = z.object({
  kind: ShopKind,
  name: z.string(),

  /**
   * サークルのページとか、作品の詳細ページなど（特定商品ではないURL）
   */
  url: OutboundLink,
});

export type Shop = z.infer<typeof Shop>;

/**
 * 販売サイトに対する出品
 * たとえば「メロンブックスにはこのProductの紙版というVariantが500円で売っており、このURLで買えます」などを表す
 */
export const ShopListing = z.object({
  shopKind: ShopKind,
  productVariantSlug: ProductVariant.shape.slug,
  price: z.union([JPYValue, JPYRange]),
  url: z.instanceof(URL),
});

export type ShopListing = z.infer<typeof ShopListing>;
