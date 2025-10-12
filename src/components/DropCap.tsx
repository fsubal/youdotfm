import clsx from "clsx";

/**
 * 1文字目だけ大きく表示される段落
 */
export function DropCap({ children }: React.PropsWithChildren) {
  return (
    <div
      className={clsx(
        "leading-loose",
        ["text-sm", "screen2:text-base"],
        "space-y-8",
        [
          "first-letter:text-5xl",
          "screen2:first-letter:text-6xl",
          "first-letter:text-primary",
          "first-letter:font-bold",
          "first-letter:float-left",
          "first-letter:align-bottom",
        ],
      )}
    >
      {children}
    </div>
  );
}
