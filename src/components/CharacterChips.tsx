import { type Character } from "../domains/Character/model";

interface Props {
  characters: Character[];
}

export function CharacterChips({ characters }: Props) {
  return (
    <div data-role="character-chips" className="space-x-16">
      {characters.map((character) => (
        <pre key={character.slug}>{JSON.stringify(character)}</pre>
      ))}
    </div>
  );
}
