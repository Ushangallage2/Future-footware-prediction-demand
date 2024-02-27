const { log } = require("console");
const { db } = require("../db");
const util = require("util");
const query = util.promisify(db.query).bind(db);

// Returns User With Id
const GetUserById = async (id) => {

  const queryString = 'SELECT * FROM users WHERE id = ?';
  try {
    const results = await query(queryString, [id]);
    return results[0]; // Assuming the query returns only one user
  } catch (error) {
    throw error;
  }
};


// Returns List of Users
const UpdateUserById = async (id, updatedUserData) => {
  const {
    fName,
    lName,
    username,
    password,
    email,
    role,
    status
  } = updatedUserData;
 console.log(updatedUserData)
  const queryString = `UPDATE users SET fName = ?, lName = ?, username = ?, password = ?, email = ?, role = ?, status = ? WHERE id = ?`;
 
  try {
    const results = await query(queryString, [fName, lName, username, password, email, role, status, id]);
    return results.affectedRows > 0; 
    
  } catch (error) {
    throw error;
  }
  
};






const GetListOfUsers = async () => {
  const queryString = 'SELECT * FROM users WHERE status = 1';
  try {
    const results = await query(queryString);
    console.log("this is from getlistofallusers") 
   console.log(results)
    return results;
  } catch (error) {
    throw error;
  }
};


// const DeleteUserById = async (id) => {
//   const queryString = 'DELETE FROM users WHERE id = ?';
//   try {
//     const results = await query(queryString, [id]);
//     return results.affectedRows > 0; // Check if any row was affected
//   } catch (error) {
//     throw error;
//   }
// };
const DeleteUserById = async (id) => {
  const queryString = 'UPDATE users SET status = 0 WHERE id = ?';
  try {
    const results = await query(queryString, [id]);
    return results.affectedRows > 0; // Check if any row was affected
  } catch (error) {
    throw error;
  }
};

const AddNewUser = async (user) => {
  const { fName, lName, username, password, email, role  } = user;
  const queryString = 'INSERT INTO users ( fName, lName, username, password, email, role) VALUES (?, ?, ?, ?, ?, ?)';
  
  const values = [ fName, lName, username, password, email, role];

  try {
    const results = await query(queryString, values);
    return results.id; // Return the ID of the newly inserted user
  } catch (error) {
    throw error;
  }
};




module.exports = {
  GetUserById,
  GetListOfUsers,
  DeleteUserById,
  AddNewUser,
  UpdateUserById
};