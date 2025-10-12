import "server-only";

import { groupBy } from "../../utils/iterable";
import { Episode } from "../Episode/model";
import { episodes } from "../Episode/seeds";
import { newsFeed } from "../News/seeds";
import { EpisodeNews } from "./model";
import { News } from "../News/model";

const groupedNewsFeed = groupBy(newsFeed, ({ id }) => id);
const groupedEpisodes = groupBy(episodes, ({ slug }) => slug);

const episodeNews: EpisodeNews[] = episodes.flatMap((episode) =>
  episode.newsIds.map((newsId) =>
    EpisodeNews.parse({
      episodeSlug: episode.slug,
      newsId,
    }),
  ),
);

/**
 * あるエピソードを紹介しているお知らせを得る
 *
 * @param targetSlug 収録されている話数のslug
 */
export function findNewsForEpisode(targetSlug: Episode["slug"]): News[] {
  return episodeNews.flatMap(({ episodeSlug, newsId }) =>
    episodeSlug === targetSlug ? groupedNewsFeed[newsId] : [],
  );
}

/**
 * あるお知らせで紹介されている話数を探す
 *
 * @param targetSlug 商品のslug
 * @returns
 */
export function findEpisodesForNews(targetNewsId: News["id"]): Episode[] {
  return episodeNews.flatMap(({ episodeSlug, newsId }) =>
    newsId === targetNewsId ? groupedEpisodes[episodeSlug] : [],
  );
}
