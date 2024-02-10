import { Equal, Expect } from "../helpers/type-utils";

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

export const makeSelectors = <TSource>() => {
  return <TSelectors extends Record<string, (source: TSource) => any>>(
    selectors: TSelectors
  ) => selectors;
};

const selectors = makeSelectors<Source>()({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});

type tests = [
  Expect<Equal<(typeof selectors)["getFullName"], (source: Source) => string>>,
  Expect<
    Equal<(typeof selectors)["getFirstAndLastName"], (source: Source) => string>
  >,
  Expect<
    Equal<(typeof selectors)["getFirstNameLength"], (source: Source) => number>
  >
];
