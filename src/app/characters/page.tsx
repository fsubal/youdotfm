import characters from "./data";
import { Layout } from "@/components/Layout";
import clsx from "clsx";
import { Chip } from "@/components/Chip";

export default function CharactersPage() {
  return (
    <Layout>
      <h1>キャラクター</h1>
      <div className="lead">
        『ユードットエフエム』の登場キャラクターを紹介します。
      </div>
      <div className={clsx("space-x-4", "not-prose")}>
        {characters.map((character) => (
          <Chip
            key={character.slug}
            href={`/characters/${character.slug}#main`}
            imageUrl={character.iconUrl}
            alt={`${character.name}のアイコン`}
          >
            {character.name}
          </Chip>
        ))}
      </div>
    </Layout>
  );
}
