const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  registerSeller,
  loginSeller,
  addBook,
  getBooks,
  getMyProducts,
  getBookById,
  updateBook,
  deleteBook,
  getSellerOrders,
} = require("../controllers/SellerControllers");

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.post("/add-book", addBook);
router.get("/books", getBooks);
router.get("/my-products/:sellerId", getMyProducts);
router.get("/orders/:sellerId", getSellerOrders);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);
router.post(
  "/upload-image",
  upload.single("itemImage"),
  (req, res) => {
    res.status(200).json({
      success: true,
      image: req.file.filename,
    });
  }
);
module.exports = router;