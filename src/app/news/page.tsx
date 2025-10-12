import { ResolvingMetadata } from "next";
import { Layout } from "../../components/Layout";
import { NewsArticleListItem } from "../../components/News/NewsArticle";
import { SectionTitle } from "../../components/SectionTitle";
import { newsFeed } from "../../domains/News/seeds";
import clsx from "clsx";

export async function generateMetadata(_: unknown, parent: ResolvingMetadata) {
  const { title } = await parent;

  return {
    title: {
      template: title!.template,
      default: "お知らせ",
    },
  };
}

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
