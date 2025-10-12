import z from "zod";
import { Episode } from "../Episode/model";
import { News } from "../News/model";

/**
 * あるエピソードを取り上げているお知らせ
 * たとえば、「1話が雑誌にのりました」「2話がティアズマガジンに紹介されました」などを表現する
 */
export const EpisodeNews = z.object({
  newsId: News.shape.id,
  episodeSlug: Episode.shape.slug,
});

export type EpisodeNews = z.infer<typeof EpisodeNews>;
