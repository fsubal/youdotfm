import "server-only";

import { Episode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";
import { groupBy } from "../../utils/iterable";

export const episodes: Episode[] = seed(Episode, yaml);

const groupedEpisodes = groupBy(episodes, ({ numbering }) => numbering);

export function findEpisodesByNumberings(...numberings: string[]): Episode[] {
  return numberings.flatMap((numbering) => groupedEpisodes[numbering] ?? []);
}
