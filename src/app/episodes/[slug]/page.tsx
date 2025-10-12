import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { episodes, findEpisodeBySlug } from "../../../domains/Episode/seeds";
import { SectionTitle } from "../../../components/SectionTitle";
import clsx from "clsx";
import { ShareLinkContainer } from "../../../components/SocialMedia/ShareButton";
import { getShareText, getShareUrl } from "../../../domains/Episode/model";
import { EpisodeNewsList } from "../../../components/Episode/EpisodeNewsList";
import { EpisodeThumbnail } from "../../../components/Episode/EpisodeThumbnail";
import { RelatedProductList } from "../../../components/Episode/RelatedProductList";
import { findNewsForEpisode } from "../../../domains/EpisodeNews/seeds";
import { findProductsForEpisode } from "../../../domains/ProductEpisode/seeds";
import { simpleFormat } from "../../../utils/text";

export function generateStaticParams(): StaticParams<"/episodes/[slug]"> {
  return episodes.map(({ slug }) => ({ slug }));
}

export default async function EpisodePage({
  params,
}: PageProps<"/episodes/[slug]">) {
  const { slug } = await params;
  const episode = findEpisodeBySlug(slug);
  if (!episode) {
    return notFound();
  }

  const products = findProductsForEpisode(episode.slug);
  const relatedNews = findNewsForEpisode(episode.slug);

  return (
    <Layout>
      <SectionTitle subheading="Episode" backToHref="/episodes">
        {episode.numbering}『{episode.title}』
      </SectionTitle>

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
    </Layout>
  );
}
