import clsx from "clsx";
import {
  Episode,
  getShareText,
  getShareUrl,
} from "../../domains/Episode/model";
import { simpleFormat } from "../../utils/text";
import { Icon } from "../Icon";
import { findProductsForEpisode } from "../../domains/ProductEpisode/seeds";
import Link from "next/link";
import { ProductKindTagIcon } from "../Product/ProductKindTag";
import { findNewsForEpisode } from "../../domains/EpisodeNews/seeds";
import { NewsKindBadge } from "../News/NewsKind";
import {
  BlueskyShareButton,
  ShareLinkContainer,
  XShareButton,
} from "../SocialMedia/ShareButton";

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
        "gap-24",
        "py-24",
      )}
    >
      <div
        className={clsx(
          "screen2:w-272",
          "screen3:w-440",
          "bg-text-50/50",
          "aspect-[5/4]",
          "screen2:aspect-square",
          "rounded",
        )}
      >
        {episode.images.map((image) => (
          <img
            key={image.src}
            className={clsx("block", "w-full", "h-full", "object-contain")}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>

      <div className="flex-1">
        <hgroup
          className={clsx("flex", "items-center", "mb-16", "screen2:mb-20")}
        >
          <span className={clsx("block", "text-xl/tight")}>
            {episode.numbering}
          </span>
          <h2
            className={clsx(
              "font-serif",
              "text-2xl/tight",
              "screen2:text-3xl/tight",
            )}
          >
            「{episode.title}」
          </h2>
        </hgroup>

        <div
          className={clsx(
            "my-24",
            "text-sm",
            "screen2:text-base",
            "leading-loose",
            "tracking-wider",
            "[&_p+p]:mt-16",
            "[&_br:last-child]:hidden",
          )}
        >
          {simpleFormat(episode.description)}
        </div>

        {episode.pixivArtwork && (
          <a
            className={clsx(
              "flex",
              "screen2:inline-flex",
              "whitespace-nowrap",
              "justify-center",
              "rounded-full",
              "py-12",
              "px-40",
              "font-bold",
              "bg-black",
              "text-white",
            )}
            href={episode.pixivArtwork.url}
            target="_blank"
            rel="noopener"
          >
            <Icon name="24/Manga" className="mr-4" />
            pixivでサンプルを読む
          </a>
        )}

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
            {relatedNews.map((news) => (
              <Link
                key={news.id}
                className={clsx("flex", "gap-8")}
                href={`/news/${news.id}#main`}
              >
                <NewsKindBadge kind={news.kind} />
                <span className={relatedLinkStyle}>{news.title}</span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-24">
          <h3
            className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}
          >
            このエピソードを広める
          </h3>
          <ShareLinkContainer
            url={getShareUrl(episode)}
            text={getShareText(episode)}
          />
        </div>
      </div>
    </div>
  );
}
