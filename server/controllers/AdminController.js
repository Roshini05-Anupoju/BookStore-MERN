const Admin = require("../models/Admin/AdminSchema");
const User = require("../models/Users/UserSchema");
const Seller = require("../models/Seller/SellerSchema");
const Book = require("../models/Seller/BookSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await Admin.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hash,
    });

    res.status(201).json({
      success: true,
      message: "Admin Registered Successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Admin
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin not found",
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    users,
  });
};

// Get All Sellers
const getSellers = async (req, res) => {
  const sellers = await Seller.find();

  res.json({
    success: true,
    sellers,
  });
};

// Get All Books
const getBooks = async (req, res) => {
  const books = await Book.find();

  res.json({
    success: true,
    books,
  });
};
// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Seller
const deleteSeller = async (req, res) => {
  try {
    await Seller.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Seller Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Book
const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getUsers,
  getSellers,
  getBooks,
  deleteUser,
  deleteSeller,
  deleteBook,
};