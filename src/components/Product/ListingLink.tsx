import clsx from "clsx";
import { Listing } from "../../domains/Product/model";
import { Icon } from "../Icon";
import { Unreachable } from "../../utils/unreachable";

interface Props {
  listing: Listing;
}

export function ListingLink({ listing }: Props) {
  switch (listing.shopKind) {
    case "BOOTH": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx("bg-rose-600", "active:bg-rose-700", "text-white")}
        >
          BOOTHで購入
        </ListingLinkBase>
      );
    }

    case "Melonbooks": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx(
            "bg-emerald-500",
            "active:bg-emerald-600",
            "text-white",
          )}
        >
          メロンブックスで購入
        </ListingLinkBase>
      );
    }

    case "Kindle": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx(
            "bg-amber-300",
            "active:bg-amber-400",
            "text-text-950",
          )}
        >
          Amazon（Kindle）で購入
        </ListingLinkBase>
      );
    }

    case "LineManga": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx("bg-teal-300", "active:bg-teal-400", "text-text-950")}
        >
          LINEマンガで読む
        </ListingLinkBase>
      );
    }

    case "ComicCmoa": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx(
            "bg-orange-500",
            "active:bg-orange-600",
            "text-white",
          )}
        >
          コミックシーモアで読む
        </ListingLinkBase>
      );
    }

    default: {
      return Unreachable.assert(listing as never);
    }
  }
}

function ListingLinkBase({
  url,
  className,
  children,
}: React.PropsWithChildren<{ url: string; className?: string }>) {
  return (
    <a
      href={url}
      className={clsx(
        "flex",
        "whitespace-nowrap",
        "justify-center",
        "rounded-full",
        "py-12",
        "px-40",
        "font-bold",
        className,
      )}
      target="_blank"
      rel="noopener"
    >
      <Icon name="24/Shopping" className="mr-4" />
      {children}
    </a>
  );
}
