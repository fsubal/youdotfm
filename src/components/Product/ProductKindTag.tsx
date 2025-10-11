import clsx from "clsx";
import { Product, ProductKind } from "../../domains/Product/model";
import { Icon } from "../Icon";

interface Props {
  kind: ProductKind;
}

const tagClass = clsx(
  "inline-flex",
  "items-center",
  "text-text-500",
  "font-bold",
  "text-sm",
);

export function ProductKindTag({ kind }: Props) {
  switch (kind) {
    case "doujinshi": {
      return (
        <span className={tagClass}>
          <Icon name="16/Book" unsafeNonGuidelineScale={24 / 16} />
          同人誌
        </span>
      );
    }

    case "merch": {
      return (
        <span className={tagClass}>
          <Icon name="24/Fashion" />
          グッズ
        </span>
      );
    }
  }
}

export function ProductBreadCrumb({ product }: { product: Product }) {
  return (
    <div
      className={clsx(
        "hidden",
        "screen2:flex",
        "items-center",
        "mb-16",
        "overflow-auto",
        "whitespace-nowrap",
      )}
    >
      <ProductKindTag kind={product.kind} />
      <Icon name="24/Next" className="mx-4" unsafeNonGuidelineScale={16 / 24} />
      <span className="text-sm">{product.title}</span>
    </div>
  );
}
