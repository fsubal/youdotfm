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
          "gap-2",
          "font-bold",
          "transition-colors",
          "snap-center",
          [
            "bg-transpatent",
            "hover:bg-slate-100",
            "active:bg-slate-200",
            isActive && "bg-slate-100",
          ],
          "rounded-full",
          "py-2",
          "px-4",
          ["focus-visible:outline-4", "focus-visible:outline-blue-400/50"]
        )}
      >
        {children}
        {external && (
          <Icon
            name="Inline/External"
            unsafe-non-guideline-scale={10 / 16}
            className="text-slate-400"
          />
        )}
      </Link>
    </li>
  );
}
