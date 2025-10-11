export function nl2br(source: string) {
  return source
    .split(/\n/g)
    .flatMap((line, index) => [line, <br key={line + index} />]);
}

export function firstParagraph(source: string) {
  return nl2br(source)[0];
}
