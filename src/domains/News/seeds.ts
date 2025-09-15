import "server-only";

import { News } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";
import { compareBy } from "../../utils/iterable";

const byIdDesc = compareBy("id", "desc");

export const newsFeed: News[] = seed(News, yaml).sort(byIdDesc);
