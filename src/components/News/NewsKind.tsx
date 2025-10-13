import clsx from "clsx";
import { Unreachable } from "../../utils/unreachable";
import { NewsKind } from "../../domains/News/model";

const newsCategory = clsx(
  "px-8",
  "py-4",
  "text-xs",
  "font-bold",
  "rounded",
  "whitespace-nowrap",
);

export function NewsKindBadge({ kind }: { kind: NewsKind }) {
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
          メディア掲載
        </span>
      );
    default:
      Unreachable.assert(kind);
  }
}

export function NewsSourceLink({
  kind,
  url,
}: {
  kind: NewsKind;
  url?: string;
}) {
  switch (kind) {
    case "DojinEvent":
      return (
        <SourceLink
          url={url}
          className={clsx("bg-cyan-700", "active:bg-cyan-800", "text-white")}
        >
          イベント告知を見る
        </SourceLink>
      );
    case "FanboxPost":
      return (
        <SourceLink
          url={url}
          className={clsx(
            "bg-yellow-600",
            "active:bg-yellow-700",
            "text-white",
          )}
        >
          FANBOXを見る
        </SourceLink>
      );
    case "NewProduct":
      return (
        <SourceLink
          url={url}
          className={clsx(
            "bg-orange-700",
            "active:bg-orange-800",
            "text-white",
          )}
        >
          商品情報を見る
        </SourceLink>
      );
    case "Publicity":
      return (
        <SourceLink
          url={url}
          className={clsx("bg-pink-700", "active:bg-pink-800", "text-white")}
        >
          掲載先を見にいく
        </SourceLink>
      );
    default:
      Unreachable.assert(kind);
  }
}

const sourceButtonStyle = clsx(
  "cursor-pointer",
  "font-bold",
  "w-full",
  "py-12",
  "rounded-full",
  "text-base",
  ["flex", "w-full", "screen2:inline-flex", "screen2:w-auto"],
  "justify-center",
  "items-center",
  "px-40",
);

function SourceLink({
  url,
  className,
  children,
}: React.PropsWithChildren<{ className?: string; url?: string }>) {
  if (url == null) {
    return <div className={clsx(sourceButtonStyle, className)}>{children}</div>;
  }

  const isFullUrl = URL.canParse(url);

  return (
    <a
      className={clsx(sourceButtonStyle, className)}
      href={url}
      target={isFullUrl ? "_blank" : undefined}
      rel={isFullUrl ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
