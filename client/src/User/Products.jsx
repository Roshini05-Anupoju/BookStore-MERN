import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Products() {
  const navigate = useNavigate(); // ✅ Inside component

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await API.get("/seller/books");
    setBooks(res.data.books);
  };

  const handleBuy = (book) => {
    localStorage.setItem("selectedBook", JSON.stringify(book));
    navigate("/orders");
  };

  return (
    <div>
      <h1>Available Books</h1>

      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <button onClick={() => handleBuy(book)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;