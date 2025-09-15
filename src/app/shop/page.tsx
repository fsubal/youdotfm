import clsx from "clsx";
import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { VarDump } from "../../components/VarDump";

export default function BuyPage() {
  return (
    <Layout>
      <h1>商品</h1>
      <p className="lead">
        『ユードットエフエム』に関連する商品を紹介します。各種通販サイトで購入できます。
      </p>

      <div className="not-prose">
        <div
          className={clsx(
            "grid",
            "tablet:grid-cols-2",
            "desktop:grid-cols-3",
            "gap-16",
          )}
        >
          {products.map((item) => (
            <VarDump key={item.slug}>{item}</VarDump>
          ))}
        </div>
      </div>
    </Layout>
  );
}
