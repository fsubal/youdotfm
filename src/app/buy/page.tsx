import items from "./data";
import clsx from "clsx";
import { BuyableItem } from "../../components/BuyableItem";
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
            <BuyableItem
              key={item.id}
              name={item.name}
              shopUrl={item.shopUrl}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
