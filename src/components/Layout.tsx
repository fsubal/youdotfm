import clsx from "clsx";
import { Jumbotron } from "./Jumbotron/Jumbotron";
import { NavbarDropdown } from "./Navbar/NavbarDropdown";
import { NavbarMenu } from "./Navbar/NavbarContent";
import { LogoOneline } from "./LogoOneline";
import { Footer } from "./Footer/Footer";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Jumbotron />
      <NavbarDropdown>
        <hgroup className={clsx("pt-24", "px-24", "mb-3")}>
          <LogoOneline />
        </hgroup>
        <NavbarMenu />
      </NavbarDropdown>
      <Main>{children}</Main>
    </>
  );
}

export function Main({ children }: React.PropsWithChildren) {
  return (
    <div
      id="main"
      data-role="main"
      className={clsx(
        "flex",
        "flex-col",
        "min-h-lvh",
        "items-center",
        "bg-ground",
      )}
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
