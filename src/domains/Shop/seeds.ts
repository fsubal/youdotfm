import "server-only";

import { Shop } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const shops = seed(Shop, yaml);
