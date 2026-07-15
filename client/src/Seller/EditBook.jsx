import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/seller/book/${id}`);
      setBook(res.data.book);
    } catch (error) {
      alert("Failed to fetch book");
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      const res = await API.put(`/seller/book/${id}`, book);

      alert(res.data.message);

      navigate("/seller/products");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Edit Book</h2>

      <form onSubmit={updateBook}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <br /><br />

        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <br /><br />

        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <br /><br />

        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <br /><br />

        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <br /><br />

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;