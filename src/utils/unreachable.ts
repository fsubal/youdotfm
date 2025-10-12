/**
 * switch文の網羅性検証に使える例外
 */
export class Unreachable extends TypeError {
  static assert(value: never): never {
    throw new this(value);
  }

  static silent(value: never): void {
    void value;
  }

  constructor(value: never) {
    super(`Unreachable: ${value}`);
  }
}
