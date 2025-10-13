export interface SocialUrl {
  get url(): URL;
  toString(): string;
}

export class XIntentUrl implements SocialUrl {
  #intent = new URL("https://x.com/intent/post");
  #url: string;
  #text: string;

  constructor(url: string | URL, text: string) {
    this.#url = url.toString();
    this.#text = text;
  }

  get url() {
    this.#intent.searchParams.set("url", this.#url);
    this.#intent.searchParams.set("text", this.#text);

    return this.#intent;
  }

  toString() {
    return this.url.toString();
  }
}

export class BlueskyIntentUrl implements SocialUrl {
  #intent = new URL("https://bsky.app/intent/compose");
  #url: string;
  #text: string;

  constructor(url: string | URL, text: string) {
    this.#url = url.toString();
    this.#text = text;
  }

  get url() {
    this.#intent.searchParams.set("text", `${this.#text} ${this.#url}`);

    return this.#intent;
  }

  toString() {
    return this.url.toString();
  }
}
