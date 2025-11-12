import { MetadataRoute } from "next";

import { RelativeURL } from "../utils/url/internal";
import { episodes } from "../domains/Episode/seeds";
import { characters } from "../domains/Character/seeds";
import { newsFeed } from "../domains/News/seeds";
import { products } from "../domains/Product/seeds";

function toAbsolutePath(pathname: string) {
  return new RelativeURL(pathname).toURL().toString();
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
    lastModified: news.datetime.toString(),
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: toAbsolutePath(`/shop/products/${product.slug}`),
    lastModified: product.publishedAt.toString(),
  }));

  return [
    ...staticRoutes,
    ...episodeRoutes,
    ...characterRoutes,
    ...newsRoutes,
    ...productRoutes,
  ];
}
