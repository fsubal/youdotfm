import { Jumbotron } from "./Jumbotron";
import { Main } from "./Main";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Jumbotron />
      <Main>{children}</Main>
    </>
  );
}
