import { Product, ProductKind } from "./model";

export default [
  {
    slug: "sample-product",
    title: "サンプル商品",
    kind: [ProductKind.Doujinshi],
    variants: [
      { slug: "paper", name: "紙版" },
      { slug: "digital", name: "電子版" },
    ],
    images: [
      {
        url: new URL(
          "https://placehold.jp/300x400.png?text=Sample+Product+Image",
        ),
        alt: "Sample Product Image",
      },
    ],
    description: "これはサンプル商品の説明です。",
  },
] satisfies Product[];
