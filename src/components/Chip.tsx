import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

interface Props {
  href: string;
  imageUrl: string;
  alt: string;
}

export function Chip({
  href,
  imageUrl,
  alt,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      data-role="chip"
      href={href}
      className={clsx(
        "rounded-full",
        "border",
        "bg-white",
        "py-3",
        "px-4",
        "inline-flex",
        "items-center",
        "gap-2",
        "transition-colors",
        ["hover:underline", "hover:bg-white-hover", "active:bg-white-active"]
      )}
    >
      <Image
        className={clsx("inline-block", "rounded-full")}
        src={imageUrl}
        width={24}
        height={24}
        alt={alt}
      />
      {children}
    </Link>
  );
}
