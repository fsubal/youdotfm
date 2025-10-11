import clsx from "clsx";
import { Listing } from "../../domains/Product/model";
import { Icon } from "../Icon";

interface Props {
  listing: Listing;
}

export function ShopPurchaseLink({ listing }: Props) {
  switch (listing.shopKind) {
    case "BOOTH": {
      return (
        <PurchaseLinkBase
          url={listing.url}
          className={clsx("bg-red-500", "text-white")}
        >
          BOOTHで購入
        </PurchaseLinkBase>
      );
    }
    case "Melonbooks": {
      return (
        <PurchaseLinkBase
          url={listing.url}
          className={clsx("bg-green-600", "text-white")}
        >
          メロンブックスで購入
        </PurchaseLinkBase>
      );
    }
    case "Kindle": {
      return (
        <PurchaseLinkBase
          url={listing.url}
          className={clsx("bg-amber-300", "text-text-950")}
        >
          Amazon（Kindle）で購入
        </PurchaseLinkBase>
      );
    }
  }
}

function PurchaseLinkBase({
  url,
  className,
  children,
}: React.PropsWithChildren<{ url: string; className?: string }>) {
  return (
    <a
      href={url}
      className={clsx(
        "inline-flex",
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
