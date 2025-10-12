import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { CharacterListItem } from "../../components/Character/CharacterListItem";
import { characters } from "../../domains/Character/seeds";
import clsx from "clsx";

export default function CharactersPage() {
  return (
    <Layout>
      <SectionTitle subheading="Character">キャラクター紹介</SectionTitle>

      <h2 className={clsx("font-bold", "text-lg")}>
        「📻️ペンときどき音楽」パーソナリティ
      </h2>
      <div className="divide-y">
        {characters.map((character) => (
          <CharacterListItem key={character.slug} character={character} />
        ))}
      </div>
    </Layout>
  );
}
