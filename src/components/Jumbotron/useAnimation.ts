"use client";

import { useState, useRef, useEffect, useReducer } from "react";
import Vivus from "vivus";

export function useAnimation(duration = 50, onAnimationEnd?: () => void) {
  const [visible, setVisible] = useState(false);
  const [playingEnd, setPlayingEnd] = useState(false);
  const el = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animation = new Vivus(
      // @ts-expect-error @types/vivusの型定義はHTMLElementしか受け付けないが、間違い
      el.current!,
      {
        start: "manual",
        type: "delayed",
        duration,
        forceRender: false,
        animTimingFunction: Vivus.EASE,
        onReady() {
          setVisible(true);
        },
      },
    );

    animation.play(1, () => {
      onAnimationEnd?.();
      setPlayingEnd(true);
    });

    return () => animation.destroy();
  }, [onAnimationEnd, duration]);

  return { el, visible, playingEnd };
}
