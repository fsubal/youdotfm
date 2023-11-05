import { notFound } from "next/navigation";
import characters from "../data";
import { Layout } from "@/components/Layout";

export default function CharacterPage({
  params,
}: {
  params: { slug: string };
}) {
  const normalizedSlug = decodeURIComponent(params.slug);

  const character = characters.find(({ slug }) => slug === normalizedSlug);
  if (!character) {
    return notFound();
  }

  return (
    <Layout>
      <h1>キャラクター</h1>
      <h2>{character.name}</h2>
    </Layout>
  );
}
