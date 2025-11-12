import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { EpisodeJsonLd, JsonLd } from "../../../components/JsonLd";
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
import { MarshmallowLink } from "../../../components/SocialMedia/MarshmallowLink";
import { ResolvingMetadata } from "next";

export function generateStaticParams(): StaticParams<"/episodes/[slug]"> {
  return episodes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/episodes/[slug]">,
  parent: ResolvingMetadata
) {
  const { slug } = await params;
  const { title } = await parent;
  const episode = findEpisodeBySlug(slug)!;

  return {
    title: {
      template: title!.template,
      default: `${episode.numbering}『${episode.title}』`,
    },
  };
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
  const shareUrl = getShareUrl(episode);

  return (
    <Layout>
      <EpisodeJsonLd episode={episode} />
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
          "my-24"
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
              "[&_p+p]:mt-16"
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
            <ShareLinkContainer url={shareUrl} text={getShareText(episode)} />
            <p className={clsx("text-text-500", "text-sm", "my-8")}>
              公式ハッシュタグ
              <code>#ユードットエフエム</code>での投稿もお待ちしています。
            </p>
          </div>

          <div className="mt-24">
            <h3
              className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}
            >
              読んだ感想はこちら
            </h3>
            <MarshmallowLink>マシュマロでメッセージを送る</MarshmallowLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}
