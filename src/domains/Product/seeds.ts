import "server-only";

import { Product, ProductEpisode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const products: Product[] = seed(Product, yaml);

export const productEpisodes: ProductEpisode[] = products.flatMap((product) =>
  product.episodes.map((episodeNumbering) => ({
    productSlug: product.slug,
    episodeNumbering,
  })),
);
