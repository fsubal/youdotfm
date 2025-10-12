import "server-only";

import { News } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";
import { compareBy } from "../../utils/iterable";

const byIdDesc = compareBy("id", "desc");

export const newsFeed = seed(News, yaml).sort(byIdDesc);

export function findNewsById(id: number) {
  return newsFeed.find((news) => news.id === id);
}
