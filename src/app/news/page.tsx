import { Layout } from "../../components/Layout";
import { NewsArticleListItem } from "../../components/News/NewsArticle";
import { SectionTitle } from "../../components/SectionTitle";
import { newsFeed } from "../../domains/News/seeds";
import clsx from "clsx";

export default function NewsPage() {
  return (
    <Layout>
      <SectionTitle subheading="News">お知らせ</SectionTitle>

      <div className={clsx("divide-y", "divide-text-50")}>
        {newsFeed.map((news) => (
          <NewsArticleListItem key={news.id} news={news} />
        ))}
      </div>
    </Layout>
  );
}
