import { CharacterChips } from "../../components/CharacterChips";
import { Layout } from "../../components/Layout";
import characters from "../../domains/Character/seeds";

export default function CharactersPage() {
  return (
    <Layout>
      <h1>キャラクター</h1>
      <div className="lead">
        『ユードットエフエム』の登場キャラクターを紹介します。
      </div>
      <div className="not-prose">
        <CharacterChips characters={characters} />
      </div>
    </Layout>
  );
}
