export const BASE_URL = new URL("https://youdot.fm");

const DEFAULT_HASH = "main";

type RelativeURLInterface = Omit<
  URL,
  "host" | "hostname" | "origin" | "port" | "username" | "password" | "protocol"
>;

export class RelativeURL implements RelativeURLInterface {
  #url: URL;

  static canParse(href: string) {
    return URL.canParse(href, BASE_URL);
  }

  static withDefaultHash(href: string) {
    return new this(`${href}#${DEFAULT_HASH}`);
  }

  constructor(relativeUrl: string) {
    this.#url = new URL(relativeUrl, BASE_URL);
  }

  get hash() {
    return this.#url.hash;
  }

  set hash(value: string) {
    this.#url.hash = value;
  }

  get pathname() {
    return this.#url.pathname;
  }

  set pathname(value: string) {
    this.#url.pathname = value;
  }

  get search() {
    return this.#url.search;
  }

  set search(value: string) {
    this.#url.search = value;
  }

  get searchParams() {
    return this.#url.searchParams;
  }

  get href() {
    let output = this.pathname;
    if (this.search) {
      output += "?" + this.search;
    }

    if (this.hash) {
      output += "#" + this.hash;
    }

    return output;
  }

  set href(relativeUrl: string) {
    this.#url = new URL(relativeUrl, BASE_URL);
  }

  toString() {
    return this.href;
  }

  toJSON() {
    return this.toString();
  }

  toURL(baseURL: string | URL = BASE_URL) {
    return new URL(this.toString(), baseURL);
  }
}
