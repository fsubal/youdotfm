import clsx from "clsx";
import { News } from "../../domains/News/model";
import Link from "next/link";
import { NewsKindBadge } from "../News/NewsKind";

interface Props {
  relatedNews: News[];
}

export function EpisodeNewsList({ relatedNews }: Props) {
  return (
    <>
      <h3 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
        このエピソードに関するお知らせ
      </h3>
      <div className="space-y-8">
        {relatedNews.map((news) => (
          <Link key={news.id} className="block" href={`/news/${news.id}#main`}>
            <NewsKindBadge kind={news.kind} />
            <span
              className={clsx("ml-8", "underline", "text-primary", "text-sm")}
            >
              {news.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
