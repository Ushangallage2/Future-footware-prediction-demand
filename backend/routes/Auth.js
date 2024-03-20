const express = require("express");
const router = express.Router();

const { Login } = require("../controllers/Auth");

router.post("/login", Login);

module.exports = router;
