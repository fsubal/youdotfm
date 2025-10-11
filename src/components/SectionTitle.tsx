import clsx from "clsx";
import { Icon } from "./Icon";

interface Props {
  subheading?: React.ReactNode;
  backToHref?: string;
  children: React.ReactNode;
}

export function SectionTitle({ subheading, backToHref, children }: Props) {
  return (
    <hgroup className={clsx("mb-24", "screen2:mb-32")}>
      <Subheading href={backToHref}>{subheading}</Subheading>
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

const subheadingStyle = clsx(
  "font-bold",
  "uppercase",
  "mb-4",
  "text-primary",
  "inline-flex",
  "items-center",
  "gap-4",
);

const Subheading = ({
  href,
  children,
}: React.PropsWithChildren<{ href?: string }>) => {
  if (!children) {
    return null;
  }

  if (href) {
    return (
      <a
        href={`${href}#main`}
        className={clsx(subheadingStyle, "hover:underline")}
      >
        <Icon name="16/Back" />
        {children}
      </a>
    );
  }

  return <p className={subheadingStyle}>{children}</p>;
};
