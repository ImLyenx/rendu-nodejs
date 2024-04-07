const express = require("express");
const AuthController = require("../controllers/AuthController");
const UsersController = require("../controllers/UsersController");

const { authenticateToken } = require("../middlewares/auth");

const router = express.Router();

router.post("/api/login", AuthController.login);
router.get("/api/profile", authenticateToken, (req, res) => {
  const user = req.user;
  delete user.password;
  res.json(user);
});

router.get("/api/users", UsersController.index);
router.get("/api/users/:id", UsersController.show);
router.post("/api/users", UsersController.store);
router.delete("/api/users/:id", UsersController.delete);

module.exports = router;
