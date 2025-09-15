import "server-only";

import { Episode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";
import { groupBy } from "../../utils/iterable";

export const episodes: Episode[] = seed(Episode, yaml);

const groupedEpisodes = groupBy(episodes, ({ slug }) => slug);

export function findEpisodesBySlugs(...slugs: string[]): Episode[] {
  return slugs.flatMap((slug) => groupedEpisodes[slug] ?? []);
}
