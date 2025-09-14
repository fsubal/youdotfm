import z from "zod";
import { ImageSource } from "../ImageSource/model";
import { OutboundLink } from "../OutboundLink/model";

export const Episode = z.object({
  /**
   * 例: "1", "1_5" などの文字列
   */
  slug: z.string(),

  /**
   * 例: "1話", "1.5話" などの文字列
   */
  numbering: z.string(),
  title: z.string(),
  images: z.array(ImageSource),
  description: z.string(),
  pixivArtworkUrl: OutboundLink.optional(),
});

export type Episode = z.infer<typeof Episode>;
