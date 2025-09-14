import { Layout } from "../../../components/Layout";

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
