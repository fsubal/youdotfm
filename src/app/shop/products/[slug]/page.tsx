import { notFound } from "next/navigation";
import { Layout } from "../../../../components/Layout";
import { findProductBySlug, products } from "../../../../domains/Product/seeds";
import { findEpisodesForProduct } from "../../../../domains/ProductEpisode/seeds";
import { VarDump } from "../../../../components/VarDump";
import { SectionTitle } from "../../../../components/SectionTitle";
import { nl2br } from "../../../../utils/nl2br";
import Image from "next/image";

export function generateStaticParams(): StaticParams<"/shop/products/[slug]"> {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({
  params,
}: PageProps<"/shop/products/[slug]">) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  const episodes = findEpisodesForProduct(product.slug);

  return (
    <Layout>
      <SectionTitle subheading="Shop" backToHref="/shop">
        {product.title}
      </SectionTitle>
      {product.images.map((image) => (
        <Image
          key={image.src}
          width={500}
          height={500}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <div>{nl2br(product.description)}</div>
      <VarDump>{product}</VarDump>
      <VarDump>{episodes}</VarDump>
    </Layout>
  );
}
