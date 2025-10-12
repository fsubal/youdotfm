import clsx from "clsx";
import { Main } from "../components/Layout";
import { LogoOneline, NavbarMenu } from "../components/Navbar/NavbarContent";
import { NavbarDropdown } from "../components/Navbar/NavbarDropdown";
import Link from "next/link";
import { Icon } from "../components/Icon";

export default function NotFound() {
  return (
    <>
      <NavbarDropdown>
        <LogoOneline />
        <NavbarMenu />
      </NavbarDropdown>
      <Main>
        <div className={clsx("flex", "flex-col", "items-center", "gap-16")}>
          <h1 className="text-4xl">404 Not Found</h1>
          <p className="text-text-500">ページが見つかりませんでした</p>
          <div>
            <Link
              href="/"
              className={clsx(
                "underline",
                "text-primary",
                "inline-flex",
                "items-center",
              )}
            >
              <Icon name="Inline/Back" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
}
