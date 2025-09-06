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
};

export const shiori: Character = {
  name: "千葉シヲリ",
  roman: "Shiori Chiba",
  slug: "shiori_chiba",
  description: "エリをポッドキャストに誘った人。ライター。",
  iconUrl: "/example.jpeg",
  portraitUrl: "/shiori.png",
  birthday: "1995年12月18日",
};

export default [eri, shiori] satisfies Character[];
