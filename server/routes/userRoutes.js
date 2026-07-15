const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
  registerUser,
  loginUser,
  placeOrder,
  getMyOrders,
  cancelOrder,
} = require("../controllers/UsersController");

router.delete("/order/:id", cancelOrder);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/order", placeOrder);

router.get("/orders/:userId", getMyOrders);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to your profile",
    user: req.user,
  });
});



module.exports = router;