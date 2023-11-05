export interface Character {
  name: string;
  slug: string;
  description: string;
  iconUrl: string;
}

export const eri: Character = {
  name: "竹内エリ",
  slug: "eri_takeuchi",
  description: "主人公。シヲリのことが好き。",
  iconUrl: "/example.jpeg",
};

export const shiori: Character = {
  name: "千葉シヲリ",
  slug: "shiori_chiba",
  description: "エリをポッドキャストに誘った人。ライター。",
  iconUrl: "/example.jpeg",
};

export default [eri, shiori] satisfies Character[];
