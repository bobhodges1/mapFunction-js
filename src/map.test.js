import { mapFn } from "./map.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

function multiplyBy2(number) {
  return number * 2
}

test("multiplies every item in array by 2", () => {
  expect(mapFn([2, 4, 6], multiplyBy2 )).toEqual([4, 8, 12]);
});

test("multiplies every item in array by 2", () => {
  expect(mapFn([], multiplyBy2)).toEqual([]);
});

test("multiplies every item in array by 2", () => {
  expect(mapFn([0, 0], multiplyBy2)).toEqual([0, 0]);
});

test("multiplies every item in array by 2", () => {
  expect(mapFn([-1, 1.2], multiplyBy2)).toEqual([-2, 2.4]);
});

// test("multiplies every item in array by 3", () => {
//   expect(mapFn([-1, 1], number => number * 3)).toEqual([-3, 3]);
// });