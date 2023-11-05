import "./globals.css";
import type { Metadata } from "next";
import { Jumbotron } from "@/components/Jumbotron";
import { Main } from "@/components/Main";

export const metadata = {
  title: "ユードットエフエム",
  description: "ポッドキャスト百合",
} satisfies Metadata;

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Jumbotron />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
