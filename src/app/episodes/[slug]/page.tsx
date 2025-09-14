import { Layout } from "../../../components/Layout";
import { episodes } from "../../../domains/Episode/seeds";

export function generateStaticParams(): StaticParams<"/episodes/[slug]"> {
  return episodes.map(({ slug }) => ({ slug }));
}

export default async function EpisodePage({
  params,
}: PageProps<"/episodes/[slug]">) {
  const { slug } = await params;

  return (
    <Layout>
      <h1>エピソード: {slug}</h1>
      <div>WIP</div>
    </Layout>
  );
}
