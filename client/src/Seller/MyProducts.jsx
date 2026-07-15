import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function MyProducts() {
  const seller = JSON.parse(localStorage.getItem("seller"));
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/seller/books");

      const myBooks = res.data.books.filter(
        (book) => book.sellerId === seller._id
      );

      setBooks(myBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await API.delete(`/seller/book/${id}`);

      alert(res.data.message);

      fetchBooks();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Products</h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Genre:</b> {book.genre}</p>
            <p><b>Price:</b> ₹{book.price}</p>

            <button
              onClick={() => navigate(`/seller/edit-book/${book._id}`)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteBook(book._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyProducts;