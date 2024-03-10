const {
    UpdateUserById,
    GetListOfUsers,
    GetUserById,
    DeleteUserById,
    AddNewUser,
    SendMessage
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
  


  


// const SendRequestController = async (req, res) => {
//   try {
//     const { message } = req.body;

//  console.log(req.body)
    
//     if (!message) {
//       return res.status(400).json({ message: 'Message is required in the request body' });
//     }

//     // Call the service function to send the message
//     const success = await SendMessage(message);
//     console.log("========")
//     console.log(success)

//     if (success) {
//       return res.json({ message: 'Message sent successfully' });
//     } else {
//       return res.status(404).json({ message: 'Message is not found' });
//     }
//   } catch (error) {
//     console.log('Error sending message:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };


// const SendRequestController = async (req, res) => {
//   const { message, id } = req.body;
//   console.log("message")
//   console.log(req.body.message)
//   try {
//     const success = await SendMessage(message, id);

//     if (success) {
//       return res.json({ message: 'Message sent successfully' });
//     } else {
//       return res.status(404).json({ message: 'Message not sent' });
//     }
//   } catch (error) {
//     console.error('Error sending message:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

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
    SendRequestController
  };