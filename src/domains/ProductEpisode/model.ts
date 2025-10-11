import z from "zod";
import { Product } from "../Product/model";
import { Episode } from "../Episode/model";

/**
 * ある商品に収録されている話数
 * たとえば、「総集編というProductに1話が収録されています」などを表現する
 */
export const ProductEpisode = z.object({
  productSlug: Product.shape.slug,
  episodeSlug: Episode.shape.slug,
});

export type ProductEpisode = z.infer<typeof ProductEpisode>;
