interface Character {
  name: string;
  slug: string;
  description: string;
}

export default [
  {
    name: "竹内エリ",
    slug: "kei2_0817",
    description: "主人公。シヲリのことが好き。",
  },
  {
    name: "千葉シヲリ",
    slug: "ciwoli_c",
    description: "エリをポッドキャストに誘った人。ライター。",
  },
] satisfies Character[];
