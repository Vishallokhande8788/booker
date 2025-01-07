import { useReducer } from "react";
import Form from "./Form";
import { booksReducer } from "./lib/reducer";

function App() {
  const [books, dispatch] = useReducer(booksReducer, [
    {
      id: crypto.randomUUID(),
      text: "The Great Gatsby",
      likes: 4,
    },
    {
      id: crypto.randomUUID(),
      text: "1984",
      likes: 10,
    },
  ]);

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form
        onSubmit={(name) => dispatch({ type: "ADD", payload: name })}
        onSort={() => dispatch({ type: "SORT" })}
        onOrder={() => dispatch({ type: "ORDER" })}
      />

      {books.map((book) => (
        <pre key={book.id}>
          <h3>{book.text}</h3>
          <p>{book.likes}</p>

          <div style={{ display: "flex", gap: "5px" }}>
            <button
              onClick={() => dispatch({ type: "LIKE", payload: book.id })}
            >
              Like
            </button>
            <button
              onClick={() => dispatch({ type: "DISLIKE", payload: book.id })}
            >
              Dislike
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: book.id })}
            >
              Delete
            </button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;
