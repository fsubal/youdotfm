import clsx from "clsx";
import { Character } from "../../domains/Character/model";
import { simpleFormat } from "../../utils/text";

interface Props {
  character: Character;
}

export function CharacterListItem({ character }: Props) {
  return (
    <div
      data-role="character-list-item"
      className={clsx(
        "flex",
        "flex-col",
        "screen2:flex-row",
        "gap-24",
        "py-24",
      )}
    >
      <div
        className={clsx(
          "screen2:w-440",
          "bg-text-50/50",
          "aspect-square",
          "screen2:aspect-[5/4]",
          "screen2:aspect-square",
          "rounded",
        )}
      >
        <img
          className={clsx("block", "w-full", "aspect-square", "object-contain")}
          src={character.thumbnail.src}
          alt={character.thumbnail.alt}
        />
      </div>
      <div>
        <hgroup className={clsx("flex", "gap-16", "items-center", "mb-8")}>
          <h2 className={clsx("font-serif", "text-2xl", "text-text-950")}>
            {character.name.japanese}
          </h2>
          <p className={clsx("text-primary", "italic")}>
            {character.name.roman}
          </p>
        </hgroup>

        {character.name.screen && (
          <dl
            className={clsx(
              "text-text-500",
              "inline-flex",
              "text-sm",
              "font-bold",
              "my-8",
            )}
          >
            <dt className={clsx("after:content-[':']", "mr-4")}>
              ハンドルネーム
            </dt>
            <dd>{character.name.screen}</dd>
          </dl>
        )}

        <div
          className={clsx(
            "text-base",
            "leading-relaxed",
            "tracking-wider",
            "[&_p+p]:mt-16",
            "[&_br:last-child]:hidden",
          )}
        >
          {simpleFormat(character.profile)}
        </div>
      </div>
    </div>
  );
}
