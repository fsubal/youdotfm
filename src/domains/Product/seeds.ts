import "server-only";

import { Product, ProductKind } from "./model";
import { seed } from "../../utils/seed";

export const products: Product[] = seed(Product, [
  require("./seeds/episode_1.yml").default,
  require("./seeds/episode_1_5.yml").default,
  require("./seeds/episode_2.yml").default,
  require("./seeds/episode_2_5.yml").default,
  require("./seeds/episode_3.yml").default,

  require("./seeds/recap_1.yml").default,

  require("./seeds/tshirt_shiori.yml").default,
  require("./seeds/decochoco.yml").default,
  require("./seeds/totebag.yml").default,
]);

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function findProductsByKind(kind: ProductKind) {
  return products.filter((product) => product.kind === kind);
}
