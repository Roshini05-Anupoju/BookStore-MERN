import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddBook() {
  const navigate = useNavigate();

  const seller = JSON.parse(localStorage.getItem("seller"));

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/seller/add-book", {
        ...formData,
        sellerId: seller._id,
        sellerName: seller.name,
      });

      alert(res.data.message);

      navigate("/seller/products");
    } catch (error) {
      console.log(error);
       console.log(error.response?.data);

     alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;