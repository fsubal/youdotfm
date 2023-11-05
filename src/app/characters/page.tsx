import Link from "next/link";
import Image from "next/image";
import characters, { type Character } from "./data";
import { Layout } from "@/components/Layout";
import clsx from "clsx";

export default function CharactersPage() {
  return (
    <Layout>
      <h1>キャラクター</h1>
      <div className="lead">
        『ユードットエフエム』の登場キャラクターを紹介します。
      </div>
      <div className={clsx("space-x-4", "not-prose")}>
        {characters.map((character) => (
          <CharacterChip key={character.slug} character={character} />
        ))}
      </div>
    </Layout>
  );
}

function CharacterChip({ character }: { character: Character }) {
  return (
    <Link
      key={character.slug}
      href={`/characters/${character.slug}#main`}
      className={clsx(
        "rounded-full",
        "border",
        "bg-white",
        "py-3",
        "px-4",
        "inline-flex",
        "items-center",
        "gap-2",
        "transition-colors",
        ["hover:underline", "hover:bg-white-hover", "active:bg-white-active"]
      )}
    >
      <Image
        className={clsx("inline-block", "rounded-full")}
        src={character.iconUrl}
        width={24}
        height={24}
        alt={`${character.name}のアイコン`}
      />
      {character.name}
    </Link>
  );
}
