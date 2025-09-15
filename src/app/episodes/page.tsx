import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";

export default function EpisodesPage() {
  return (
    <Layout>
      <SectionTitle subheading="Episode">エピソード</SectionTitle>
      <div className="lead">
        pixivで公開されている『ユードットエフエム』の各話エピソードや、同人誌のサンプルなどを紹介します。
      </div>

      <h2>一章</h2>
      <div className="lead">
        うだつの上がらない音楽系ライターのエリは、推しフォロワーのシヲリとポッドキャストを始めることになる。
      </div>
    </Layout>
  );
}
