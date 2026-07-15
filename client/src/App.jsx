import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";

import Login from "./User/Login";
import Signup from "./User/Signup";
import Uhome from "./User/Uhome";
import Products from "./User/Products";
import MyOrders from "./User/MyOrders";

import Slogin from "./Seller/Slogin";
import Ssignup from "./Seller/Ssignup";
import Shome from "./Seller/Shome";
import AddBook from "./Seller/AddBook";
import MyProducts from "./Seller/MyProducts";
import Orders from "./Seller/Orders";

import Alogin from "./Admin/Alogin";
import Asignup from "./Admin/Asignup";
import Ahome from "./Admin/Ahome";
import Users from "./Admin/Users";
import Seller from "./Admin/Seller";
import Items from "./Admin/Items";


import EditBook from "./Seller/EditBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user/home" element={<Uhome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<MyOrders />} />

      <Route path="/seller/login" element={<Slogin />} />
      <Route path="/seller/signup" element={<Ssignup />} />
      <Route path="/seller/home" element={<Shome />} />
      <Route path="/seller/add-book" element={<AddBook />} />
      <Route path="/seller/products" element={<MyProducts />} />
      <Route path="/seller/orders" element={<Orders />} />
      <Route path="/seller/edit-book/:id" element={<EditBook />} />

      <Route path="/admin/login" element={<Alogin />} />
      <Route path="/admin/signup" element={<Asignup />} />
      <Route path="/admin/home" element={<Ahome />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/sellers" element={<Seller />} />
      <Route path="/admin/items" element={<Items />} />
    </Routes>
  );
}

export default App;