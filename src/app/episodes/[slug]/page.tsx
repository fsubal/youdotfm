import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { episodes, findEpisodeBySlug } from "../../../domains/Episode/seeds";
import { EpisodeListItem } from "../../../components/Episode/EpisodeListItem";
import { SectionTitle } from "../../../components/SectionTitle";
import clsx from "clsx";
import { ShareLinkContainer } from "../../../components/SocialMedia/ShareButton";
import { getShareText, getShareUrl } from "../../../domains/Episode/model";

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

  return (
    <Layout>
      <SectionTitle subheading="Episode" backToHref="/episodes">
        {episode.numbering}『{episode.title}』
      </SectionTitle>

      <EpisodeListItem episode={episode} />

      <div className="mt-24">
        <h3 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
          このエピソードを広める
        </h3>

        <ShareLinkContainer
          url={getShareUrl(episode)}
          text={getShareText(episode)}
        />
      </div>
    </Layout>
  );
}
