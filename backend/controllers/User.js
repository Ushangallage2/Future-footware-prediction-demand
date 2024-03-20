// const {
//     UpdateUserById,
//     GetListOfUsers,
//     GetUserById,
//     DeleteUserById,
//     AddNewUser,
//     SendMessage
//   } = require("../service/User");
  
//   const  GetAllUsers = async (req, res) => {
//     const userList = await GetListOfUsers();
  

//     return res.json(userList);
//   };
  
//   const GetUser = async (req, res) => {
//     const userId = req.params.id;
//     const user = await GetUserById(userId);
  

//     return res.json(user);
//   };
  
//   const DeleteUser = async (req, res) => {
//     const userId = req.params.id;
//     const user = await DeleteUserById(userId);
  

//     return res.json(user);
//   };
  
//   const AddUser = async (req, res) => {
//     const user = req.body;
//     console.log(user)
//     const newUser = await AddNewUser(user);
  

//     return res.json(newUser);
//   };
 
//   const UpdateUser = async (req, res) => {
//     const userId = req.params.id;
//     const updatedUserData = req.body;
//     console.log(userId , updatedUserData)

//     try {
//       const success = await UpdateUserById(userId, updatedUserData);
  
//       if (success) {
//         return res.json({ message: 'User updated successfully' });
//       } else {
//         return res.status(404).json({ message: 'User not found or no changes made' });
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  


  



// const SendRequestController = async (req, res) => {
//   try {
//     const { message } = req.body;
//     console.log(req.params)
//     const senderUserId = req.params.id;
//     console.log(message)
//     console.log("this is the id")
//     console.log(senderUserId)  // Assuming you have user information in the request
//     console.log("this is the id")
//     // Call the SendMessage function passing the message and senderUserId
//     const success = await SendMessage(message, senderUserId);
//  console.log(success)
//     if (success) {
//       return res.json({ message: 'Message sent successfully' });
//     } else {
//       return res.status(404).json({ message: 'Failed to send message' });
//     }
//   } catch (error) {
//     console.log('Error sending message:', error);
//     return res.status(500).json({ message: 'Internal server error' });
  
//   }
// };


  
  
//   module.exports = {
//     GetAllUsers,
//     GetUser,
//     DeleteUser,
//     AddUser,
//     UpdateUser,
//     SendRequestController
//   };


const {
  UpdateUserById,
  GetListOfUsers,
  GetUserById,
  DeleteUserById,
  AddNewUser,
  SendMessage,
  UpdateProfileById
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
  console.log(userId , updatedUserData)

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

const UpdateProfile = async (req, res) => {
  const userId = req.params.id;
  const updatedProfileData = req.body;

  try {
    const success = await UpdateProfileById(userId, updatedProfileData);

    if (success) {
      return res.json({ message: 'Profile updated successfully' });
    } else {
      return res.status(404).json({ message: 'Profile not found or no changes made' });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



const SendRequestController = async (req, res) => {
try {
  const { message } = req.body;
  console.log(req.params)
  const senderUserId = req.params.id;
  console.log(message)
  console.log("this is the id")
  console.log(senderUserId)  // Assuming you have user information in the request
  console.log("this is the id")
  // Call the SendMessage function passing the message and senderUserId
  const success = await SendMessage(message, senderUserId);
console.log(success)
  if (success) {
    return res.json({ message: 'Message sent successfully' });
  } else {
    return res.status(404).json({ message: 'Failed to send message' });
  }
} catch (error) {
  console.log('Error sending message:', error);
  return res.status(500).json({ message: 'Internal server error' });

}
};




module.exports = {
  GetAllUsers,
  GetUser,
  DeleteUser,
  AddUser,
  UpdateUser,
  SendRequestController,
  UpdateProfile
};