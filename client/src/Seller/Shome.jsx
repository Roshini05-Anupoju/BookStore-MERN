import { Link, useNavigate } from "react-router-dom";

function Shome() {
  const seller = JSON.parse(localStorage.getItem("seller"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("seller");
    localStorage.removeItem("sellerToken");
    navigate("/seller/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Seller Dashboard</h1>

      <h3>Welcome, {seller?.name}</h3>

      <br />

      <Link to="/seller/add-book">
        <button>Add Book</button>
      </Link>

      <br /><br />

      <Link to="/seller/products">
        <button>My Products</button>
      </Link>

      <br /><br />

      <Link to="/seller/orders">
        <button>Orders</button>
      </Link>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Shome;