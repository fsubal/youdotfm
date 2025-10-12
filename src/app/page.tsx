import Link from "next/link";
import { eri, shiori } from "../domains/Character/seeds";
import clsx from "clsx";
import { Layout } from "../components/Layout";
import { SectionTitle } from "../components/SectionTitle";
import { newsFeed } from "../domains/News/seeds";
import { formatDate } from "../utils/datetime";
import { NewsKindBadge } from "../components/News/NewsKind";
import {
  ProductList,
  ProductListItem,
} from "../components/Product/ProductListItem";
import { products } from "../domains/Product/seeds";

export default function Home() {
  return (
    <Layout>
      <SectionTitle subheading="Introduction">
        『語って、話して、好きになる』
      </SectionTitle>
      <DropCap>
        <p>
          うだつの上がらない新人音楽ライターの
          <Link className="underline" href={`/characters/${eri.slug}#main`}>
            竹内エリ
          </Link>
          は、
          <wbr />
          素敵な文章を書くフォロワーの
          <Link className="underline" href={`/characters/${shiori.slug}#main`}>
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
              {newsFeed.slice(0, 5).map((news) => (
                <Link
                  key={news.id}
                  className={clsx(
                    "flex",
                    "flex-col",
                    "screen2:flex-row",
                    "py-8",
                    "gap-8",
                    "active:bg-active/50",
                  )}
                  href={`/news/${news.id}#main`}
                >
                  <span className="text-text-500">
                    {formatDate(news.datetime.toPlainDate())}
                  </span>
                  <div className={clsx("flex-1", "flex")}>
                    <span className="flex-1">{news.title}</span>
                    <div>
                      <NewsKindBadge kind={news.kind} />
                    </div>
                  </div>
                </Link>
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

function DropCap({ children }: React.PropsWithChildren) {
  return (
    <div
      className={clsx(
        "leading-loose",
        ["text-sm", "screen2:text-base"],
        "space-y-8",
        [
          "first-letter:text-5xl",
          "screen2:first-letter:text-6xl",
          "first-letter:text-primary",
          "first-letter:font-bold",
          "first-letter:float-left",
          "first-letter:align-bottom",
        ],
      )}
    >
      {children}
    </div>
  );
}
