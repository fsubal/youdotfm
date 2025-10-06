"use client";

import clsx from "clsx";
import { Icon } from "../Icon";
import { useRef } from "react";

export function NavbarDropdown({ children }: React.PropsWithChildren) {
  const details = useRef<HTMLDetailsElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);

  const onClickMenu = (e: React.MouseEvent<HTMLDetailsElement>) => {
    if (e.target === backdrop.current) {
      e.preventDefault();
      e.currentTarget.open = false;
    }
  };

  return (
    <details
      ref={details}
      onClick={onClickMenu}
      className="group"
      data-role="navbar-dropdown"
    >
      <DropdownTrigger>
        <Icon name="24/Menu" className={clsx("group-open:hidden", "block")} />
        <Icon name="24/Close" className={clsx("group-open:block", "hidden")} />
      </DropdownTrigger>
      <div
        className={clsx(
          "fixed",
          "inset-0",
          "bg-text-950/50",
          "pl-80",
          "flex",
          "justify-end",
        )}
        ref={backdrop}
      >
        <nav className={clsx("bg-white", "flex-1", "max-w-400", "h-screen")}>
          {children}
        </nav>
      </div>
    </details>
  );
}

function DropdownTrigger({ children }: React.PropsWithChildren) {
  return (
    <summary
      className={clsx(
        "z-1",
        ["fixed", "right-24", "top-24"],
        "list-none",
        "cursor-pointer",
        [
          "w-40",
          "h-40",
          "inline-flex",
          "justify-center",
          "items-center",
          "rounded-full",
        ],
        "active:bg-active",
      )}
    >
      {children}
    </summary>
  );
}
