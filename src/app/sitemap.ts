import { Temporal } from "@js-temporal/polyfill";
import { MetadataRoute } from "next";

import { BASE_URL } from "../utils/url/internal";
import { episodes } from "../domains/Episode/seeds";
import { characters } from "../domains/Character/seeds";
import { newsFeed } from "../domains/News/seeds";
import { products } from "../domains/Product/seeds";

export const dynamic = "force-static";

function toAbsolutePath(pathname: string) {
  return new URL(pathname, BASE_URL).toString();
}

function formatLastModified(
  date: Temporal.PlainDate | Temporal.ZonedDateTime,
) {
  if (date instanceof Temporal.ZonedDateTime) {
    return date.toPlainDate().toString();
  }

  return date.toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/episodes",
    "/characters",
    "/news",
    "/shop",
    "/terms",
  ].map((pathname) => ({
    url: toAbsolutePath(pathname),
  }));

  const episodeRoutes: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: toAbsolutePath(`/episodes/${episode.slug}`),
  }));

  const characterRoutes: MetadataRoute.Sitemap = characters.map((character) => ({
    url: toAbsolutePath(`/characters/${character.slug}`),
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsFeed.map((news) => ({
    url: toAbsolutePath(`/news/${news.id}`),
    lastModified: formatLastModified(news.datetime),
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: toAbsolutePath(`/shop/products/${product.slug}`),
    lastModified: formatLastModified(product.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...episodeRoutes,
    ...characterRoutes,
    ...newsRoutes,
    ...productRoutes,
  ];
}
