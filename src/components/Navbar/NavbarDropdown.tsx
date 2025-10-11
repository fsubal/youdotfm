"use client";

import clsx from "clsx";
import { Icon } from "../Icon";
import { useRef, useState, useEffect } from "react";

const navId = "navbar-dropdown-nav";

export function NavbarDropdown({ children }: React.PropsWithChildren) {
  const backdrop = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const onClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    // クリックしたのがbackdropだったときだけ、メニューを閉じる
    if (e.target === backdrop.current) {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <>
      <DropdownTrigger
        onClick={onToggle}
        ariaExpanded={open}
        ariaControls={navId}
      >
        <Icon
          name="24/Menu"
          unsafeNonGuidelineScale={28 / 24}
          className={clsx("group-open:hidden", "block")}
        />
        <Icon
          name="24/Close"
          unsafeNonGuidelineScale={28 / 24}
          className={clsx("group-open:block", "hidden")}
        />
      </DropdownTrigger>

      <div
        className={clsx(
          [open ? "flex" : "hidden", "justify-end"],
          "fixed",
          "inset-0",
          "bg-text-950/50",
          "pl-80",
        )}
        ref={backdrop}
        onClick={onClickBackdrop}
      >
        <nav
          id={navId}
          role="menu"
          className={clsx("bg-white", "flex-1", "max-w-400", "h-screen")}
        >
          {children}
        </nav>
      </div>
    </>
  );
}

function DropdownTrigger({
  children,
  onClick,
  ariaExpanded,
  ariaControls,
}: React.PropsWithChildren & {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="menu"
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={clsx(
        "z-1",
        ["fixed", "right-16", "top-16"],
        "list-none",
        "cursor-pointer",
        [
          "w-48",
          "h-48",
          "inline-flex",
          "justify-center",
          "items-center",
          "rounded-full",
        ],
        "not-group-open:bg-primary/10",
        "active:bg-active",
      )}
    >
      {children}
    </button>
  );
}
