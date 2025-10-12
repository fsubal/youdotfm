import { notFound } from "next/navigation";
import { Layout } from "../../../components/Layout";
import {
  characters,
  findCharacterBySlug,
} from "../../../domains/Character/seeds";
import { SectionTitle } from "../../../components/SectionTitle";
import { CharacterListItem } from "../../../components/Character/CharacterListItem";
import { ResolvingMetadata } from "next";

export function generateStaticParams(): StaticParams<"/characters/[slug]"> {
  return characters.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/characters/[slug]">,
  parent: ResolvingMetadata,
) {
  const { slug } = await params;
  const { title } = await parent;

  return {
    title: {
      template: title!.template,
      default: findCharacterBySlug(slug)?.name,
    },
  };
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
      <SectionTitle subheading="Characters" backToHref="/characters">
        キャラクター
      </SectionTitle>
      <CharacterListItem character={character} />
    </Layout>
  );
}
