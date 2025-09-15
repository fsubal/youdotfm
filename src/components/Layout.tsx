import clsx from "clsx";
import { Jumbotron } from "./Jumbotron/Jumbotron";
import { Navbar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Jumbotron />
      <Main>{children}</Main>
    </>
  );
}

const proseClass = clsx("prose", "prose-slate", "prose-green", "max-w-none");

function Main({ children }: React.PropsWithChildren) {
  return (
    <div
      id="main"
      data-role="main"
      className={clsx("flex", "flex-col", "min-h-screen", "items-center")}
    >
      <main
        className={clsx(
          "flex-1",
          "flex",
          "flex-col",
          "screen2:flex-row",
          "w-full",
          "max-w-(--breakpoint-screen5)",
          [
            "divide-y",
            "screen2:divide-y-0",
            "screen2:divide-x",
            "divide-x-text-50",
          ],
        )}
      >
        <nav
          className={clsx(
            "screen2:top-0",
            "screen2:left-0",
            "screen2:sticky",
            "shrink-0",
          )}
        >
          <LogoOneline />
          <Navbar />
        </nav>
        <div
          className={clsx(
            "flex-1",
            "py-40",
            "px-24",
            "screen2:py-40",
            "screen2:px-40",
          )}
        >
          <div className={clsx(proseClass, "prose-h1:tracking-wider")}>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function LogoOneline() {
  return (
    <hgroup className={clsx("pt-24", "px-24", "mb-3")}>
      <Link
        className={clsx(
          "flex",
          "flex-col",
          "justify-start",
          "items-start",
          "gap-4",
        )}
        href="/"
      >
        <p className={clsx("text-xs", "text-text-500")}>
          ポッドキャスト百合漫画
        </p>
        <Image
          src="/logo_oneline.svg"
          alt="トップに戻る"
          width={160}
          height={18}
          className={clsx("h-[18px]", "w-auto")}
        />
      </Link>
    </hgroup>
  );
}

function Footer() {
  return (
    <footer
      data-role="footer"
      className={clsx(
        "flex",
        "justify-center",
        "bg-surface",
        "w-full",
        ["py-24", "px-24"],
        [proseClass, "prose-sm"],
        "max-w-none",
      )}
    >
      <div className={clsx("w-full", "max-w-(--breakpoint-screen5)")}>
        footer
        <br />
        &copy; Subal Fujiaki
      </div>
    </footer>
  );
}
