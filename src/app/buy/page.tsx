import items from "../../domains/Product/seeds";
import clsx from "clsx";
import { Layout } from "../../components/Layout";

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
          {items.map((item) => (
            <pre key={item.slug}>{JSON.stringify(item)}</pre>
          ))}
        </div>
      </div>
    </Layout>
  );
}
