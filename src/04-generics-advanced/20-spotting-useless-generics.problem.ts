import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type TParams = {
  a: unknown;
  b: unknown;
};

const returnBothOfWhatIPassIn = <T extends TParams>(
  params: T
): [T["a"], T["b"]] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual(["a", 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});
