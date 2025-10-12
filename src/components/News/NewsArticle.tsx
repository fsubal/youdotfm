import Link from "next/link";
import { getShareText, getShareUrl, News } from "../../domains/News/model";
import { simpleFormat, nl2br } from "../../utils/text";
import clsx from "clsx";
import { NewsMetadata } from "./NewsMetadata";
import { NewsSourceLink } from "./NewsKind";
import { ShareLinkContainer } from "../SocialMedia/ShareButton";

interface Props {
  news: News;
}

export function NewsArticleListItem({ news }: Props) {
  return (
    <Link
      key={news.id}
      className={clsx("flex", "py-24", "px-16", "active:bg-active/50")}
      href={`/news/${news.id}#main`}
    >
      <article className="w-full">
        <NewsMetadata news={news} />
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
          className={clsx(
            "text-text-500",
            "screen2:text-lg",
            "leading-loose",
            "tracking-wide",
          )}
        >
          {nl2br(news.description)}
        </div>
      </article>
    </Link>
  );
}

export function NewsArticle({ news }: Props) {
  return (
    <article>
      <div className={clsx("mb-24", "screen2:mb-32")}>
        <NewsMetadata news={news} />
      </div>

      <div
        className={clsx(
          "screen2:text-lg",
          "leading-loose",
          "tracking-wide",
          "[&_p+p]:mt-24",
        )}
      >
        {simpleFormat(news.description)}
      </div>

      {news.url && (
        <div className={clsx("mt-16", "screen2:mt-24")}>
          <NewsSourceLink kind={news.kind} url={news.url} />
        </div>
      )}

      <hr className="my-24" />

      <SocialShare news={news} />
    </article>
  );
}

function SocialShare({ news }: { news: News }) {
  return (
    <div>
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
        このお知らせを広める
      </h2>
      <ShareLinkContainer url={getShareUrl(news)} text={getShareText(news)} />
    </div>
  );
}
