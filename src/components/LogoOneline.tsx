import clsx from "clsx";
import Link from "next/link";

export function LogoOneline() {
  return (
    <Link
      className={clsx(
        "flex",
        "flex-col",
        "justify-start",
        "items-start",
        "gap-4",
      )}
      href="/"
    >
      <p className={clsx("text-xs", "text-text-500")}>ポッドキャスト百合漫画</p>
      <img
        src="/logo_oneline.svg"
        alt="ユードットエフエム"
        width={160}
        height={18}
        className={clsx("h-[18px]", "w-auto")}
      />
    </Link>
  );
}
