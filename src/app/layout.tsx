import { ThemeColor } from "../utils/theme";
import { RelativeURL } from "../utils/url/internal";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata = {
  title: {
    template: "%s - ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
    default: "ホームページ - ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
  },
  description:
    "「語って、話して、好きになる。」ポッドキャスト百合漫画『ユードットエフエム』の公式サイト。作品情報や登場人物、最新ニュースを掲載。",
  keywords: [
    "ユードットエフエム",
    "ポッドキャスト",
    "漫画",
    "コミック",
    "百合",
    "公式サイト",
  ],
  openGraph: {
    type: "website",
    siteName: "ポッドキャスト百合漫画『ユードットエフエム』公式サイト",
    description:
      "「語って、話して、好きになる。」ポッドキャスト百合漫画『ユードットエフエム』の公式サイト。作品情報や登場人物、最新ニュースを掲載。",
    images: { url: new RelativeURL("/og_image.png").toURL() },
  },
} satisfies Metadata;

export const viewport: Viewport = {
  themeColor: ThemeColor.Primary,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
