import Link from "next/link";
import { Layout } from "@/components/Layout";
import { eri, shiori } from "./characters/data";

export default function Home() {
  return (
    <Layout>
      <div className="lead">
        <p>『話す、流す、好きになる』</p>
        うだつの上がらない音楽系ライター
        <Link href={`/characters/${eri.slug}#main`}>竹内エリ</Link>は、
        <br />
        素敵な文章を書くフォロワー
        <Link href={`/characters/${shiori.slug}#main`}>千葉シヲリ</Link>
        のことが密かに気になっていた。
        <br />
        ある日エリはライブ会場でシヲリと対面し、互いに打ち解ける。
        <br />
        数日後、突然シヲリからインターネットでラジオを一緒に始めないかと誘われてしまい――！？
      </div>
    </Layout>
  );
}
