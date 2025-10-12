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
import { ShareLinkContainer } from "../../../../components/SocialMedia/ShareButton";
import {
  getKindLabel,
  getShareText,
  getShareUrl,
} from "../../../../domains/Product/model";
import { RelatedProductList } from "../../../../components/Product/RelatedProductList";
import { MarshmallowLink } from "../../../../components/SocialMedia/MarshmallowLink";
import { ResolvingMetadata } from "next";

export function generateStaticParams(): StaticParams<"/shop/products/[slug]"> {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/shop/products/[slug]">,
  parent: ResolvingMetadata,
) {
  const { slug } = await params;
  const { title } = await parent;
  const product = findProductBySlug(slug)!;

  return {
    title: {
      template: title!.template,
      default: product.title,
    },
  };
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
              <CurrentVariant
                kind={product.kind}
                variant={product.variants[0]}
              />
            ) : (
              <VariantTab kind={product.kind} variants={product.variants} />
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
              <ul className={clsx("space-y-4", "list-inside")}>
                {episodes.map((episode) => (
                  <li key={episode.slug} className="list-disc">
                    <Link
                      href={`/episodes/${episode.slug}#main`}
                      className={clsx("underline", "text-primary")}
                    >
                      {episode.numbering}『{episode.title}』
                    </Link>
                  </li>
                ))}
              </ul>
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
          )}
        >
          {simpleFormat(product.description)}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <RelatedProductList
          kind={product.kind}
          relatedProducts={relatedProducts}
        />
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
        <p className={clsx("text-text-500", "text-sm", "my-8")}>
          公式ハッシュタグ
          <code>#ユードットエフエム</code>での投稿もお待ちしています。
        </p>
      </div>

      <div className="mt-24">
        <h3 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
          届いた商品の感想はこちら
        </h3>
        <MarshmallowLink>マシュマロでメッセージを送る</MarshmallowLink>
      </div>
    </Layout>
  );
}
