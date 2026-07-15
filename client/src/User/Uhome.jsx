import { useNavigate } from "react-router-dom";

function Uhome() {
  const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  navigate("/");
};

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome {user?.name} 🎉</h1>

      <br />
      <button onClick={logout}>Logout</button>
      <button onClick={() => navigate("/products")}>
        View Books
      </button>
    </div>
  );
}

export default Uhome;