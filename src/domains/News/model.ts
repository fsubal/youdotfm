export interface News {
  id: number;
  datetime: ISO8601;
  kind: NewsKind; // イベント出ます、商品発売、FANBOX更新、あと何かある…？
  title: string;
  description: string;
  url: URL;
}

export const enum NewsKind {
  /**
   * 同人イベント参加告知など
   */
  DojinEvent = "DojinEvent",

  /**
   * 新商品発売告知
   */
  NewProduct = "NewProduct",

  /**
   * FANBOXの更新。実際にはDojinEventもFANBOXへのリンクであることが多いのだが、これは「その他の記事」枠
   */
  FanboxPost = "FanboxPost",

  /**
   * メディア露出、雑誌掲載など
   */
  Publicity = "Publicity",
}
