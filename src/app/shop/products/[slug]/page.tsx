import { Layout } from "../../../../components/Layout";
import { products } from "../../../../domains/Product/seeds";

export function generateStaticParams(): StaticParams<"/shop/products/[slug]"> {
  return products.map(({ slug }) => ({ slug }));
}

export default async function EpisodePage({
  params,
}: PageProps<"/shop/products/[slug]">) {
  const { slug } = await params;

  return (
    <Layout>
      <h1>エピソード: {slug}</h1>
      <div>WIP</div>
    </Layout>
  );
}
