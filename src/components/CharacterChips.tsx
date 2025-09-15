import { type Character } from "../domains/Character/model";
import { VarDump } from "./VarDump";

interface Props {
  characters: Character[];
}

export function CharacterChips({ characters }: Props) {
  return (
    <div data-role="character-chips" className="space-x-16">
      {characters.map((character) => (
        <VarDump key={character.slug}>{character}</VarDump>
      ))}
    </div>
  );
}
