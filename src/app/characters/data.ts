interface Character {
  name: string;
  slug: string;
  description: string;
}

export const eri: Character = {
  name: "竹内エリ",
  slug: "eri_takeuchi",
  description: "主人公。シヲリのことが好き。",
};

export const shiori: Character = {
  name: "千葉シヲリ",
  slug: "shiori_chiba",
  description: "エリをポッドキャストに誘った人。ライター。",
};

export default [eri, shiori] satisfies Character[];
