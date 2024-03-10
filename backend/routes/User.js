const express = require("express");
const router = express.Router();
const { verifyAdmin, verifyAdminProduct  } = require('../authMiddleware');
const { GetAllUsers, GetUser, DeleteUser, AddUser, UpdateUser ,SendRequestController} = require("../controllers/User");

router.get("/allUsers", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/deleteUser/:id", DeleteUser);
router.post("/addUser", AddUser);
router.put("/editUser/:id", UpdateUser);
router.post("/request/:id",  SendRequestController);


module.exports = router;


