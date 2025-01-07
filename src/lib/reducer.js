export const booksReducer = (prevState, action) => {
    switch (action.type) {
      case "ADD":
        const newBook = {
          id: crypto.randomUUID(),
          text: action.payload,
          likes: 0,
        };
        return [newBook, ...prevState];
      case "DELETE":
        return prevState.filter((book) => book.id !== action.payload);
      case "SORT":
        return [...prevState].sort((a, b) => b.likes - a.likes);
      case "ORDER":
        return [...prevState].sort((a, b) => a.text.localeCompare(b.text));
      case "LIKE":
        return prevState.map((book) =>
          book.id === action.payload ? { ...book, likes: book.likes + 1 } : book
        );
      case "DISLIKE":
        return prevState.map((book) =>
          book.id === action.payload ? { ...book, likes: book.likes - 1 } : book
        );
    }
  };
  