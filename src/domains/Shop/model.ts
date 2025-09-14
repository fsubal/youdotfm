import { OutboundLink } from "../OutboundLink/model";
import { ProductVariant } from "../Product/model";

/**
 * 販売サイトの区分
 */
export const enum ShopKind {
  Booth = "BOOTH",
  MelonBooks = "MelonBooks",
  AmazonKindle = "AmazonKindle",
  ComicCmoa = "ComicCmoa",
}

export interface Shop {
  kind: ShopKind;
  name: string;

  /**
   * サークルのページとか、作品の詳細ページなど（特定商品ではないURL）
   */
  url: OutboundLink;
}

/**
 * 販売サイトに対する出品
 * たとえば「メロンブックスにはこのProductの紙版というVariantが500円で売っており、このURLで買えます」などを表す
 */
export interface ShopListing {
  shopKind: ShopKind;
  productVariantSlug: ProductVariant["slug"];
  price: JPY | RangeOf<JPY>;
  url: URL;
}
