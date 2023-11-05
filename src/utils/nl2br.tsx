export function nl2br(source: string) {
  return source
    .split(/\n/g)
    .flatMap((line, index) => [line, <br key={line + index} />]);
}
