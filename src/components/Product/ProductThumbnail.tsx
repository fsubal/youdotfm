import clsx from "clsx";
import { ImageSource } from "../../domains/ImageSource/model";

interface Props {
  className?: string;
  images: ImageSource[];
}

export function ProductThumbnail({ className, images }: Props) {
  return (
    <div className={className}>
      {images.map((image) => (
        <div
          key={image.src}
          className={clsx(
            "w-full",
            "bg-text-50/50",
            "aspect-square",
            "rounded",
          )}
        >
          <img
            className={clsx("block", "w-full", "h-full", "object-contain")}
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
