"use client";

import "@charcoal-ui/icons";

interface Props extends Omit<JSX.IntrinsicElements["pixiv-icon"], "class"> {
  className?: string;
}

export function Icon({ className, ...props }: Props) {
  return (
    <pixiv-icon {...props} class={className} role="img" data-role="icon" />
  );
}
