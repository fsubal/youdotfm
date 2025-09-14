function withUtmParams(url: string) {
  const urlObj = new URL(url);

  urlObj.searchParams.set("utm_source", "youdotfm");
  urlObj.searchParams.set("utm_medium", "referral");
  urlObj.searchParams.set("utm_campaign", "outbound_link");

  return urlObj.toString();
}

/**
 * 外部のリンクを貼るときはここを経由してリダイレクトする
 *
 * そうするとCloudflareでクリック数の計測ができる
 */
export const OUTBOUND_LINKS = [
  {
    source: "/outbound/x_twitter/author",
    destination: withUtmParams("https://x.com/f_subal"),
  },
  {
    source: "/outbound/pixiv/author",
    destination: withUtmParams("https://www.pixiv.net/user/7126141"),
  },
  {
    source: "/outbound/pixiv/artwork/:id",
    destination: withUtmParams("https://www.pixiv.net/artworks/:id"),
  },
  {
    source: "/outbound/pixiv/series",
    destination: withUtmParams(
      "https://www.pixiv.net/user/7126141/series/240402",
    ),
  },
  {
    source: "/outbound/fanbox/:postId",
    destination: withUtmParams("https://youdotfm.fanbox.cc/posts/:postId"),
  },
  {
    source: "/outbound/booth/:itemId",
    destination: withUtmParams("https://umbrellahead.booth.pm/items/:itemId"),
  },
  {
    source: "/outbound/melonbooks/:productId",
    destination: withUtmParams(
      "https://www.melonbooks.co.jp/detail/detail.php?product_id=:productId",
    ),
  },
] as const;
