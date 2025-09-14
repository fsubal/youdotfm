import { notFound } from "next/navigation";
import { Layout } from "../../../../components/Layout";
import { products } from "../../../../domains/Product/seeds";

export function generateStaticParams(): StaticParams<"/shop/products/[slug]"> {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({
  params,
}: PageProps<"/shop/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);
  if (!product) {
    return notFound();
  }

  return (
    <Layout>
      <h1>エピソード: {slug}</h1>
      <div>WIP</div>
    </Layout>
  );
}
