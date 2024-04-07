const express = require("express");
const AuthController = require("../controllers/AuthController");
const UsersController = require("../controllers/UsersController");

const { authenticateToken } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", AuthController.login);
router.get("/profile", authenticateToken, (req, res) => {
  res.json(req.user);
});

router.get("/users", UsersController.index);
router.get("/users/:id", UsersController.show);
router.post("/users", UsersController.store);
router.delete("/users/:id", UsersController.delete);

module.exports = router;
