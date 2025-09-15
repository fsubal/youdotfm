import clsx from "clsx";
import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { VarDump } from "../../components/VarDump";
import { SectionTitle } from "../../components/SectionTitle";

export default function BuyPage() {
  return (
    <Layout>
      <SectionTitle subheading="Shop">本 &amp; グッズ</SectionTitle>
      <p className="lead">
        『ユードットエフエム』に関連する商品を紹介します。各種通販サイトで購入できます。
      </p>

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
    </Layout>
  );
}
