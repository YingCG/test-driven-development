import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", async () => {
    render(
      <AddInput
        todos={[]}
        //  setTodos={() => {}}
        setTodos={mockedSetTodo}
      />
    );
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(input).toBeInTheDocument();
  });

  it("should be able to type in the input area", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(input, { target: { value: "Go Grocery Shopping" } });
    expect(input.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    const button = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(input, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(button);
    expect(input.value).toBe("");
  });
});
