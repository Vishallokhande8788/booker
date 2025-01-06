import { useState } from "react";
import Form from "./Form";

function App() {
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      text: "The Great Gatsby",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: 1984,
      likes: 0,
    },
  ]);

  const addBook = (book) => {
    const newBook = {
      id: crypto.randomUUID(),
      text: book,
      likes: 0,
    };
    setBooks([newBook, ...books]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const likeBook = (id) => {
    setBooks((prevState) => {
      return prevState.map((book) =>
        book.id === id ? { ...book, likes: book.likes + 1 } : book
      );
    });
  };

  const dislikeBook = (id) => {
    setBooks((prevState) => {
      return prevState.map((book) =>
        book.id === id ? { ...book, likes: book.likes - 1 } : book
      );
    });
  };

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>

      <Form onSubmit={addBook} />

      {books.map((book) => (
        <pre key={book.id}>
          <h3>{book.text}</h3>
          <p>{book.likes}</p>

          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => likeBook(book.id)}>Like</button>
            <button onClick={() => dislikeBook(book.id)}>Dislike</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </pre>
      ))}
    </>
  );
}

export default App;