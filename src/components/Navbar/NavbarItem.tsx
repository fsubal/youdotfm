"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NewBadge } from "../NewBadge";

interface Props {
  href: string;
  isNew?: boolean;
  subheading?: string;
  icon?: React.ReactElement;
}

export function NavbarItem({
  href,
  isNew,
  icon,
  subheading,
  children,
}: React.PropsWithChildren<Props>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li data-role="navbar-item">
      <Link
        href={`${href}#main`}
        className={clsx(
          "flex",
          "items-center",
          "gap-8",
          "transition-colors",
          "whitespace-nowrap",
          [
            "bg-transpatent",
            "hover:bg-surface",
            "active:bg-active",
            isActive && "bg-surface",
          ],
          "rounded-full",
          "py-12",
          "px-16",
          ["focus-visible:outline-4", "focus-visible:outline-blue-400/50"],
        )}
      >
        {icon}
        <div className={clsx("flex", "flex-col", "leading-[1]", "flex-1")}>
          {subheading && (
            <span className={clsx("font-bold", "text-sm", "uppercase")}>
              {subheading}
            </span>
          )}
          <span>{children}</span>
        </div>
        {isNew && <NewBadge />}
      </Link>
    </li>
  );
}
