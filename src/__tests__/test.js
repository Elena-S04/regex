import Validator from "../index";

test("should approve username", () => {
  const result = new Validator("ass3-3ost").validateUsername();
  const expected = "Имя удовлетворяет требованиям";
  expect(result).toBe(expected);
});

test("should approve username", () => {
  const result = new Validator("Asd").validateUsername();
  const expected = "Имя удовлетворяет требованиям";
  expect(result).toBe(expected);
});

test("should approve username", () => {
  const result = new Validator("a_km_hg--123s").validateUsername();
  const expected = "Имя удовлетворяет требованиям";
  expect(result).toBe(expected);
});

test("should not approve username", () => {
  const result = new Validator("2adf_00hgh-9").validateUsername();
  const expected = "Имя НЕ удовлетворяет требованиям!";
  expect(result).toBe(expected);
});

test("should not approve username", () => {
  const result = new Validator("__jg45aa").validateUsername();
  const expected = "Имя НЕ удовлетворяет требованиям!";
  expect(result).toBe(expected);
});

test("should not approve username", () => {
  const result = new Validator("048752136").validateUsername();
  const expected = "Имя НЕ удовлетворяет требованиям!";
  expect(result).toBe(expected);
});
