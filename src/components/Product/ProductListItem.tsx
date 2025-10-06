import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../domains/Product/model";
import { PriceLabel } from "../PriceLabel";

interface Props {
  product: Product;
}

export function ProductListItem({ product }: Props) {
  const [mainImage] = product.images;

  return (
    <Link
      data-role="buyable-item"
      href={`/shop/products/${product.slug}#main`}
      className={clsx(
        "group",
        "flex",
        "flex-col",
        "text-gr",
        "transition-colors",
        ["bg-white", "hover:bg-surface"],
        "border",
        "rounded-xl",
        "overflow-hidden",
      )}
    >
      <div
        className={clsx("overflow-hidden", "w-full", "h-48", "screen2:h-64")}
      >
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={200}
          height={300}
          className={clsx(
            "block",
            "bg-text-50",
            "w-full",
            "h-full",
            "object-cover",
            "transition-transform",
            "group-hover:scale-110",
          )}
        />
      </div>

      <div className={clsx("py-16", "px-16", "screen2:px-24")}>
        <h3 className={clsx("font-bold", "group-hover:underline")}>
          {product.title}
        </h3>
        <p
          className={clsx("line-clamp-2", "text-text-50", "text-sm", "h-[2lh]")}
        >
          {product.description}
        </p>
        <PriceLabel>{product.defaultPrice}</PriceLabel>
      </div>
    </Link>
  );
}
