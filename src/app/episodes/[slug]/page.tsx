import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { episodes } from "../../../domains/Episode/seeds";
import { productEpisodes } from "../../../domains/Product/seeds";

export function generateStaticParams(): StaticParams<"/episodes/[slug]"> {
  return episodes.map(({ slug }) => ({ slug }));
}

export default async function EpisodePage({
  params,
}: PageProps<"/episodes/[slug]">) {
  const { slug } = await params;
  const episode = episodes.find((episode) => episode.slug === slug);
  if (!episode) {
    return notFound();
  }

  const products = productEpisodes.filter(
    ({ episodeNumbering }) => episodeNumbering === episode.numbering,
  );

  return (
    <Layout>
      <h1>エピソード: {slug}</h1>
      <div>WIP</div>
      {JSON.stringify(episode)}
      {JSON.stringify(products)}
    </Layout>
  );
}
