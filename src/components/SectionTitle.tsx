import clsx from "clsx";
import { Icon } from "./Icon";
import { Fragment } from "react";

interface Props {
  subheading?: React.ReactNode;
  backToHref?: string;
  children: React.ReactNode;
}

export function SectionTitle({ subheading, backToHref, children }: Props) {
  return (
    <hgroup className={clsx("mb-24", "screen2:mb-32")}>
      <Breadcrumbs
        paths={[
          { href: "/", label: "Home" },
          {
            href: backToHref ? `${backToHref}#main` : undefined,
            label: subheading,
          },
        ]}
      />

      <h2
        className={clsx(
          "font-serif",
          "font-normal",
          "text-2xl",
          "screen2:text-3xl",
        )}
      >
        {children}
      </h2>
      <hr
        className={clsx(
          "border-b",
          "border-t-0",
          "w-1/2",
          "screen2:w-[400px]",
          "mx-auto",
          "mt-24",
          "screen2:mt-32",
        )}
      />
    </hgroup>
  );
}

function Breadcrumbs({
  paths,
}: {
  paths: { href?: string; label: React.ReactNode }[];
}) {
  return (
    <nav
      className={clsx(
        "uppercase",
        "mb-4",
        "text-text-500",
        "inline-flex",
        "items-center",
        "gap-4",
      )}
    >
      {paths.map(({ href, label }, index) => {
        const isLast = index === paths.length - 1;

        return (
          <Fragment key={index}>
            {href ? (
              <>
                <a
                  href={href}
                  className={clsx(
                    "hover:underline",
                    "text-primary",
                    "font-bold",
                  )}
                >
                  {label}
                </a>
                <Icon name="24/Next" unsafeNonGuidelineScale={16 / 24} />
              </>
            ) : (
              <span aria-current="page">{label}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
