import { Episode } from "../Episode/model";
import { ImageSource } from "../ImageSource/model";

export interface Product {
  /**
   * @example episode_1, recap_1, tote_bag_1 など
   */
  slug: string;
  title: string;

  kind: ProductKind[];
  variants: ProductVariant[];
  images: ImageSource[];
  description: string;
}

export const enum ProductKind {
  Doujinshi = "doujinshi",
  Merch = "merch",
}

/**
 * あるProductのバリエーション。
 * 本の場合は「紙版」「電子版」だし、Tシャツの場合は「Sサイズ」などの区別に使っても良い
 */
export interface ProductVariant {
  slug: string;
  name: string;
}

/**
 * ある商品に収録されている話数
 * たとえば、「総集編というProductに1話が収録されています」などを表現する
 */
export interface ProductEpisode {
  productSlug: Product["slug"];
  episodeNumbering: Episode["numbering"];
}
