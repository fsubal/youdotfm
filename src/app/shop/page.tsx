import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { SectionTitle } from "../../components/SectionTitle";
import { shops } from "../../domains/Shop/seeds";
import { ShopList } from "../../components/ShopList";
import { groupBy } from "../../utils/iterable";
import { ProductListItem } from "../../components/Product/ProductListItem";
import clsx from "clsx";

const shopGroups = groupBy(shops, ({ featured }) =>
  featured ? "featured" : "notFeatured",
);

export default function BuyPage() {
  return (
    <Layout>
      <SectionTitle subheading="Shop">本 &amp; グッズ</SectionTitle>
      <div className={clsx("text-text-500", "my-16")}>
        <p>
          『ユードットエフエム』に関連する商品を紹介します。各種通販サイトで購入できます。
        </p>
      </div>
      <div className="not-prose">
        <div
          className={clsx(
            "grid",
            "screen2:grid-cols-2",
            "screen3:grid-cols-3",
            "gap-24",
          )}
        >
          {products.map((product) => (
            <ProductListItem key={product.slug} product={product} />
          ))}
        </div>
      </div>
      <hr className="my-24" />
      <ShopList
        defaultShops={shopGroups.featured}
        hiddenShops={shopGroups.notFeatured}
      />
    </Layout>
  );
}
