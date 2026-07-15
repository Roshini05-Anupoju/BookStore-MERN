import { useEffect, useState } from "react";
import API from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await API.delete(`/admin/user/${id}`);

      alert(res.data.message);

      fetchUsers();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Users</h2>

      {users.map((user) => (
        <div
          key={user._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <button onClick={() => deleteUser(user._id)}>
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;