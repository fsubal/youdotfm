import clsx from "clsx";

export function NewBadge() {
  return (
    <span
      className={clsx(
        "text-white",
        "bg-red-500",
        "font-bold",
        "text-xs",
        "py-0.5",
        "px-2",
        "rounded-sm"
      )}
    >
      NEW!
    </span>
  );
}
