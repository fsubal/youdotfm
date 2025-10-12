import clsx from "clsx";

export function MarshmallowLink({ children }: React.PropsWithChildren) {
  return (
    <a
      href="https://marshmallow-qa.com/youdotfm"
      target="_blank"
      rel="noopener"
      className={clsx(
        "rounded-full",
        "px-24",
        "py-8",
        "inline-flex",
        "text-sm",
        "font-bold",
        "bg-[#F3969A]",
        "text-white",
      )}
    >
      {children}
    </a>
  );
}
