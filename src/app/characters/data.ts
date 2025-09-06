import "server-only";
import { Character } from "../../domains/Character/model";

export const eri: Character = {
  name: "竹内エリ",
  roman: "Eri Takeuchi",
  slug: "eri_takeuchi",
  description: "主人公。シヲリのことが好き。",
  iconUrl: "/example.jpeg",
  portraitUrl: "/eri.png",
  birthday: "1996年8月17日",
  works:
    "音楽系のライター。インタビューがメイン。\nメールとExcelに囲まれた仕事",
  favoriteMusic:
    "親の聴いてた80年代邦楽。\nインディーロック、90年代オルタナなど。",
  talkingStyle:
    "みんなが口にしないような疑問を投げたりする。\n外から見えないけど意外と変なことを考えている。\n内言の口が悪い。",
  spotifyPlaylistUrl:
    "https://open.spotify.com/playlist/6JSZkYHjoCeqvE7K361GXo",
};

export const shiori: Character = {
  name: "千葉シヲリ",
  roman: "Shiori Chiba",
  slug: "shiori_chiba",
  description: "エリをポッドキャストに誘った人。ライター。",
  iconUrl: "/example.jpeg",
  portraitUrl: "/shiori.png",
  birthday: "1995年12月18日",
  works:
    "Webメディアのライター。\nサブカルから専門家へのインタビューまでなんでも。",
  favoriteMusic: "アイドルとガールズバンド。楽曲派",
  talkingStyle:
    "頭の回転というか、瞬発力が高めなので主に聞き手を務める。\nエリが性格の悪いことを言ったときに止めるなど活動は多岐にわたる",
  spotifyPlaylistUrl:
    "https://open.spotify.com/playlist/71Gp3J5TA9kJJ5O1UrYX6o",
};

export default [eri, shiori] satisfies Character[];
