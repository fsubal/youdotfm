import type { JsonLdDocument } from "jsonld";
import {
  getAllListings,
  getKindLabel,
  getMaximumPriceOfProduct,
  getMinimumPriceOfProduct,
  getShareUrl as getProductShareUrl,
  ListingStatus,
  type Product,
} from "../domains/Product/model";
import {
  Episode,
  formatTitle,
  getShareUrl as getEpisodeShareUrl,
} from "../domains/Episode/model";
import { characters as characterSeeds } from "../domains/Character/seeds";
import { findShopByKind } from "../domains/Shop/seeds";
import { Unreachable } from "../utils/unreachable";
import { getMinimumPrice } from "../utils/intl";
import { RelativeURL } from "../utils/url/internal";

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

export function ComicSeriesJsonLd() {
  const seriesUrl = new RelativeURL("/").toURL().toString();
  const episodesUrl = RelativeURL.withDefaultHash("/episodes")
    .toURL()
    .toString();
  const productsUrl = RelativeURL.withDefaultHash("/shop")
    .toURL()
    .toString();
  const newsUrl = RelativeURL.withDefaultHash("/news")
    .toURL()
    .toString();
  const shareImage = new RelativeURL("/og_image.png").toURL().toString();
  const discussionUrl = "https://marshmallow-qa.com/youdotfm";
  const description =
    "「語って、話して、好きになる。」ポッドキャスト百合漫画『ユードットエフエム』の公式サイト。作品情報や登場人物、最新ニュースを掲載。";
  const characters = characterSeeds.map((character) => {
    const alternateName = [
      character.name.roman,
      character.name.screen,
    ].filter((name): name is string => Boolean(name));
    const url = new RelativeURL(`/characters/${character.slug}`)
      .toURL()
      .toString();
    const image = new RelativeURL(character.portrait.src).toURL().toString();
    const profile = character.profile.replace(/\s*\n+\s*/g, " ").trim();

    return {
      "@type": "Character",
      name: character.name.japanese,
      alternateName: alternateName.length ? alternateName : undefined,
      url,
      image,
      description: profile,
    };
  });

  return (
    <JsonLd>
      {{
        "@context": "https://schema.org",
        "@type": "ComicSeries",
        name: "ユードットエフエム",
        description,
        url: seriesUrl,
        mainEntityOfPage: seriesUrl,
        image: [shareImage],
        inLanguage: "ja",
        genre: ["百合", "漫画", "ポッドキャスト", "ラジオ", "ネットラジオ", "社会人百合"],
        isAccessibleForFree: true,
        discussionUrl,
        creator: {
          "@type": "Person",
          name: "藤秋すばる",
          alternateName: "Subal Fujiaki",
          sameAs: "https://x.com/f_subal",
        },
        publisher: {
          "@type": "Organization",
          name: "Umbrellahead",
        },
        character: characters,
        sameAs: [
          "https://www.pixiv.net/user/7126141/series/240402",
          "https://umbrellahead.booth.pm/item_lists/8bNT3aa3",
          "https://youdotfm.fanbox.cc/",
        ],
        hasPart: [
          {
            "@type": "CreativeWorkSeason",
            name: "Episodes",
            url: episodesUrl,
          },
          {
            "@type": "ProductCollection",
            name: "Shop",
            url: productsUrl,
          },
          {
            "@type": "CreativeWork",
            name: "News",
            url: newsUrl,
          },
        ],
      }}
    </JsonLd>
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
        url: getProductShareUrl(product).href,
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

export function EpisodeJsonLd({ episode }: { episode: Episode }) {
  const url = getEpisodeShareUrl(episode);
  const imageUrls = episode.images.map(({ src }) =>
    new RelativeURL(src).toURL()
  );

  return (
    <JsonLd>
      {{
        "@context": "https://schema.org",
        "@type": "ComicStory",
        name: formatTitle(episode),
        description: episode.description,
        url: url.toString(),
        mainEntityOfPage: url.toString(),
        image: imageUrls,
        inLanguage: "ja",
        isPartOf: {
          "@type": "CreativeWorkSeries",
          name: "ユードットエフエム",
          url: RelativeURL.withDefaultHash("/episodes").toURL(),
        },
        sameAs: episode.pixivArtwork ? [episode.pixivArtwork.url] : undefined,
      }}
    </JsonLd>
  );
}
