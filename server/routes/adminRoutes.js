const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  getUsers,
  getSellers,
  getBooks,
  deleteUser,
  deleteSeller,
  deleteBook,
} = require("../controllers/AdminController");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.get("/users", getUsers);
router.get("/sellers", getSellers);
router.get("/books", getBooks);

router.delete("/user/:id", deleteUser);
router.delete("/seller/:id", deleteSeller);
router.delete("/book/:id", deleteBook);

module.exports = router;