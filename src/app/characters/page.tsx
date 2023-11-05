import characters from "./data";
import { Layout } from "@/components/Layout";
import { CharacterChips } from "@/components/CharacterChips";

export default function CharactersPage() {
  return (
    <Layout>
      <h1>キャラクター</h1>
      <div className="lead">
        『ユードットエフエム』の登場キャラクターを紹介します。
      </div>
      <CharacterChips characters={characters} />
    </Layout>
  );
}
