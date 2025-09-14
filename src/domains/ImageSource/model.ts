import z from "zod";

export const ImageSource = z.object({
  url: z.string(),
  alt: z.string(),
});

export type ImageSource = z.infer<typeof ImageSource>;
