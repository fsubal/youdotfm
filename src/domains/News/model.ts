import z from "zod";
import { JapanDateTime } from "../../utils/datetime";

export const NewsKind = z.enum([
  /**
   * 同人イベント参加告知など
   */
  "DojinEvent",

  /**
   * 新商品発売告知
   */
  "NewProduct",

  /**
   * FANBOXの更新。実際にはDojinEventもFANBOXへのリンクであることが多いのだが、これは「その他の記事」枠
   */
  "FanboxPost",

  /**
   * メディア露出、雑誌掲載など
   */
  "Publicity",
]);

export type NewsKind = z.infer<typeof NewsKind>;

export const News = z.object({
  id: z.int().brand<"News">(),
  datetime: JapanDateTime,
  kind: NewsKind,
  title: z.string(),
  description: z.string(),
  url: z.string().optional(),
});

export type News = z.infer<typeof News>;

export function getShareUrl(news: Pick<News, "id">) {
  return new URL(`https://youdot.fm/news/${news.id}#main`);
}

export function getShareText(news: News) {
  return `${news.title} - #ユードットエフエム`;
}
