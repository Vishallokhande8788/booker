# Booker Project

A simple **React-based** project to manage books with functionalities like sorting, ordering, adding, and deleting books. Inspired by a todo application, this project demonstrates core React concepts and features. 

---

## Features

1. **Sorting**: Sort the list of books alphabetically or by other criteria.
2. **Order Toggle**: Change the sorting order between ascending and descending.
3. **Add Books**: Add new books to the list.
4. **Delete Books**: Remove books from the list.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd booker
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

---

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `pnpm run build`

Builds the app for production to the `dist` folder. It bundles React in production mode and optimizes the build for the best performance.

### `pnpm run preview`

Previews the production build locally after running `pnpm run build`.

### `pnpm run lint`

Lints the code using ESLint to maintain code quality.

---


## Dependencies

### Production Dependencies

- **react**: Library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React.

### Development Dependencies

- **vite**: Frontend build tool for fast development.
- **eslint**: Tool for identifying and fixing code issues.
- **@vitejs/plugin-react-swc**: Plugin to optimize React with Vite using SWC.
- **eslint-plugin-react**: ESLint rules for React.
- **eslint-plugin-react-hooks**: Additional hooks rules for React.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **globals**: A library providing global variable definitions.

---

## How to Use

1. Start the development server:
   ```bash
   pnpm run dev
   ```

2. Interact with the app:
   - Use the **Sort** button to sort books alphabetically.
   - Toggle sorting order using the **Order** button.
   - Add a book using the **Add** feature.
   - Delete a book using the **Delete** button associated with each book.

3. To build the app for production, run:
   ```bash
   pnpm run build
   ```

4. Preview the production build locally:
   ```bash
   pnpm run preview
   ```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

---

Happy coding! 🚀

