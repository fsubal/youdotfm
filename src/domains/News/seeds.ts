import "server-only";

import { News } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const episodes = seed(News, yaml);
