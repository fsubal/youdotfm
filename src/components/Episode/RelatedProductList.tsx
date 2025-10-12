import clsx from "clsx";
import { Product } from "../../domains/Product/model";
import Link from "next/link";
import { ProductKindTagIcon } from "../Product/ProductKindTag";

interface Props {
  products: Product[];
}

export function RelatedProductList({ products }: Props) {
  return (
    <>
      <h3 className={clsx("font-serif", "text-xl", "mb-8", "text-text-950")}>
        このエピソードが収録された商品
      </h3>
      {products.map((product) => (
        <div key={product.slug}>
          <Link
            href={`/shop/products/${product.slug}#main`}
            className={clsx(
              "inline-flex",
              "items-center",
              "underline",
              "text-primary",
              "text-sm",
            )}
          >
            <ProductKindTagIcon kind={product.kind} />
            {product.title}
          </Link>
        </div>
      ))}
    </>
  );
}
