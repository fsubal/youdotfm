import Link from "next/link";
import clsx from "clsx";
import { Layout } from "../components/Layout";
import { SectionTitle } from "../components/SectionTitle";
import { findNewsById, newsFeed } from "../domains/News/seeds";
import {
  ProductList,
  ProductListItem,
} from "../components/Product/ProductListItem";
import { products } from "../domains/Product/seeds";
import { DropCap } from "../components/DropCap";
import { NewsListItem } from "../components/News/NewsListItem";

export default function Home() {
  return (
    <Layout>
      <SectionTitle subheading="Introduction">
        『語って、話して、好きになる』
      </SectionTitle>
      <DropCap>
        <p>
          うだつの上がらない新人音楽ライターの
          <Link className="underline" href={`/characters#eri_takeuchi`}>
            竹内エリ
          </Link>
          は、
          <wbr />
          素敵な文章を書くフォロワーの
          <Link className="underline" href={`/characters#shiori_chiba`}>
            千葉シヲリ
          </Link>
          に心惹かれていた。
          <br />
          ある日エリはライブ会場でシヲリと対面し、意気投合する。
          <br />
          数日後、突然シヲリからインターネットで
          <wbr />
          ラジオを一緒に始めないかと誘われてしまい！？
        </p>

        <p>
          語って、話して、好きになる。
          <br />
          ポッドキャスター女子ふたりが織りなす、大人の青春ストーリー！
        </p>
      </DropCap>

      <hr className={clsx("my-24", "screen2:my-40")} />

      <div>
        <div>
          <h2
            className={clsx("font-serif", "text-2xl", "mb-8", "text-text-950")}
          >
            お知らせ
          </h2>

          <div className="space-y-8">
            <div className={clsx("divide-y", "divide-text-50")}>
              {/* となジャンへの掲載は固定する */}
              <NewsListItem pinned news={findNewsById(13)!} />

              {newsFeed.slice(0, 3).map((news) => (
                <NewsListItem key={news.id} news={news} />
              ))}
            </div>
            <MoreButton href="/news#main" />
          </div>
        </div>

        <hr className={clsx("my-24", "screen2:my-40")} />

        <div>
          <h2
            className={clsx("font-serif", "text-2xl", "mb-8", "text-text-950")}
          >
            本&amp;グッズ
          </h2>
          <div className="space-y-16">
            <ProductList>
              {products.slice(0, 4).map((product) => (
                <ProductListItem key={product.slug} product={product} />
              ))}
            </ProductList>
            <MoreButton href="/shop#main" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function MoreButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={clsx(
        "cursor-pointer",
        "bg-surface",
        "active:bg-active",
        "text-text-500",
        "font-bold",
        "w-full",
        "py-12",
        "rounded-full",
        "text-sm",
        "flex",
        "justify-center",
        "items-center",
      )}
    >
      すべて見る
    </Link>
  );
}
