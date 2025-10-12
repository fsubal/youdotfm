import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { episodes } from "../../domains/Episode/seeds";
import { EpisodeListItem } from "../../components/Episode/EpisodeListItem";
import clsx from "clsx";

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
