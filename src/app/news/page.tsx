import { Layout } from "../../components/Layout";
import { VarDump } from "../../components/VarDump";
import { newsFeed } from "../../domains/News/seeds";

export default function NewsPage() {
  return (
    <Layout>
      <h1>ニュース</h1>
      {newsFeed.map((news) => (
        <VarDump key={news.id}> {news}</VarDump>
      ))}
    </Layout>
  );
}
