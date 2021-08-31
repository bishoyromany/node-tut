import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App" id="main">
      <h1>Books Page</h1>

      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
