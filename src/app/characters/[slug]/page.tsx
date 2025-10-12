import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import {
  characters,
  findCharacterBySlug,
} from "../../../domains/Character/seeds";
import { SectionTitle } from "../../../components/SectionTitle";

export function generateStaticParams(): StaticParams<"/characters/[slug]"> {
  return characters.map(({ slug }) => ({ slug }));
}

export default async function CharacterPage({
  params,
}: PageProps<"/characters/[slug]">) {
  const { slug } = await params;
  const character = findCharacterBySlug(slug);
  if (!character) {
    return notFound();
  }

  return (
    <Layout>
      <SectionTitle subheading="Characters">キャラクター</SectionTitle>
      <div>{character.name.japanese}</div>
    </Layout>
  );
}
