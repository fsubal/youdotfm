import Link from "next/link";
import { eri, shiori } from "../domains/Character/seeds";
import clsx from "clsx";
import { Layout } from "../components/Layout";
import { SectionTitle } from "../components/SectionTitle";

export default function Home() {
  return (
    <Layout>
      <SectionTitle subheading="Introduction">
        『語って、話して、好きになる』
      </SectionTitle>
      <DropCap>
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
      </DropCap>
    </Layout>
  );
}

function DropCap({ children }: React.PropsWithChildren) {
  return (
    <div
      className={clsx("lead", "leading-loose", "text-base", "space-y-8", [
        "first-letter:text-6xl",
        "first-letter:text-primary",
        "first-letter:font-bold",
        "first-letter:float-left",
        "first-letter:align-bottom",
      ])}
    >
      {children}
    </div>
  );
}
