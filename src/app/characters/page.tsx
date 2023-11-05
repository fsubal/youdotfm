import Link from "next/link";
import characters from "./data";
import { Layout } from "@/components/Layout";

export default function CharactersPage() {
  return (
    <Layout>
      <h1>キャラクター</h1>
      <div className="lead">
        『ユードットエフエム』の登場キャラクターを紹介します。
      </div>
      {characters.map((character) => (
        <Link key={character.slug} href={`/characters/${character.slug}#main`}>
          {character.name}
        </Link>
      ))}
    </Layout>
  );
}
