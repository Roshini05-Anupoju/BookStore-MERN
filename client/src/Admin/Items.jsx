import { useEffect, useState } from "react";
import API from "../services/api";

function Items() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/admin/books");
      setBooks(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await API.delete(`/admin/book/${id}`);

      alert(res.data.message);

      fetchBooks();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Books</h2>

      {books.map((book) => (
        <div
          key={book._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{book.title}</h3>

          <p><b>Author:</b> {book.author}</p>

          <p><b>Genre:</b> {book.genre}</p>

          <p><b>Price:</b> ₹{book.price}</p>

          <p><b>Seller:</b> {book.sellerName}</p>

          <button onClick={() => deleteBook(book._id)}>
            Delete Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;