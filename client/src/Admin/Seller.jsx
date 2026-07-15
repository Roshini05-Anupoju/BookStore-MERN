import { useEffect, useState } from "react";
import API from "../services/api";

function Seller() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const res = await API.get("/admin/sellers");
      setSellers(res.data.sellers);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSeller = async (id) => {
    try {
      const res = await API.delete(`/admin/seller/${id}`);

      alert(res.data.message);

      fetchSellers();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Sellers</h2>

      {sellers.map((seller) => (
        <div
          key={seller._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{seller.name}</h3>

          <p>{seller.email}</p>

          <button onClick={() => deleteSeller(seller._id)}>
            Delete Seller
          </button>
        </div>
      ))}
    </div>
  );
}

export default Seller;