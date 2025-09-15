import clsx from "clsx";

interface Props {
  subheading?: React.ReactNode;
  children: React.ReactNode;
}

export function SectionTitle({ subheading, children }: Props) {
  return (
    <hgroup className={clsx("mb-24", "screen2:mb-32")}>
      {subheading && (
        <p className={clsx("text-primary", "font-bold", "uppercase", "mb-4")}>
          {subheading}
        </p>
      )}
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
