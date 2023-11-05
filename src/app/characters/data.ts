interface Character {
  name: string;
  slug: string;
  description: string;
}

export default [
  {
    name: "竹内エリ",
    slug: "eri_takeuchi",
    description: "主人公。シヲリのことが好き。",
  },
  {
    name: "千葉シヲリ",
    slug: "shiori_chiba",
    description: "エリをポッドキャストに誘った人。ライター。",
  },
] satisfies Character[];
