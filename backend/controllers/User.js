const {
    GetListOfUsers,
    GetUserById,
    DeleteUserById,
    AddNewUser
  } = require("../service/User");
  
  const  GetAllUsers = async (req, res) => {
    const userList = await GetListOfUsers();
  
    // DO SOMETHING WITH THE USER LIST OR JUST RETURN IT
    return res.json(userList);
  };
  
  const GetUser = async (req, res) => {
    const userId = req.params.id;
    const user = await GetUserById(userId);
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(user);
  };
  
  const DeleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await DeleteUserById(userId);
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(user);
  };
  
  const AddUser = async (req, res) => {
    const user = req.body;
    console.log(user)
    const newUser = await AddNewUser(user);
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(newUser);
  };
  
  module.exports = {
    GetAllUsers,
    GetUser,
    DeleteUser,
    AddUser
  };