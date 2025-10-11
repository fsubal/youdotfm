import z from "zod";
import { ImageSource } from "../ImageSource/model";

export const Character = z.object({
  slug: z.string().brand<"Character">(),
  thumbnail: ImageSource,
  portrait: ImageSource,
  name: z.object({
    japanese: z.string(),
    roman: z.string(),
    screen: z.string().optional(),
  }),
  profile: z.string(),
});

export type Character = z.infer<typeof Character>;
