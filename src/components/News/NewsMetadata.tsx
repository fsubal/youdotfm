import clsx from "clsx";
import { News } from "../../domains/News/model";
import { formatDateTime } from "../../utils/datetime";
import { NewsKindBadge } from "./NewsKind";

interface Props {
  news: AutoIncrement<News>;
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
      <NewsKindBadge kind={news.kind} />
    </aside>
  );
}
