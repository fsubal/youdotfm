import clsx from "clsx";
import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { episodes } from "../../domains/Episode/seeds";
import { EpisodeListItem } from "../../components/Episode/EpisodeListItem";

export default function EpisodesPage() {
  return (
    <Layout>
      <SectionTitle subheading="Episode">エピソード</SectionTitle>

      <div className="divide-y">
        {episodes.map((episode) => (
          <EpisodeListItem key={episode.slug} episode={episode} />
        ))}
      </div>
    </Layout>
  );
}
