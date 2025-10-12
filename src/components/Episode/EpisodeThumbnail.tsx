import clsx from "clsx";
import { Episode } from "../../domains/Episode/model";
import { Icon } from "../Icon";

interface Props {
  episode: Episode;
}

export function EpisodeThumbnail({ episode }: Props) {
  return (
    <div
      className={clsx(
        "screen2:w-272",
        "screen3:w-440",
        "bg-text-50/50",
        "rounded",
        "relative",
        "border",
        "rounded",
        "overflow-hidden",
      )}
    >
      {episode.images.map((image) => (
        <img
          key={image.src}
          className={clsx(
            "block",
            "w-full",
            "h-full",
            "aspect-[5/4]",
            "screen2:aspect-square",
            "object-cover",
          )}
          src={image.src}
          alt={image.alt}
        />
      ))}

      {episode.pixivArtwork && (
        <div
          className={clsx(
            "absolute",
            "inset-x-0",
            "bottom-0",
            "py-16",
            "flex",
            "justify-center",
            "bg-gradient-to-t",
            "from-white",
            "to-transparent",
          )}
        >
          <a
            className={clsx(
              "whitespace-nowrap",
              ["inline-flex", "justify-center"],
              "rounded-full",
              ["py-8", "px-32"],
              "font-bold",
              "bg-black",
              "text-white",
              "text-sm",
            )}
            href={episode.pixivArtwork.url}
            target="_blank"
            rel="noopener"
          >
            <Icon name="24/Manga" className="mr-4" />
            pixivでサンプルを読む
          </a>
        </div>
      )}
    </div>
  );
}
