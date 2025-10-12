import clsx from "clsx";
import {
  getKindLabel,
  Product,
  ProductKind,
} from "../../domains/Product/model";
import { ProductList, ProductListItem } from "./ProductListItem";

interface Props {
  kind: ProductKind;
  relatedProducts: Product[];
}

export function RelatedProductList({ kind, relatedProducts }: Props) {
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
        {getKindLabel(kind)}の商品一覧
      </h2>
      <ProductList>
        {
          // デスクトップは最大3つ出る
          relatedProducts.slice(0, 3).map((product) => (
            <div
              key={product.slug}
              // モバイルは2つにしたい（スペースをとる）ので、乱暴な方法だが3番目以降の要素をdisplay: noneにする
              className={clsx(
                "[:nth-of-type(n+3)]:hidden",
                "[:nth-of-type(n+3)]:screen2:block",
              )}
            >
              <ProductListItem product={product} thumbnailFit="contain" />
            </div>
          ))
        }
      </ProductList>
    </div>
  );
}
