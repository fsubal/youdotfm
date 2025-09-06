import clsx from "clsx";

export function NewBadge() {
  return (
    <span
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
