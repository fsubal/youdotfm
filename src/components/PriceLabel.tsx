import { JPYValue, JPYRange, JPY } from "../utils/intl";

export function PriceLabel({
  className,
  children,
}: {
  className?: string;
  children: JPYValue | JPYRange;
}) {
  if (Array.isArray(children)) {
    const [from, to] = children;

    return (
      <span className={className}>
        {JPY.format(from)}〜{to ? JPY.format(to) : undefined}
      </span>
    );
  }

  return <span className={className}>{JPY.format(children)}</span>;
}
