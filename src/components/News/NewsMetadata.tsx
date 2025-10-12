import clsx from "clsx";
import { News } from "../../domains/News/model";
import { formatDateTime } from "../../utils/datetime";
import { NewsKindBadge } from "./NewsKind";

interface Props {
  news: News;
}

export function NewsMetadata({ news }: Props) {
  const datetimeLabel = formatDateTime(news.datetime);

  return (
    <aside
      className={clsx(
        "flex",
        "screen2:gap-16",
        "items-center",
        "w-full",
        "mb-4",
      )}
    >
      <span
        className={clsx(
          "text-text-500",
          "whitespace-nowrap",
          "flex-1",
          "screen2:grow-0",
          "screen2:text-lg",
        )}
      >
        <time dateTime={news.datetime.toPlainDateTime().toString()}>
          {datetimeLabel}
        </time>
        &nbsp;に公開
      </span>
      <NewsKindBadge kind={news.kind} />
    </aside>
  );
}
