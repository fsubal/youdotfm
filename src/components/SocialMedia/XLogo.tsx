import clsx from "clsx";

interface Props {
  size: "lg" | "xl";
}

export function XLogo({ size }: Props) {
  return (
    <span
      aria-label="X"
      role="img"
      className={clsx(
        "inline-flex",
        "justify-center",
        "items-center",
        size === "lg"
          ? ["text-lg/[1]", "w-18", "h-18"]
          : size === "xl"
            ? ["text-xl/[1]", "w-20", "h-20"]
            : [],
      )}
    >
      𝕏
    </span>
  );
}
