const express = require("express");
const router = express.Router();
const { verifyAdmin, verifyAdminProduct ,verifyToken } = require('../authMiddleware');
const { GetAllUsers, GetUser, DeleteUser, AddUser, UpdateUser ,SendRequestController,UpdateProfile,updateCredentials} = require("../controllers/User");

router.get("/allUsers", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/deleteUser/:id", DeleteUser);
router.post("/addUser", AddUser);
router.put("/editUser/:id", UpdateUser);
router.post("/request/:id",  SendRequestController);
router.put("/editProfile/:id", UpdateProfile);
router.put("/updateCredentials/:id",updateCredentials);


module.exports = router;


