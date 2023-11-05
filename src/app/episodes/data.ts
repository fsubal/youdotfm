export interface Episode {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

const DATA = [
  {
    title: "第1話 象とうわばみ",
    description: "",
    url: "",
    thumbnailUrl: "/example.jpeg",
  },
] satisfies Omit<Episode, "id">[];

export default DATA.map((episode, index) => ({
  ...episode,
  id: index + 1,
})) satisfies Episode[];
