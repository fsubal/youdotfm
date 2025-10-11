import Link from "next/link";
import { News, NewsKind } from "../domains/News/model";
import { formatDateTime } from "../utils/datetime";
import { nl2br } from "../utils/nl2br";
import clsx from "clsx";
import { Unreachable } from "../utils/unreachable";

interface Props {
  news: AutoIncrement<News>;
}

export function NewsArticleListItem({ news }: Props) {
  const datetimeLabel = formatDateTime(news.datetime);

  return (
    <Link
      key={news.id}
      className={clsx("flex", "py-24", "px-16", "active:bg-active/50")}
      href={`/news/${news.id}#main`}
    >
      <article className="w-full">
        <aside
          className={clsx(
            "flex",
            "screen2:gap-16",
            "items-center",
            "w-full",
            "mb-4",
          )}
        >
          <time
            dateTime={news.datetime.toPlainDateTime().toString()}
            className={clsx(
              "text-text-500",
              "whitespace-nowrap",
              "flex-1",
              "screen2:grow-0",
              "screen2:text-lg",
            )}
          >
            {datetimeLabel}
          </time>
          <NewsCategory kind={news.kind} />
        </aside>
        <h2
          className={clsx(
            "font-serif",
            "text-2xl",
            "screen2:text-3xl",
            "mt-16",
            "mb-16",
            "screen2:mb-20",
          )}
        >
          {news.title}
        </h2>
        <div
          className={clsx("text-text-500", "screen2:text-lg", "leading-loose")}
        >
          {nl2br(news.description)}
        </div>
      </article>
    </Link>
  );
}

const newsCategory = clsx("px-8", "py-4", "text-xs", "font-bold", "rounded");
function NewsCategory({ kind }: { kind: NewsKind }) {
  switch (kind) {
    case "DojinEvent":
      return (
        <span className={clsx(newsCategory, "bg-cyan-500", "text-white")}>
          同人イベント
        </span>
      );
    case "FanboxPost":
      return (
        <span className={clsx(newsCategory, "bg-yellow-500", "text-white")}>
          FANBOX更新
        </span>
      );
    case "NewProduct":
      return (
        <span className={clsx(newsCategory, "bg-orange-500", "text-white")}>
          新商品
        </span>
      );
    case "Publicity":
      return (
        <span className={clsx(newsCategory, "bg-pink-500", "text-white")}>
          メディア出演
        </span>
      );
    default:
      Unreachable.assert(kind);
  }
}

export function NewsArticle({ news }: Props) {
  return (
    <article>
      <h2>{news.title}</h2>
      <time>{formatDateTime(news.datetime)}</time>
      <div>{news.kind}</div>
      <div>{nl2br(news.description)}</div>
    </article>
  );
}
