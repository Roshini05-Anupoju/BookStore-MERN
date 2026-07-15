import { useEffect, useState } from "react";
import API from "../services/api";

function MyOrders() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/user/orders/${user._id}`);
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelOrder = async (id) => {
    try {
      await API.delete(`/user/order/${id}`);

      alert("Order Cancelled");

      fetchOrders();
    } catch (error) {
      alert(error.response?.data?.message || "Cancel Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <h3>No Orders Found</h3>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>{order.bookId?.title}</h3>

            <p>
              <b>Author:</b> {order.bookId?.author}
            </p>

            <p>
              <b>Price:</b> ₹{order.bookId?.price}
            </p>

            <p>
              <b>Status:</b> {order.status}
            </p>

            <button onClick={() => cancelOrder(order._id)}>
              Cancel Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;