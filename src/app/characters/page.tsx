import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { CharacterListItem } from "../../components/Character/CharacterListItem";
import { characters } from "../../domains/Character/seeds";
import { ResolvingMetadata } from "next";

export async function generateMetadata(_: unknown, parent: ResolvingMetadata) {
  const { title } = await parent;

  return {
    title: {
      template: title!.template,
      default: "キャラクター紹介",
    },
  };
}

export default function CharactersPage() {
  return (
    <Layout>
      <SectionTitle subheading="Character">キャラクター紹介</SectionTitle>

      <div className="divide-y">
        {characters.map((character) => (
          <CharacterListItem key={character.slug} character={character} />
        ))}
      </div>
    </Layout>
  );
}
