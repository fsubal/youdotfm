import type { JsonLdDocument } from "jsonld";
import {
  getAllListings,
  getKindLabel,
  getMaximumPriceOfProduct,
  getMinimumPriceOfProduct,
  getShareUrl,
  ListingStatus,
  type Product,
} from "../domains/Product/model";
import { findShopByKind } from "../domains/Shop/seeds";
import { Unreachable } from "../utils/unreachable";
import { getMinimumPrice } from "../utils/intl";

export function JsonLd<T extends JsonLdDocument>({
  children,
}: {
  children: T;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(children),
      }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const listings = getAllListings(product);

  return (
    <JsonLd>
      {{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.images.map(({ src }) => src),
        sku: product.slug,
        url: getShareUrl(product).href,
        brand: {
          "@type": "Brand",
          name: "ユードットエフエム",
        },
        category: getKindLabel(product.kind),
        releaseDate: product.publishedAt.toString(),
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "JPY",
          offerCount: listings.length,
          lowPrice: getMinimumPriceOfProduct(product),
          highPrice: getMaximumPriceOfProduct(product),
          offers: listings.map((listing) => {
            const { name, url } = findShopByKind(listing.shopKind) ?? {};

            return {
              "@type": "Offer",
              url: listing.url,
              priceCurrency: "JPY",
              price: getMinimumPrice(listing.price),
              availability: mapAvailability(listing.status),
              itemCondition: "https://schema.org/NewCondition",
              seller: {
                "@type": "Organization",
                name,
                url,
              },
            };
          }),
        },
      }}
    </JsonLd>
  );
}

function mapAvailability(status: ListingStatus) {
  switch (status) {
    case "available":
      return "https://schema.org/InStock";
    case "stockout":
      return "https://schema.org/OutOfStock";
    case "prerelease":
      return "https://schema.org/PreOrder";
    case "discontinued":
      return "https://schema.org/Discontinued";
    default:
      Unreachable.assert(status);
  }
}
