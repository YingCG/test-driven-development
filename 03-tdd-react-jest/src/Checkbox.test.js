import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox should change value to true", () => {
  const { getByLabelText } = render(<Checkbox />);
  // i is to make it not case sensitive
  const checkbox = getByLabelText(/not checked/i);
  //fireEvent come from react testing library
  fireEvent.click(checkbox);
  expect(checkbox.checked).not.toEqual(false);
});
