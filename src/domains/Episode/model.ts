import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { News } from "../News/model";

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
