"use client";

import { useCallback } from "react";

interface Props {
  href: `#${string}`;
}

export function ScrollTo({ href, children }: React.PropsWithChildren<Props>) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
        return;
      }

      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    },
    [href]
  );

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}
