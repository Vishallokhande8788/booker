import { useState } from "react";

function Form({ onSubmit }) {
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
        <button type="submit">Add book</button>
      </fieldset>
    </form>
  );
}

export default Form;
