import { notFound } from "next/navigation";
import { Layout } from "../../../../components/Layout";
import { findProductBySlug, products } from "../../../../domains/Product/seeds";
import { findEpisodesForProduct } from "../../../../domains/ProductEpisode/seeds";
import { SectionTitle } from "../../../../components/SectionTitle";
import { simpleFormat } from "../../../../utils/nl2br";
import clsx from "clsx";
import Link from "next/link";
import { JPY } from "../../../../utils/intl";
import { PriceLabel } from "../../../../components/PriceLabel";

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

      <div className={clsx("flex", "flex-col", "screen2:flex-row", "gap-24")}>
        <div>
          {product.images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
        {product.variants.map((variant) => (
          <div key={variant.slug}>
            {variant.name}（<PriceLabel>{variant.defaultPrice}</PriceLabel>）
          </div>
        ))}
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
      </div>

      {episodes.length > 0 && (
        <div className={clsx("border-t", "pt-24", "mt-40")}>
          <h2>この商品に乗っているエピソード</h2>
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
