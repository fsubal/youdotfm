"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

interface Props {
  href: string;
  external?: boolean;
}

export function NavbarItem({
  href,
  external,
  children,
}: React.PropsWithChildren<Props>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li data-role="navbar-item">
      <Link
        href={external ? href : `${href}#main`}
        target={external ? "_blank" : undefined}
        className={clsx(
          "flex",
          "items-center",
          "gap-8",
          "font-bold",
          "transition-colors",
          "whitespace-nowrap",
          [
            "bg-transpatent",
            "hover:bg-white-hover",
            "active:bg-white-active",
            isActive && "bg-white-hover",
          ],
          "rounded-full",
          "py-8",
          "px-16",
          ["focus-visible:outline-4", "focus-visible:outline-blue-400/50"],
        )}
      >
        {children}
        {external && (
          <Icon
            name="Inline/External"
            unsafeNonGuidelineScale={10 / 16}
            className="text-slate-400"
          />
        )}
      </Link>
    </li>
  );
}
