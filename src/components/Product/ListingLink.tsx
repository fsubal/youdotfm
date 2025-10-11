import clsx from "clsx";
import { Listing } from "../../domains/Product/model";
import { Icon } from "../Icon";

interface Props {
  listing: Listing;
}

export function ListingLink({ listing }: Props) {
  switch (listing.shopKind) {
    case "BOOTH": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx("bg-rose-600", "text-white")}
        >
          BOOTHで購入
        </ListingLinkBase>
      );
    }

    case "Melonbooks": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx("bg-emerald-500", "text-white")}
        >
          メロンブックスで購入
        </ListingLinkBase>
      );
    }

    case "Kindle": {
      return (
        <ListingLinkBase
          url={listing.url}
          className={clsx("bg-amber-300", "text-text-950")}
        >
          Amazon（Kindle）で購入
        </ListingLinkBase>
      );
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
        "screen2:inline-flex",
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
