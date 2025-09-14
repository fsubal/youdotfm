import { Layout } from "../../components/Layout";
import { newsFeed } from "../../domains/News/seeds";

export default function NewsPage() {
  return (
    <Layout>
      <h1>ニュース</h1>
      {newsFeed.map((news) => (
        <div key={news.id}>{JSON.stringify(news)}</div>
      ))}
    </Layout>
  );
}
