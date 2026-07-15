import { useEffect, useState } from "react";
import API from "../services/api";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

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

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No Orders Found</h3>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h2>{order.booktitle}</h2>
            <p><b>Author:</b> {order.bookauthor}</p>
            <p><b>Price:</b> ₹{order.totalamount}</p>
            <p><b>Seller:</b> {order.sellerName}</p>
            <p><b>Booked On:</b> {order.bookingDate}</p>
            <p><b>Delivery:</b> {order.delivery}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;