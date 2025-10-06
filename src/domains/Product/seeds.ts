import "server-only";

import { Product } from "./model";
import { seed } from "../../utils/seed";

export const products: Product[] = seed(Product, [
  require("./seeds/episode_1.yml").default,
]);

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
