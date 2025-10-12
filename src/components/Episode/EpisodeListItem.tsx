import clsx from "clsx";
import { Episode } from "../../domains/Episode/model";
import { simpleFormat } from "../../utils/text";
import { findProductsForEpisode } from "../../domains/ProductEpisode/seeds";
import { findNewsForEpisode } from "../../domains/EpisodeNews/seeds";
import { EpisodeThumbnail } from "./EpisodeThumbnail";
import { RelatedProductList } from "./RelatedProductList";
import { EpisodeNewsList } from "./EpisodeNewsList";

interface Props {
  episode: Episode;
}

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
      <EpisodeThumbnail episode={episode} />

      <div className="flex-1">
        <EpisodeTitle episode={episode} />

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
            <RelatedProductList products={products} />
          </div>
        )}

        {relatedNews.length > 0 && (
          <div className="mt-24">
            <EpisodeNewsList relatedNews={relatedNews} />
          </div>
        )}
      </div>
    </div>
  );
}

function EpisodeTitle({ episode }: { episode: Episode }) {
  return (
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
  );
}
