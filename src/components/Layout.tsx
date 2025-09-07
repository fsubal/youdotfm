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
      className={clsx("flex", "flex-col", "min-h-screen")}
    >
      <main
        className={clsx("flex-1", "flex", "flex-col", "tablet:flex-row", [
          "divide-y",
          "tablet:divide-x",
          "divide-slate-100",
        ])}
      >
        <nav
          className={clsx(
            "tablet:h-full",
            "tablet:top-0",
            "tablet:left-0",
            "tablet:sticky",
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
            "tablet:py-40",
            "tablet:px-32",
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
        <p className={clsx("text-xs", "text-slate-500")}>
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
        "bg-slate-100",
        ["py-24", "px-24"],
        [proseClass, "prose-sm"],
        "max-w-none",
      )}
    >
      footer
      <br />
      &copy; Subal FUJIAKI
    </footer>
  );
}
