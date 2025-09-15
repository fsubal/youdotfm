import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { VarDump } from "../../components/VarDump";
import { newsFeed } from "../../domains/News/seeds";

export default function NewsPage() {
  return (
    <Layout>
      <SectionTitle subheading="News">お知らせ</SectionTitle>
      {newsFeed.map((news) => (
        <VarDump key={news.id}>{news}</VarDump>
      ))}
    </Layout>
  );
}
