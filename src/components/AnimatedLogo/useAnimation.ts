"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Vivus from "vivus";

export function useAnimation() {
  const [visible, setVisible] = useState(false);
  const [playingEnd, setPlayingEnd] = useState(false);
  const el = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animation = new Vivus(
      // @ts-expect-error @types/vivusの型定義はHTMLElementしか受け付けないが、間違い
      el.current!,
      {
        start: "manual",
        type: "scenario-sync",
        duration: 50,
        forceRender: false,
        animTimingFunction: Vivus.EASE,
        onReady() {
          setVisible(true);
        },
      }
    );

    animation.play(1, () => {
      setPlayingEnd(true);
    });

    return () => animation.destroy();
  }, []);

  return { el, visible, playingEnd };
}
