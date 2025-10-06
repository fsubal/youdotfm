import clsx from "clsx";
import { Jumbotron } from "./Jumbotron/Jumbotron";
import { NavbarDropdown } from "./Navbar/NavbarDropdown";
import { LogoOneline, NavbarMenu } from "./Navbar/NavbarContent";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Jumbotron />
      <NavbarDropdown>
        <LogoOneline />
        <NavbarMenu />
      </NavbarDropdown>
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
        <div
          className={clsx(
            "flex-1",
            "py-40",
            "px-24",
            "screen2:py-40",
            "screen2:px-40",
          )}
        >
          <div className="max-w-full">{children}</div>
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
