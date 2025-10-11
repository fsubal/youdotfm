import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { NewsArticle } from "../../../components/NewsArticle";
import { SectionTitle } from "../../../components/SectionTitle";

import { findNewsById, newsFeed } from "../../../domains/News/seeds";

export function generateStaticParams(): StaticParams<"/news/[id]"> {
  return newsFeed.map(({ id }) => ({ id: id.toString() }));
}

export default async function NewsPage({ params }: PageProps<"/news/[id]">) {
  const id = parseInt((await params).id);
  const news = findNewsById(id);
  if (!news) {
    notFound();
  }

  return (
    <Layout>
      <SectionTitle subheading="News" backToHref="/news">
        {news.title}
      </SectionTitle>
      <NewsArticle news={news} />
    </Layout>
  );
}
