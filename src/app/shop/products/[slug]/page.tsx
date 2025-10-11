import { notFound } from "next/navigation";
import { Layout } from "../../../../components/Layout";
import { findProductBySlug, products } from "../../../../domains/Product/seeds";
import { findEpisodesForProduct } from "../../../../domains/ProductEpisode/seeds";
import { SectionTitle } from "../../../../components/SectionTitle";
import { simpleFormat } from "../../../../utils/text";
import clsx from "clsx";
import Link from "next/link";
import { VariantTab } from "../../../../components/Product/VariantTab";
import { PriceLabel } from "../../../../components/PriceLabel";
import { formatDate } from "../../../../utils/datetime";

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

      <div
        className={clsx("grid", "grid-cols-1", "screen2:grid-cols-3", "gap-40")}
      >
        <div className="col-span-1">
          {product.images.map((image) => (
            <img
              className="max-w-full"
              key={image.src}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div className="col-span-2">
          <dl>
            <dt>定価</dt>
            <dd>
              <PriceLabel>{product.defaultPrice}</PriceLabel>
            </dd>

            <dt>発売日</dt>
            <dd>{formatDate(product.publishedAt)}</dd>
          </dl>
          <hr />
          <VariantTab variants={product.variants} />

          <hr />
        </div>
      </div>

      <div
        className={clsx(
          "text-base",
          "leading-loose",
          "[&_p+p]:mt-16",
          "[&_br:last-child]:hidden",
        )}
      >
        {simpleFormat(product.description)}
      </div>

      {episodes.length > 0 && (
        <div className={clsx("border-t", "pt-24", "mt-40")}>
          <h2 className={clsx("font-serif", "text-xl")}>収録エピソード</h2>
          {episodes.map((episode) => (
            <Link key={episode.slug} href={`/episodes/${episode.slug}#main`}>
              {episode.title}
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
}
