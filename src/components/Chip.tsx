import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { type HTMLAttributeAnchorTarget } from "react";

interface Props {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  imageUrl?: string;
  alt?: string;
}

export function Chip({
  href,
  target,
  imageUrl,
  alt,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Link
      data-role="chip"
      href={href}
      target={target}
      className={clsx(
        "rounded-full",
        "border",
        "bg-white",
        "py-12",
        "px-16",
        "inline-flex",
        "items-center",
        "gap-8",
        "transition-colors",
        ["hover:underline", "hover:bg-surface", "active:bg-active"],
      )}
    >
      {imageUrl && alt && (
        <Image
          className={clsx("inline-block", "rounded-full")}
          src={imageUrl}
          width={24}
          height={24}
          alt={alt}
        />
      )}
      {children}
    </Link>
  );
}
