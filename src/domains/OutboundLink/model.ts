import z from "zod";

export const OutboundLink = z.object({
  url: z.url(),
});

export type OutboundLink = z.infer<typeof OutboundLink>;

export function fromURL(url: URL) {
  return { url };
}

export function toURL(link: OutboundLink) {
  return link.url;
}
