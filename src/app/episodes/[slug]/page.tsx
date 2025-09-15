import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { episodes, findEpisodeBySlug } from "../../../domains/Episode/seeds";
import { findProductsForEpisode } from "../../../domains/ProductEpisode/seeds";
import { VarDump } from "../../../components/VarDump";

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

  return (
    <Layout>
      <h1>エピソード: {slug}</h1>
      <div>WIP</div>
      <VarDump>{episode}</VarDump>
      <VarDump>{products}</VarDump>
    </Layout>
  );
}
