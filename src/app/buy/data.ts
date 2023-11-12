import "server-only";

interface BuyableItem {
  id: number;
  name: string;
  description: string;
  shopUrl: string;
  imageUrl: string;

  /**
   * numberを書いたら固定金額、長さ1の配列で書けば最低金額、長さ2の配列で書けば金額の範囲を表す
   *
   * @example
   * ```ts
   * price: 200 //=> 200円
   * price: [200] //=> 200円〜
   * price: [200, 300] //=> 200円〜300円
   * ```
   */
  price: number | RangeOf<number>;
}

const DATA = [
  {
    name: "ユードットエフエム (1)",
    description: "エリとシヲリの出会い、2人が番組を始めるまでのお話",
    shopUrl: "https://umbrellahead.booth.pm",
    price: 500,
    imageUrl: "/example.jpeg",
  },
  {
    name: "ユードットエフエム (2)",
    description: "エリとシヲリの出会い、2人が番組を始めるまでのお話",
    shopUrl: "https://umbrellahead.booth.pm",
    price: 500,
    imageUrl: "/example.jpeg",
  },
  {
    name: "シヲリTシャツ",
    description:
      "シヲリのイラストのTシャツです（※価格はサイズによって異なります）",
    shopUrl: "https://umbrellahead.booth.pm",
    price: [2000],
    imageUrl: "/tshirt.jpeg",
  },
] satisfies Omit<BuyableItem, "id">[];

export default DATA.map((item, index) => ({
  ...item,
  id: index + 1,
})).reverse() satisfies BuyableItem[];
