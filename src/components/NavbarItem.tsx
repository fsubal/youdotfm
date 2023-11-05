"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
}

export function NavbarItem({ href, children }: React.PropsWithChildren<Props>) {
  const pathname = usePathname();

  return (
    <li data-role="navbar-item">
      <a
        href={`${href}#main`}
        className={clsx(
          "block",
          "font-bold",
          "transition-colors",
          [
            "bg-transpatent",
            "hover:bg-slate-100",
            "active:bg-slate-200",
            pathname === href && "bg-slate-100",
          ],
          "rounded-full",
          "py-2",
          "px-4",
          "focus-visible:ring-2"
        )}
      >
        {children}
      </a>
    </li>
  );
}
