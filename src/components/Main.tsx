import clsx from "clsx";
import { Navbar } from "./Navbar";

export function Main({ children }: React.PropsWithChildren) {
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
          {children}
        </div>
      </main>
      <footer className={clsx("bg-slate-100", ["py-6", "px-6"])}>footer</footer>
    </div>
  );
}
