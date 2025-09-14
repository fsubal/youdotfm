import z from "zod";
import { ImageSource } from "../ImageSource/model";

export const Character = z.object({
  slug: z.string(),
  thumbnail: ImageSource,
  portrait: ImageSource,
  fullName: z.object({
    japanese: z.string(),
    roman: z.string(),
  }),
  profile: z.string(),
});

export type CharacterType = z.infer<typeof Character>;
