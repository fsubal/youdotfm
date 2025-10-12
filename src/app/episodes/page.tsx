import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { episodes } from "../../domains/Episode/seeds";
import { EpisodeListItem } from "../../components/Episode/EpisodeListItem";
import clsx from "clsx";
import { ResolvingMetadata } from "next";

export async function generateMetadata(_: unknown, parent: ResolvingMetadata) {
  const { title } = await parent;

  return {
    title: {
      template: title!.template,
      default: "エピソード一覧",
    },
  };
}

export default function EpisodesPage() {
  return (
    <Layout>
      <SectionTitle subheading="Episode">エピソード</SectionTitle>

      <div className={clsx("flex", "flex-col", "gap-24")}>
        {episodes.map((episode) => (
          <EpisodeListItem key={episode.slug} episode={episode} />
        ))}
      </div>
    </Layout>
  );
}
