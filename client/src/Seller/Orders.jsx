import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const seller = JSON.parse(localStorage.getItem("seller"));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/seller/orders/${seller._id}`);
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Seller Orders</h2>

      {orders.length === 0 ? (
        <h3>No Orders Yet</h3>
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
              <b>Customer:</b> {order.userId?.name}
            </p>

            <p>
              <b>City:</b> {order.city}
            </p>

            <p>
              <b>State:</b> {order.state}
            </p>

            <p>
              <b>Pincode:</b> {order.pincode}
            </p>

            <p>
              <b>Status:</b> {order.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;