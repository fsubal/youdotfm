import clsx from "clsx";
import { AnimatedLogo } from "./AnimatedLogo/AnimatedLogo";
import { ScrollTo } from "./ScrollTo";

export function Jumbotron() {
  return (
    <section
      data-role="jumbotron"
      className={clsx(
        "bg-green-300",
        "h-screen",
        "w-full",
        "flex",
        "items-center",
        "justify-center"
      )}
    >
      <hgroup>
        <h1 className="sr-only">ユードットエフエム</h1>
        <AnimatedLogo />
      </hgroup>

      <ScrollTo href="#main">↓</ScrollTo>
    </section>
  );
}
