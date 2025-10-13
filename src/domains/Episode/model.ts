import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { News } from "../News/model";
import { RelativeURL } from "../../utils/url/internal";

export const Episode = z.object({
  /**
   * 例: "1", "1_5" などの文字列
   */
  slug: z.string().brand<"Episode">(),

  /**
   * 例: "1話", "1.5話", "番外編" などの文字列
   */
  numbering: z.string(),
  title: z.string(),
  images: z.array(ImageSource),
  description: z.string(),
  pixivArtwork: z.object({ url: z.url() }).optional(),

  newsIds: z.array(News.shape.id).default([]),
});

export type Episode = z.infer<typeof Episode>;

export function formatTitle(episode: Episode) {
  return `${episode.numbering}「${episode.title}」`;
}

export function getShareUrl(episode: Pick<Episode, "slug">) {
  return RelativeURL.withDefaultHash(`/episodes/${episode.slug}`).toURL();
}

export function getShareText(episode: Episode) {
  return `${formatTitle(episode)} - #ユードットエフエム`;
}
