import { useNavigate } from "react-router-dom";

function Ahome() {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("admin"));

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome {admin?.name} 👨‍💼</h1>

      <br />

      <button onClick={() => navigate("/admin/users")}>
        View Users
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin/sellers")}>
        View Sellers
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin/items")}>
        View Books
      </button>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Ahome;