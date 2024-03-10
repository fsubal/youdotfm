import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata = {
  title: "ユードットエフエム",
  description: "「語って、話して、好きになる。」ポッドキャスト百合",
} satisfies Metadata;

export const viewport: Viewport = {
  themeColor: "#86efac",
};

// TODO: children を受け取ると公開できる
export default function RootLayout(
  // { children }: React.PropsWithChildren
) {
  return (
    <html lang="ja">
      <body>It works!</body>
    </html>
  );
}
