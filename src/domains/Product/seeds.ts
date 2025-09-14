import "server-only";

import { Product } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const products = seed(Product, yaml);

export const productEpisodes = products.flatMap((product) =>
  product.episodes.map((episodeNumbering) => ({
    productSlug: product.slug,
    episodeNumbering,
  })),
);
