const {
    UpdateUserById,
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
 
  const UpdateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
  
    try {
      const success = await UpdateUserById(userId, updatedUserData);
  
      if (success) {
        return res.json({ message: 'User updated successfully' });
      } else {
        return res.status(404).json({ message: 'User not found or no changes made' });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

  
  
  module.exports = {
    GetAllUsers,
    GetUser,
    DeleteUser,
    AddUser,
    UpdateUser
  };