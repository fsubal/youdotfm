import { notFound } from "next/navigation";
import { Layout } from "../../../../components/Layout";
import {
  findProductBySlug,
  findProductsByKind,
  products,
} from "../../../../domains/Product/seeds";
import { findEpisodesForProduct } from "../../../../domains/ProductEpisode/seeds";
import { SectionTitle } from "../../../../components/SectionTitle";
import { simpleFormat } from "../../../../utils/text";
import clsx from "clsx";
import Link from "next/link";
import {
  CurrentVariant,
  VariantTab,
} from "../../../../components/Product/VariantTab";
import { formatDate } from "../../../../utils/datetime";
import { ProductBreadCrumb } from "../../../../components/Product/ProductKindTag";
import { ProductThumbnail } from "../../../../components/Product/ProductThumbnail";
import {
  ProductList,
  ProductListItem,
} from "../../../../components/Product/ProductListItem";
import { ShareLinkContainer } from "../../../../components/SocialMedia/ShareButton";
import {
  getKindLabel,
  getShareText,
  getShareUrl,
} from "../../../../domains/Product/model";

export function generateStaticParams(): StaticParams<"/shop/products/[slug]"> {
  return products.map(({ slug }) => ({ slug }));
}

const h2style = clsx("font-serif", "text-xl", "mb-8", "text-text-950");

export default async function ProductPage({
  params,
}: PageProps<"/shop/products/[slug]">) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) {
    return notFound();
  }
  const episodes = findEpisodesForProduct(product.slug);

  const relatedProducts = findProductsByKind(product.kind)
    .filter(
      // 同じ商品は除く
      (related) => related.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <Layout>
      <SectionTitle subheading="Shop" backToHref="/shop">
        {product.title}
      </SectionTitle>

      <div
        className={clsx(
          "flex",
          "flex-col",
          "gap-y-16",
          "screen2:flex-row",
          "screen2:gap-x-40",
          "screen2:gap-y-0",
        )}
      >
        <ProductThumbnail
          className={clsx("screen2:w-272", "screen3:w-440")}
          images={product.images}
        />
        <div className={clsx("flex-1", "text-text-500")}>
          <ProductBreadCrumb product={product} />

          {
            // 選択肢が1個しかないときはタブUIにしない
            product.variants.length === 1 ? (
              <CurrentVariant variant={product.variants[0]} />
            ) : (
              <VariantTab variants={product.variants} />
            )
          }

          <hr />

          <dl className="my-16">
            <dt className={h2style}>発売日</dt>
            <dd className="text-text-950">{formatDate(product.publishedAt)}</dd>
          </dl>

          {episodes.length > 0 && (
            <div className="mt-16">
              <h2 className={h2style}>収録エピソード</h2>
              {episodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/episodes/${episode.slug}#main`}
                  className={clsx("inline-block", "underline", "text-primary")}
                >
                  {episode.numbering}『{episode.title}』
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <h2 className={h2style}>商品説明</h2>
        <div
          className={clsx(
            "text-base",
            "leading-loose",
            "tracking-wider",
            "[&_p+p]:mt-16",
            "[&_br:last-child]:hidden",
          )}
        >
          {simpleFormat(product.description)}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className={h2style}>{getKindLabel(product.kind)}の商品一覧</h2>
          <ProductList>
            {relatedProducts.map((product) => (
              <ProductListItem
                key={product.slug}
                product={product}
                thumbnailFit="contain"
              />
            ))}
          </ProductList>
        </div>
      )}

      <hr className="my-24" />

      <div className="mt-24">
        <h3 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
          この{getKindLabel(product.kind)}を広める
        </h3>
        <ShareLinkContainer
          url={getShareUrl(product)}
          text={getShareText(product)}
        />
      </div>
    </Layout>
  );
}
