"use client";

import clsx from "clsx";
import { Icon } from "../Icon";
import { useRef, useState, useId } from "react";
import { usePreventScroll } from "react-aria";

export function NavbarDropdown({ children }: React.PropsWithChildren) {
  const controlId = useId();
  const backdrop = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const onClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    // クリックしたのがbackdropだったときだけ、メニューを閉じる
    if (e.target === backdrop.current) {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  usePreventScroll({ isDisabled: !isOpen });

  return (
    <>
      <DropdownTrigger onClick={onToggle} isOpen={isOpen} controlId={controlId}>
        <Icon
          name={isOpen ? "24/Close" : "24/Menu"}
          unsafeNonGuidelineScale={28 / 24}
        />
      </DropdownTrigger>

      <div
        className={clsx(
          "z-[calc(infinity)]",
          [isOpen ? "flex" : "hidden", "justify-end"],
          "fixed",
          "inset-0",
          "bg-text-950/50",
          "pl-80",
        )}
        ref={backdrop}
        onClick={onClickBackdrop}
      >
        <nav
          id={controlId}
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
  isOpen,
  controlId,
}: React.PropsWithChildren & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  controlId: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls={controlId}
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
        !isOpen && "bg-primary/10",
        "active:bg-active",
      )}
    >
      {children}
    </button>
  );
}
