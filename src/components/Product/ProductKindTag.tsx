import clsx from "clsx";
import { ProductKind } from "../../domains/Product/model";
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
