import "server-only";

import { News } from "./model";
import { byIdDesc, seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const news = seed(News, yaml).sort(byIdDesc);
