import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata = {
  title: "ユードットエフエム",
  description: "「語って、話して、好きになる。」ポッドキャスト百合",
} satisfies Metadata;

export const viewport: Viewport = {
  themeColor: "#226cff",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
