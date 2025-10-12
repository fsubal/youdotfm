import clsx from "clsx";
import { Episode } from "../../domains/Episode/model";
import { simpleFormat } from "../../utils/text";
import { Icon } from "../Icon";
import { findProductsForEpisode } from "../../domains/ProductEpisode/seeds";
import Link from "next/link";
import { ProductKindTagIcon } from "../Product/ProductKindTag";
import { findNewsForEpisode } from "../../domains/EpisodeNews/seeds";
import { NewsKindBadge } from "../News/NewsKind";

interface Props {
  episode: Episode;
}

const relatedLinkStyle = clsx(
  "inline-flex",
  "items-center",
  "underline",
  "text-primary",
  "text-sm",
);

export function EpisodeListItem({ episode }: Props) {
  const products = findProductsForEpisode(episode.slug);
  const relatedNews = findNewsForEpisode(episode.slug);

  return (
    <div
      data-role="episode-list-item"
      className={clsx(
        "flex",
        "flex-col",
        "screen2:flex-row",
        "items-start",
        "gap-24",
        "my-24",
      )}
    >
      <div
        className={clsx(
          "screen2:w-272",
          "screen3:w-440",
          "bg-text-50/50",
          "rounded",
          "relative",
          "border",
          "rounded",
          "overflow-hidden",
        )}
      >
        {episode.images.map((image) => (
          <img
            key={image.src}
            className={clsx(
              "block",
              "w-full",
              "h-full",
              "aspect-[5/4]",
              "screen2:aspect-square",
              "object-cover",
            )}
            src={image.src}
            alt={image.alt}
          />
        ))}

        {episode.pixivArtwork && (
          <div
            className={clsx(
              "absolute",
              "inset-x-0",
              "bottom-0",
              "py-16",
              "flex",
              "justify-center",
              "bg-gradient-to-t",
              "from-white",
              "to-transparent",
            )}
          >
            <a
              className={clsx(
                "whitespace-nowrap",
                ["inline-flex", "justify-center"],
                "rounded-full",
                ["py-8", "px-32"],
                "font-bold",
                "bg-black",
                "text-white",
                "text-sm",
              )}
              href={episode.pixivArtwork.url}
              target="_blank"
              rel="noopener"
            >
              <Icon name="24/Manga" className="mr-4" />
              pixivでサンプルを読む
            </a>
          </div>
        )}
      </div>

      <div className="flex-1">
        <hgroup>
          <a
            href={`/episodes/${episode.slug}#main`}
            className={clsx("flex", "items-center", "mb-8")}
          >
            <span className={clsx("block", "text-lg/tight")}>
              {episode.numbering}
            </span>
            <h2
              className={clsx(
                "font-serif",
                "text-xl/tight",
                "screen2:text-3xl/tight",
              )}
            >
              『{episode.title}』
            </h2>
          </a>
        </hgroup>

        <div
          className={clsx(
            "my-16",
            "text-sm",
            "screen2:text-base",
            "leading-relaxed",
            "tracking-wider",
            "[&_p+p]:mt-16",
          )}
        >
          {simpleFormat(episode.description)}
        </div>

        {products.length > 0 && (
          <div className="mt-24">
            <h3
              className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}
            >
              このエピソードが収録された商品
            </h3>
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/shop/products/${product.slug}#main`}
                className={relatedLinkStyle}
              >
                <ProductKindTagIcon kind={product.kind} />
                {product.title}
              </Link>
            ))}
          </div>
        )}

        {relatedNews.length > 0 && (
          <div className="mt-24">
            <h3
              className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}
            >
              このエピソードに関するお知らせ
            </h3>
            <div className="space-y-8">
              {relatedNews.map((news) => (
                <Link
                  key={news.id}
                  className="block"
                  href={`/news/${news.id}#main`}
                >
                  <NewsKindBadge kind={news.kind} />
                  <span
                    className={clsx(
                      "ml-8",
                      "underline",
                      "text-primary",
                      "text-sm",
                    )}
                  >
                    {news.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
