import "server-only";

import { Shop } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";
import { Ordering } from "../../utils/iterable";

export const shops: Shop[] = seed(Shop, yaml).sort((a, b) =>
  a.featured === b.featured
    ? Ordering.Equal
    : a.featured
      ? Ordering.Less
      : Ordering.Greater,
);
