import Link from "next/link";
import { News } from "../../domains/News/model";
import clsx from "clsx";
import { formatDate } from "../../utils/datetime";
import { NewsKindBadge } from "./NewsKind";
import { Icon } from "../Icon";

interface Props {
  news: News;
  pinned?: boolean;
}

export function NewsListItem({ news, pinned = false }: Props) {
  return (
    <Link
      key={news.id}
      className={clsx(
        "flex",
        ["flex-col", "items-start"],
        ["screen2:flex-row", "screen2:items-end"],
        "py-8",
        "gap-8",
        "active:bg-active/50",
      )}
      href={`/news/${news.id}#main`}
    >
      <span className="text-text-500">
        {formatDate(news.datetime.toPlainDate())}
      </span>
      <div className={clsx("flex-1", "flex", "items-end")}>
        <div className="flex-1">
          {pinned && <PinnedItem />}
          <div className="screen2:flex">
            <span
              className={clsx(
                "pr-8",
                "screen2:flex-1",
                pinned && "font-semibold",
              )}
            >
              {news.title}
            </span>
            <NewsKindBadge kind={news.kind} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function PinnedItem() {
  return (
    <span
      className={clsx(
        "text-xs",
        "text-orange-600",
        "font-bold",
        "flex",
        "items-center",
        "gap-4",
      )}
    >
      <Icon name="24/LatestWorks" unsafeNonGuidelineScale={14 / 24} />
      固定されたお知らせ
    </span>
  );
}
