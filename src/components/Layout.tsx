import clsx from "clsx";
import { Jumbotron } from "./Jumbotron";
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
            "tablet:sticky"
          )}
        >
          <Logo />
          <Navbar />
        </nav>
        <div
          className={clsx(
            "flex-1",
            "py-10",
            "px-6",
            "tablet:py-10",
            "tablet:px-8"
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

function Logo() {
  return (
    <div className={clsx("pt-6", "px-6", "mb-3", "flex", "justify-center")}>
      <Link href="/">
        <Image src="/text.svg" alt="トップに戻る" width={160} height={30} />
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer
      data-role="footer"
      className={clsx(
        "bg-slate-100",
        ["py-6", "px-6"],
        [proseClass, "prose-sm"],
        "max-w-none"
      )}
    >
      footer
      <br />
      &copy; Subal FUJIAKI
    </footer>
  );
}
