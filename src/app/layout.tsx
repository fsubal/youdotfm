import { ThemeColor } from "../utils/theme";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata = {
  title: {
    template: "%s - ポッドキャスト百合『ユードットエフエム』公式サイト",
    default: "ホームページ",
  },
  description: "「語って、話して、好きになる。」ポッドキャスト百合",
  openGraph: {
    type: "website",
    siteName: "ポッドキャスト百合『ユードットエフエム』公式サイト",
    images: { url: "https://youdot.fm/og_image.png" },
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
