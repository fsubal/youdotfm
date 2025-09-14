import z from "zod";

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
  logo: z.string().optional(),

  /**
   * サークルのページとか、作品の詳細ページなど（特定商品ではないURL）
   */
  url: z.url(),
});

export type Shop = z.infer<typeof Shop>;
