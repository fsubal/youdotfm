import z from "zod";

export const ImageSource = z.object({
  url: z.url(),
  alt: z.string(),
});

export type ImageSource = z.infer<typeof ImageSource>;
