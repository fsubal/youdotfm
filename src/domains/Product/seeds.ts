import "server-only";

import { Product } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const products: Product[] = seed(Product, yaml);

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
