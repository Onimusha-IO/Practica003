const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/validate", userController.login);

module.exports = router;
