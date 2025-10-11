import { type Character } from "../domains/Character/model";

interface Props {
  characters: Character[];
}

export function CharacterChips({ characters }: Props) {
  return (
    <div data-role="character-chips" className="space-x-16">
      {characters.map((character) => (
        <div key={character.slug}>{character.name.japanese}</div>
      ))}
    </div>
  );
}
