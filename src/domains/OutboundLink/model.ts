export interface OutboundLink {
  url: URL;
}

export function fromURL(url: URL): OutboundLink {
  return { url };
}

export function toURL(link: OutboundLink): URL {
  return link.url;
}
