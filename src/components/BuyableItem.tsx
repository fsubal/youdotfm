import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  shopUrl: string;
  imageUrl: string;
  price: number | RangeOf<number>;
}

const JPY = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

export function BuyableItem({
  name,
  description,
  shopUrl,
  imageUrl,
  price,
}: Props) {
  return (
    <Link
      data-role="buyable-item"
      href={shopUrl}
      target="_blank"
      className={clsx(
        "group",
        "flex",
        "flex-col",
        "text-slate-900",
        "transition-colors",
        ["bg-white", "hover:bg-white-hover"],
        "border",
        "rounded-xl",
        "overflow-hidden"
      )}
    >
      <div className={clsx("overflow-hidden", "w-full", "h-48", "tablet:h-64")}>
        <Image
          src={imageUrl}
          alt=""
          width={200}
          height={300}
          className={clsx(
            "block",
            "bg-slate-500",
            "w-full",
            "h-full",
            "object-cover",
            "transition-transform",
            "group-hover:scale-110"
          )}
        />
      </div>

      <div className={clsx("py-4", "px-4", "tablet:px-6")}>
        <h3 className={clsx("font-bold", "group-hover:underline")}>{name}</h3>
        <p
          className={clsx(
            "line-clamp-2",
            "text-slate-500",
            "text-sm",
            "h-[2lh]"
          )}
        >
          {description}
        </p>
        <PriceLabel>{price}</PriceLabel>
      </div>
    </Link>
  );
}

const priceLabelClass = clsx("font-bold", "text-primary");

function PriceLabel({ children }: { children: number | RangeOf<number> }) {
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
