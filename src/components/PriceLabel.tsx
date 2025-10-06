import clsx from "clsx";
import { JPYValue, JPYRange, JPY } from "../utils/intl";

const priceLabelClass = clsx("font-bold", "text-primary");

export function PriceLabel({ children }: { children: JPYValue | JPYRange }) {
  if (Array.isArray(children)) {
    const [from, to] = children;

    return (
      <div className={priceLabelClass}>
        {JPY.format(from)}〜{to ? JPY.format(to) : undefined}
      </div>
    );
  }

  return <div className={priceLabelClass}>{JPY.format(children)}</div>;
}
