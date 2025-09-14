import clsx from "clsx";

export function NewBadge() {
  return (
    <span
      lang="en"
      data-role="new-badge"
      className={clsx(
        "text-white",
        "bg-red-500",
        "font-bold",
        "text-xs",
        "py-2",
        "px-8",
        "rounded-sm",
      )}
    >
      NEW!
    </span>
  );
}
