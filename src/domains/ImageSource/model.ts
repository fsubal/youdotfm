import z from "zod";

export const ImageSource = z.object({
  src: z.string(),
  alt: z.string(),
});

export type ImageSource = z.infer<typeof ImageSource>;
