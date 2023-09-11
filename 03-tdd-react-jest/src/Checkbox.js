import { useReducer } from "react";

export function Checkbox() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    // initial when the componeent render with uncheck as default
    false
  );
  return (
    <>
      <label htmlFor="checked">{checked ? "checked" : "not checked"}</label>
      <input
        id="checked"
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
    </>
  );
}
