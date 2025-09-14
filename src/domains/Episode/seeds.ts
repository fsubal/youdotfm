import "server-only";

import { Episode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const episodes: Episode[] = seed(Episode, yaml);

const groupedEpisodes: Partial<{ [key: string]: Episode[] }> = Object.groupBy(
  episodes,
  ({ numbering }) => numbering,
);

export function findEpisodesByNumberings(...numberings: string[]): Episode[] {
  return numberings.flatMap((numbering) => groupedEpisodes[numbering] ?? []);
}
