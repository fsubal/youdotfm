import { Episode } from "./model";

export default [
  {
    slug: "1",
    numbering: "1話",
    title: "第1話 象とうわばみ",
    description: "",
    images: [{ alt: "url", url: new URL("/example.jpeg") }],
    pixivArtworkUrl: { url: new URL("https://www.pixiv.net/") },
  },
] satisfies Episode[];
