import { groupBy } from "../../utils/iterable";
import { Episode } from "../Episode/model";
import { episodes } from "../Episode/seeds";
import { Product } from "../Product/model";
import { products } from "../Product/seeds";
import { ProductEpisode } from "./model";

const groupedProducts = groupBy(products, ({ slug }) => slug);
const groupedEpisodes = groupBy(episodes, ({ slug }) => slug);

const productEpisodes: ProductEpisode[] = products.flatMap((product) =>
  product.episodes.map((episodeSlug) =>
    ProductEpisode.parse({
      productSlug: product.slug,
      episodeSlug,
    }),
  ),
);

/**
 * ある話数が収録されている商品を探す
 *
 * @param targetSlug 収録されている話数のslug
 */
export function findProductsForEpisode(targetSlug: string): Product[] {
  return productEpisodes.flatMap(({ episodeSlug, productSlug }) =>
    episodeSlug === targetSlug ? groupedProducts[productSlug] : [],
  );
}

/**
 * ある商品に収録されている話数を探す
 *
 * @param targetSlug 商品のslug
 * @returns
 */
export function findEpisodesForProduct(targetSlug: string): Episode[] {
  return productEpisodes.flatMap(({ productSlug, episodeSlug }) =>
    productSlug === targetSlug ? groupedEpisodes[episodeSlug] : [],
  );
}
