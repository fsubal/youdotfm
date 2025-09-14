import { Character } from "./model";

export const eri: Character = {
  slug: "eri_takeuchi",
  fullName: {
    japanese: "竹内エリ",
    roman: "Eri Takeuchi",
  },
  thumbnail: { alt: "url", url: new URL("/example.jpeg") },
  portrait: { alt: "url", url: new URL("/example.jpeg") },
  profile: "主人公。シヲリのことが好き。",
};

export const shiori: Character = {
  slug: "shiori_chiba",
  fullName: {
    japanese: "千葉シヲリ",
    roman: "Shiori Chiba",
  },
  thumbnail: { alt: "url", url: new URL("/example.jpeg") },
  portrait: { alt: "url", url: new URL("/example.jpeg") },
  profile: "エリをポッドキャストに誘った人。ライター。",
};

export default [eri, shiori] satisfies Character[];
