import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import { NewsArticle } from "../../../components/News/NewsArticle";
import { SectionTitle } from "../../../components/SectionTitle";

import { findNewsById, newsFeed } from "../../../domains/News/seeds";
import { ResolvingMetadata } from "next";

export function generateStaticParams(): StaticParams<"/news/[id]"> {
  return newsFeed.map(({ id }) => ({ id: id.toString() }));
}

export async function generateMetadata(
  { params }: PageProps<"/news/[id]">,
  parent: ResolvingMetadata,
) {
  const { id } = await params;
  const { title } = await parent;
  const news = findNewsById(parseInt(id))!;

  return {
    title: {
      template: title!.template,
      default: news.title,
    },
  };
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
