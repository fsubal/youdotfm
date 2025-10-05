import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { VarDump } from "../../components/VarDump";
import { SectionTitle } from "../../components/SectionTitle";
import { shops } from "../../domains/Shop/seeds";
import { ShopList } from "../../components/ShopList";
import { groupBy } from "../../utils/iterable";

const shopGroups = groupBy(shops, ({ featured }) =>
  featured ? "featured" : "notFeatured",
);

export default function BuyPage() {
  return (
    <Layout>
      <SectionTitle subheading="Shop">本 &amp; グッズ</SectionTitle>
      <div>
        <p>
          『ユードットエフエム』に関連する商品を紹介します。各種通販サイトで購入できます。
        </p>
      </div>
      <div className="not-prose">
        {products.map((item) => (
          <VarDump key={item.slug}>{item}</VarDump>
        ))}
        {/* <div
          className={clsx(
            "grid",
            "screen2:grid-cols-2",
            "screen3:grid-cols-3",
            "gap-16",
          )}
        >
        </div> */}
      </div>
      <hr className="my-24" />
      <ShopList
        defaultShops={shopGroups.featured}
        hiddenShops={shopGroups.notFeatured}
      />
    </Layout>
  );
}
