import z from "zod";
import { ImageSource } from "../ImageSource/model";

/**
 * 販売サイトの区分
 */
export const ShopKind = z.enum([
  "Booth",
  "Melonbooks",
  "AmazonKindle",
  "ComicCmoa",
]);

export type ShopKind = z.infer<typeof ShopKind>;

export const Shop = z.object({
  kind: ShopKind,
  name: z.string(),
  logo: ImageSource,

  /**
   * サークルのページとか、シリーズ全体のページなど（特定商品ではないURL）
   */
  url: z.url(),
});

export type Shop = z.infer<typeof Shop>;
