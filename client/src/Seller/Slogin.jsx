import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Slogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
     const res = await API.post("/seller/login", formData);
      console.log(res.data);
      localStorage.setItem("seller", JSON.stringify(res.data.seller));
      localStorage.setItem("sellerToken", res.data.token);

      alert(res.data.message);

      navigate("/seller/home");   
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Seller Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Slogin;