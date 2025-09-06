import "server-only";

const DATA = [
  {
    name: "ユードットエフエム (1)",
    description: "エリとシヲリの出会い、2人が番組を始めるまでのお話",
    shopUrl: "https://umbrellahead.booth.pm",
    price: 500,
    imageUrl: "/example.jpeg",
  },
  {
    name: "ユードットエフエム (2)",
    description: "エリとシヲリの出会い、2人が番組を始めるまでのお話",
    shopUrl: "https://umbrellahead.booth.pm",
    price: 500,
    imageUrl: "/example.jpeg",
  },
  {
    name: "シヲリTシャツ",
    description:
      "シヲリのイラストのTシャツです（※価格はサイズによって異なります）",
    shopUrl: "https://umbrellahead.booth.pm",
    price: [2000],
    imageUrl: "/tshirt.jpeg",
  },
] satisfies Omit<Product, "id">[];

export default DATA.map((item, index) => ({
  ...item,
  id: index + 1,
})).reverse() satisfies Product[];
