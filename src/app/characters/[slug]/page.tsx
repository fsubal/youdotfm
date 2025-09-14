import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import {
  characters,
  findCharacterBySlug,
} from "../../../domains/Character/seeds";

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
      <pre>{JSON.stringify(character)}</pre>
    </Layout>
  );
}
