const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUser, DeleteUser, AddUser, UpdateUser} = require("../controllers/User");

router.get("/allUsers", GetAllUsers);
router.get("/byId/:id", GetUser);
router.delete("/deleteUser/:id", DeleteUser);
router.post("/addUser", AddUser);
router.put("/editUser/:id", UpdateUser);


module.exports = router;