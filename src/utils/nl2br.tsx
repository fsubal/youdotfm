export function nl2br(source: string) {
  return source
    .split(/\n/g)
    .flatMap((line, index) => [line, <br key={line + index} />]);
}

export function firstParagraph(source: string) {
  return nl2br(source)[0];
}

export function simpleFormat(source: string) {
  return source.split(/\r?\n\r?\n+/).map((paragraphs, i) => {
    const lines = paragraphs.split(/\r?\n/);

    return (
      <p key={i}>
        {lines.flatMap((line, j) => {
          const isLast = j === lines.length - 1;

          return isLast ? line : [line, <br key={`${j}-${i}`} />];
        })}
      </p>
    );
  });
}
