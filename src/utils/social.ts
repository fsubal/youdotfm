export abstract class SocialUrl {
  abstract get url(): URL;
  abstract toString(): string;
}

export class XIntentUrl extends SocialUrl {
  #intent = new URL("https://x.com/intent/post");
  #url: string;
  #text: string;

  constructor(url: string | URL, text: string) {
    super();
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

export class BlueskyIntentUrl extends SocialUrl {
  #intent = new URL("https://bsky.app/intent/compose");
  #url: string;
  #text: string;

  constructor(url: string | URL, text: string) {
    super();
    this.#url = url.toString();
    this.#text = text;
  }

  get url() {
    this.#intent.searchParams.set("text", `${this.#text}+${this.#url}`);

    return this.#intent;
  }

  toString() {
    return this.url.toString();
  }
}
