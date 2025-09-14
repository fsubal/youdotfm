import { ImageSource } from "../ImageSource/model";
import { OutboundLink } from "../OutboundLink/model";

export interface Episode {
  slug: string; // "1", "1_5" などの文字列
  numbering: string; // "1話"、"1.5話"などの文字列
  title: string;
  images: ImageSource[];
  description: string;
  pixivArtworkUrl?: OutboundLink;
}
