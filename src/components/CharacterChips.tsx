import clsx from "clsx";
import { Chip } from "./Chip";
import { Character } from "@/app/characters/data";

interface Props {
  characters: Character[];
}

export function CharacterChips({ characters }: Props) {
  return (
    <div data-role="character-chips" className={clsx("space-x-4", "not-prose")}>
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
  );
}
