import Link from "next/link";
import { Layout } from "@/components/Layout";
import { eri, shiori } from "./characters/data";
import clsx from "clsx";

export default function Home() {
  return (
    <Layout>
      <h2 className={clsx("font-serif", "font-normal")}>
        『語る、話す、好きになる』
      </h2>
      <div className={clsx("lead", "leading-loose")}>
        <p>
          うだつの上がらない音楽系ライター
          <Link href={`/characters/${eri.slug}#main`}>竹内エリ</Link>は、
          <br />
          素敵な文章を書くフォロワー
          <Link href={`/characters/${shiori.slug}#main`}>千葉シヲリ</Link>
          のことが密かに気になっていた。
        </p>
        <p>
          ある日エリはライブ会場でシヲリと対面し、互いに打ち解ける。
          <br />
          数日後、突然シヲリからインターネットでラジオを一緒に始めないかと誘われてしまい――！？
        </p>
        <p>
          書いて、語って、ふざけて、そして好きになる。
          <br />
          ポッドキャスター女子2人が織りなす、大人の青春ストーリー！
        </p>
      </div>
    </Layout>
  );
}
