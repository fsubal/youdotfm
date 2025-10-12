import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { SectionTitle } from "../../components/SectionTitle";
import { shops } from "../../domains/Shop/seeds";
import { ShopList } from "../../components/Shop/ShopList";
import { groupBy } from "../../utils/iterable";
import {
  ProductList,
  ProductListItem,
} from "../../components/Product/ProductListItem";
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
      <div>
        <ProductList>
          {products.map((product) => (
            <ProductListItem key={product.slug} product={product} />
          ))}
        </ProductList>
      </div>
      <hr className="my-24" />
      <ShopList
        defaultShops={shopGroups.featured}
        hiddenShops={shopGroups.notFeatured}
      />
    </Layout>
  );
}
