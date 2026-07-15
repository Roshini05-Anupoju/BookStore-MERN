const express = require("express");
const cors = require("cors");
require("dotenv").config();
// console.log(process.env.JWT_SECRET);
const connectDB = require("./config/connect");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Register Routes
app.use("/user", userRoutes);
app.use("/seller", sellerRoutes);
app.use("/admin", adminRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("BookStore Backend is Running...");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});