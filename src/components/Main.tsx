import clsx from "clsx";
import { Navbar } from "./Navbar";

export function Main({ children }: React.PropsWithChildren) {
  return (
    <main
      id="main"
      data-role="main"
      className={clsx("flex", "flex-col", "tablet:flex-row")}
    >
      <nav>
        <Navbar />
      </nav>
      <div className={clsx("flex-1", "tablet:py-10", "tablet:px-8")}>
        {children}
      </div>
    </main>
  );
}
