import clsx from "clsx";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";

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
      <main className={clsx("flex-1", "flex", "flex-col", "tablet:flex-row")}>
        <nav>
          <Navbar />
        </nav>
        <div
          className={clsx(
            "flex-1",
            "py-4",
            "px-6",
            "tablet:py-10",
            "tablet:px-8"
          )}
        >
          <div className={proseClass}>{children}</div>
        </div>
      </main>
      <Footer />
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
