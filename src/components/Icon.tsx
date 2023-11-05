"use client";

import "@charcoal-ui/icons";

interface Props
  extends Omit<
    JSX.IntrinsicElements["pixiv-icon"],
    "class" | "unsafe-non-guideline-scale"
  > {
  className?: string;
  unsafeNonGuidelineScale?: number;
}

/**
 * @see https://charcoal-web.pixiv.design/@charcoal-ui/react/Icon/
 */
export function Icon({ className, unsafeNonGuidelineScale, ...props }: Props) {
  return (
    <pixiv-icon
      {...props}
      class={className}
      role="img"
      data-role="icon"
      style={
        unsafeNonGuidelineScale
          ? // @ts-expect-error
            { "--scale": unsafeNonGuidelineScale }
          : undefined
      }
      unsafe-non-guideline-scale={unsafeNonGuidelineScale}
    />
  );
}
