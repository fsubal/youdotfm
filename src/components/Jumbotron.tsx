import clsx from "clsx";
import { AnimatedLogo } from "./AnimatedLogo/AnimatedLogo";
import { ScrollTo } from "./ScrollTo";
import { Icon } from "./Icon";

export function Jumbotron() {
  return (
    <section
      data-role="jumbotron"
      className={clsx(
        "bg-green-300",
        "h-screen",
        "w-full",
        "flex",
        "flex-col",
        "items-center",
        "justify-center"
      )}
    >
      <hgroup className="overflow-hidden">
        <h1 className="sr-only">ユードットエフエム</h1>
        <AnimatedLogo />
      </hgroup>

      <div
        className={clsx(
          "opacity-0",
          "animate-[fadein_1s_linear_2s]",
          "[animation-fill-mode:forwards]"
        )}
      >
        <ScrollTo className={clsx("block", "animate-bounce")} href="#main">
          <Icon name="24/ArrowDown" aria-label="下にスクロール" />
        </ScrollTo>
      </div>
    </section>
  );
}
