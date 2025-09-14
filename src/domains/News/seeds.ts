import "server-only";

import { News } from "./model";
import { byIdDesc, seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const newsFeed: News[] = seed(News, yaml).sort(byIdDesc);
