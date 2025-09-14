import "server-only";

import { Episode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const episodes: Episode[] = seed(Episode, yaml);

const groupedEpisodes = episodes.reduce(
  (groups, episode) => {
    const { numbering } = episode;
    if (groups[numbering]) {
      groups[numbering].push(episode);
    } else {
      groups[numbering] = [episode];
    }

    return groups;
  },
  {} as { [key: string]: Episode[] },
);

export function findEpisodesByNumberings(...numberings: string[]): Episode[] {
  return numberings.flatMap((numbering) => groupedEpisodes[numbering] ?? []);
}
