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
import { ProductKindTag } from "../../../../components/Product/ProductKindTag";
import { ProductThumbnail } from "../../../../components/Product/ProductThumbnail";

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
        className={clsx(
          "flex",
          "flex-col",
          "gap-y-24",
          "screen2:flex-row",
          "screen2:gap-x-40",
          "screen2:gap-y-0",
        )}
      >
        <ProductThumbnail
          className={clsx("screen2:w-272", "screen3:w-440")}
          images={product.images}
        />
        <div className="flex-1">
          <div>
            {product.kind.map((kind) => (
              <ProductKindTag key={kind} kind={kind} />
            ))}
          </div>

          <VariantTab variants={product.variants} />

          <hr />
          <dl>
            {/* <dt>定価</dt>
            <dd>
              <PriceLabel>{product.defaultPrice}</PriceLabel>
            </dd> */}

            <dt>発売日</dt>
            <dd>{formatDate(product.publishedAt)}</dd>
          </dl>
          <hr />

          {episodes.length > 0 && (
            <div>
              <h2 className={clsx("font-serif", "text-xl")}>収録エピソード</h2>
              {episodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/episodes/${episode.slug}#main`}
                >
                  {episode.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <h2>商品説明</h2>
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
    </Layout>
  );
}
