// below is a module, when we export will be export default fucntion name()
import timesTwo from "./functions";

// below is a function, when we export will be export fucntion name()
//import { timesTwo } from "./functions";

test("Mutiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});
