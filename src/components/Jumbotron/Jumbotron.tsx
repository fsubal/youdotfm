"use client";

import clsx from "clsx";
import { AnimatedLogo } from "./AnimatedLogo";
import { ScrollTo } from "../ScrollTo";
import { Icon } from "../Icon";
import { useAnimation } from "./useAnimation";
import { useReducer } from "react";

const fadeInLater = clsx(
  "animate-[1s_linear_1.2s_1_normal_running_forwards_fadein]",
  "opacity-0",
);

interface Props {
  onReplay(): void;
}

export const Jumbotron = withReplay(({ onReplay }: Props) => {
  const { el, visible, playingEnd } = useAnimation(/** frames */ 110);

  return (
    <section
      data-role="jumbotron"
      data-animation-end={playingEnd}
      className={clsx(
        "relative",
        "overflow-clip",
        "transition-colors",
        "transition-transform",
      )}
    >
      <BackgroundImage zoomed={playingEnd} />
      <BackgroundColor className={playingEnd ? "bg-white/25" : "bg-primary"}>
        <hgroup className="overflow-hidden">
          <h1 className="sr-only">ポッドキャスト百合『ユードットエフエム』</h1>
          <AnimatedLogo ref={el} visible={visible} ended={playingEnd} />
        </hgroup>

        <div className={clsx("mt-16", fadeInLater)}>
          <ScrollTo href="#main" className={clsx("block", "animate-bounce")}>
            <Icon
              name="24/ArrowDown"
              unsafeNonGuidelineScale={32 / 24}
              className={playingEnd ? "text-text-950" : "text-white"}
              aria-label="下にスクロール"
            />
          </ScrollTo>
        </div>

        {playingEnd && (
          <button type="button" onClick={onReplay}>
            リプレイ
          </button>
        )}
      </BackgroundColor>
    </section>
  );
});

/**
 * Componentを再マウントしてアニメーションを最初から再生されられるようにするHoC
 */
function withReplay<T extends {}>(
  Component: React.ComponentType<{ onReplay(): void }>,
) {
  return function WithReplay(props: T) {
    const [replayCount, replay] = useReducer((count) => count + 1, 0);

    // keyを更新して再マウントさせれば、それはリプレイの挙動になるはず
    return <Component key={replayCount} {...props} onReplay={replay} />;
  };
}

const BackgroundImage = ({ zoomed = false }) => (
  <div
    className={clsx(
      "w-full",
      "h-screen",
      "duration-800",
      zoomed ? "scale-105" : "scale-100",
      "bg-[url('/jumbotron_bg.jpg')]",
      ["bg-size-[600px_auto]", "screen2:bg-size-[auto_1200px]"],
      "bg-center",
      "bg-no-repeat",
    )}
  />
);

const BackgroundColor = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={clsx(
      "absolute",
      "inset-0",
      "duration-400",
      "w-full",
      "h-full",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "px-12",
      className,
    )}
  >
    {children}
  </div>
);
