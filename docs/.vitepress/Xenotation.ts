import { Ref, TemplateRef, VNodeRef } from "vue";

export const isPrime = (n: number) => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n == leastFactor(n)) return true;
  return false;
};
// returns the smallest prime that divides n
// mostly copypasted
// all of the conditionals cut down on CPU cycles.
export const leastFactor = (n: number) => {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n == 0) return 0;
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 == 0) return 2;
  if (n % 3 == 0) return 3;
  if (n % 5 == 0) return 5;
  const m = Math.sqrt(n);
  for (let i = 7; i <= m; i += 30) {
    if (n % i == 0) return i;
    if (n % (i + 4) == 0) return i + 4;
    if (n % (i + 6) == 0) return i + 6;
    if (n % (i + 10) == 0) return i + 10;
    if (n % (i + 12) == 0) return i + 12;
    if (n % (i + 16) == 0) return i + 16;
    if (n % (i + 22) == 0) return i + 22;
    if (n % (i + 24) == 0) return i + 24;
  }
  return n;
};
// the following taken from https://stackoverflow.com/questions/17389350/prime-numbers-javascript
export const nextPrime = (value: number) => {
  if (value > 2) {
    let i, q;
    do {
      i = 3;
      value += 2;
      q = Math.floor(Math.sqrt(value));
      while (i <= q && value % i) {
        i += 2;
      }
    } while (i <= q);
    return value;
  }
  return value === 2 ? 3 : 2;
};
export default class SieveEra {
  // sieve of eratosthenes
  private _primes: number[] = [];
  // Reading inputs and affecting the webpage
  private IGNORE_KEYCODES = [32, 91, 16, 18];
  constructor() {
    this._primes = this.era(5);
  }
  public era = (n: number) => {
    if (this._primes[this._primes.length - 1] >= n) return this._primes;
    const a = new Array(n + 1).fill(0); // new Array(n) wouldn't include n.
    for (let i = 2; i < a.length; i++) {
      for (let j = i * 2; j < a.length; j += i) {
        a[j] = 1;
      }
    }
    this._primes = a
      .map((e, i) => (!e ? i : 0))
      .filter((e) => e)
      .slice(1);
    return this._primes;
  };
  //   get primes() {
  //     return this.era(5);
  //   }
  public _keyUp<T extends KeyboardEvent = KeyboardEvent>(
    event: T,
    updateCallback?: (r?: string) => unknown,
  ) {
    const target: HTMLInputElement = <HTMLInputElement>event.target;
    const entry = target.value.replace(/[^0-9(:)+]/g, "");
    target.value = entry;
    const eNum: number = Number(entry);
    let result: string | number;
    if (
      !entry ||
      !entry.match(/^[0-9+]|[(:)]$/) ||
      this.IGNORE_KEYCODES.includes(event.which)
    )
      return;
    else if (eNum >= 4294967296)
      result = "Number too large to be processed by Javascript.";
    else if (eNum == 1) result = "1 isn't real.";
    else result = this.xenote(entry);
    //$('#number').html(`<h1>${result}</h1>`);
    if (updateCallback) updateCallback(String(result));
    //templateRef.value = String(result);
  }
  public indexOfPrime = (n: number) => {
    if (n < 2) return -1;
    if (this._primes.includes(n)) return this._primes.indexOf(n) + 1;
    return this.era(n).indexOf(n) + 1;
  };
  public plex = (n: number) => {
    if (!+n) return 1; // REMEMBER: +n is bitwise Number(n)
    let i = this._primes.length + 1000;
    while (this._primes.length < n + 1) {
      this.era(i);
      i += 1000;
    }
    return this._primes[n - 1];
  };
  // the following based on http://www.javascripter.net/math/primes/factorization.htm
  static factor = (n: number): number[] => {
    const factors: number[] = [];
    if (!n || isNaN(n) || !isFinite(n) || n % 1 != 0) {
      return factors;
    }
    if (n < 0) {
      return [-1, ...this.factor(-n)];
    }
    const minFactor = leastFactor(n);
    if (n == minFactor) {
      factors.push(n);
      return factors;
    }
    return [minFactor, ...this.factor(n / minFactor)];
  };
  static shuffle = (a: number[]) => {
    a.sort((b, c) => (Math.round(Math.random()) ? 1 : -1));
    return a;
  };
  private _callback = (f: number) =>
    f == 2 ? ":" : SieveEra.stringify(this.a2x(this.indexOfPrime(f)));
  // 3 -> (:)
  public a2x = (n: number): string[] => {
    if (n < 2) return [""];
    const factors = SieveEra.factor(n);
    // we shuffle just because we can. And, after all, T.X. is commutative.
    return SieveEra.shuffle(factors).map(this._callback);
  };
  public xenote = (n: number | string) => {
    if (+n == n || typeof n == "number") {
      return this.a2x(+n).map(SieveEra.stringify).join("");
    }
    return this.x2a(n);
  };
  static stringify = (a: string[] | string): string => {
    if (Array.isArray(a)) {
      return "(" + a.reduce((a, b) => a + this.stringify(b), "") + ")";
    }
    return a;
  };

  // (:) -> 3
  public x2a = (s: string): number => {
    if (!s) return 1;
    let parens = 0,
      splits = [];
    for (let i = 0; i < s.length; i++) {
      if (parens == 0 && i) splits.push(i);
      if (parens < 0) {
        console.log("Invalid xenotation.");
        continue;
      }
      if (s[i] == "(") parens++;
      if (s[i] == ")") parens--;
    }
    splits.push(s.length);

    if (splits.length == 1)
      return this.plex(this.x2a(s.slice(1, s.length - 1)));
    const substrs = [];
    let last = 0;
    for (let idx of splits) {
      substrs.push(s.slice(last, idx));
      last = idx;
    }
    const sub2a = (sub: string) => {
      if (sub == ":") return 2;
      return this.x2a(sub);
    };
    const viv = substrs.map(sub2a);

    return viv.reduce((a, b) => a * b, 1);
  };
}
