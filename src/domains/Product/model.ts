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
