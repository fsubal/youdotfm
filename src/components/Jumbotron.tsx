"use client";

import clsx from "clsx";
import { AnimatedLogo } from "./AnimatedLogo/AnimatedLogo";
import { ScrollTo } from "./ScrollTo";
import { Icon } from "./Icon";
import { useAnimation } from "./AnimatedLogo/useAnimation";

export function Jumbotron() {
  const { el, visible, playingEnd } = useAnimation(110);

  return (
    <section data-role="jumbotron" className="relative">
      <div
        className={clsx(
          "w-full",
          "h-screen",
          "transition-transform",
          "duration-800",
          playingEnd ? "scale-105" : "scale-100",
          "bg-[url('/jumbotron_bg.jpg')]",
          ["bg-size-[600px_auto]", "screen2:bg-size-[auto_1200px]"],
          "bg-center",
          "bg-no-repeat",
        )}
      />
      <div
        className={clsx(
          "absolute",
          "inset-0",
          "transition-colors",
          "duration-400",
          playingEnd ? "bg-transparent" : "bg-primary",
          "h-screen",
          "w-full",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "px-12",
        )}
      >
        <hgroup className="overflow-hidden">
          <h1 className="sr-only">ポッドキャスト百合『ユードットエフエム』</h1>
          <AnimatedLogo ref={el} visible={visible} ended={playingEnd} />
        </hgroup>

        <div
          className={clsx(
            "animate-[1s_linear_1.2s_1_normal_running_forwards_fadein]",
            "opacity-0",
          )}
        >
          <ScrollTo className={clsx("block", "animate-bounce")} href="#main">
            <Icon
              name="24/ArrowDown"
              className={playingEnd ? "text-black" : "text-white"}
              aria-label="下にスクロール"
            />
          </ScrollTo>
        </div>
      </div>
    </section>
  );
}
