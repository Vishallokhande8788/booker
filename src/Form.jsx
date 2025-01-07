import { useState } from "react";

function Form({ onSubmit, onSort, onOrder }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a book</legend>
        <input
          type="text"
          name="book"
          placeholder="Add a book"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div style={{ display: "flex", gap: "5px" }}>
          <button type="button" onClick={onSort}>
            Sort
          </button>
          <button type="button" onClick={onOrder}>
            Order
          </button>
          <button type="submit" disabled={!input.length}>
            Add book
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;