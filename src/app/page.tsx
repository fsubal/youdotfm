import Link from "next/link";
import { eri, shiori } from "../domains/Character/seeds";
import clsx from "clsx";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <hgroup className={clsx("mb-24", "screen2:mb-32")}>
        <h2 className={clsx("text-primary", "font-bold", "uppercase", "mb-4")}>
          Introduction
        </h2>
        <h3
          className={clsx(
            "font-serif",
            "font-normal",
            "text-2xl",
            "screen2:text-3xl",
          )}
        >
          『語って、話して、好きになる』
        </h3>
        <hr
          className={clsx(
            "border-b",
            "border-t-0",
            "w-1/2",
            "screen2:w-[400px]",
            "mx-auto",
            "mt-24",
            "screen2:mt-32",
          )}
        />
      </hgroup>
      <div
        className={clsx("lead", "leading-loose", "text-base", "space-y-8", [
          "first-letter:text-6xl",
          "first-letter:text-primary",
          "first-letter:font-bold",
          "first-letter:float-left",
          "first-letter:align-bottom",
        ])}
      >
        <p>
          うだつの上がらない新人音楽ライターの
          <Link href={`/characters/${eri.slug}#main`}>竹内エリ</Link>は、
          <wbr />
          素敵な文章を書くフォロワーの
          <Link href={`/characters/${shiori.slug}#main`}>千葉シヲリ</Link>
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
      </div>
    </Layout>
  );
}
