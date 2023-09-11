const searchInfo = require("./searchInfo");

const dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

test("input is input", () => {
  const input1 = "hello";
  expect(input1).toBe("hello");
});

test("this is a searching funtion", () => {
  // console.log(searchInfo);
  const input2 = "testtest";
  expect(searchInfo(input2, dbMock)).toEqual([]);

  const input3 = "dog";
  expect(searchInfo(input3, dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});

test("work with undefined and null input", () => {
  expect(searchInfo(undefined, dbMock)).toEqual([]);
  expect(searchInfo(null, dbMock)).toEqual([]);
});
