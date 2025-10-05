import clsx from "clsx";
import { Layout } from "../../components/Layout";
import { products } from "../../domains/Product/seeds";
import { VarDump } from "../../components/VarDump";
import { SectionTitle } from "../../components/SectionTitle";
import { shops } from "../../domains/Shop/seeds";

export default function BuyPage() {
  return (
    <Layout>
      <SectionTitle subheading="Shop">本 &amp; グッズ</SectionTitle>

      <div>
        <p>
          『ユードットエフエム』に関連する商品を紹介します。各種通販サイトで購入できます。
        </p>
        <hr />

        <div className={clsx("my-16", "gap-x-40", "inline-flex", "flex-wrap")}>
          {shops.map((shop) => (
            <a
              className={clsx(
                "inline-block",
                "text-sm/loose",
                ["text-text-500", "hover:text-text-950"],
                "underline",
              )}
              key={shop.kind}
              href={shop.url}
              target="_blank"
              rel="noreferrer"
            >
              {shop.name}
            </a>
          ))}
        </div>
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
    </Layout>
  );
}
