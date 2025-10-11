import z from "zod";
import { ImageSource } from "../ImageSource/model";

/**
 * 販売サイトの区分（多すぎるのでenumでは管理しきれない）
 */
export const ShopKind = z.string().brand<"ShopKind">();

export type ShopKind = z.infer<typeof ShopKind>;

export const Shop = z.object({
  kind: ShopKind,
  name: z.string(),

  /**
   * 全部表示したくないケースで優先的に表示する
   */
  featured: z.boolean().default(false),

  /**
   * ECサイトや配信サービスのロゴ
   * 不明な場合や権利的に使えないケースもあるのでoptional
   */
  logo: ImageSource.optional(),

  /**
   * サークルのページとか、シリーズ全体のページなど（特定商品ではないURL）
   */
  url: z.url(),
});

export type Shop = z.infer<typeof Shop>;

export const isFeatured = (shop: Shop) => shop.featured;
export const isNotFeatured = (shop: Shop) => !shop.featured;
