const { db } = require("../db");
const util = require("util");
const query = util.promisify(db.query).bind(db);

// Returns User With Id
const GetUserById = async (id) => {

  const queryString = 'SELECT * FROM users WHERE user_id = ?';
  try {
    const results = await query(queryString, [id]);
    return results[0]; // Assuming the query returns only one user
  } catch (error) {
    throw error;
  }
};

// Returns List of Users
const GetListOfUsers = async () => {
  console.log("line4569999")
  const queryString = 'SELECT * FROM users';
  try {
    const results = await query(queryString);
    //console.log(results)
    return results;
  } catch (error) {
    throw error;
  }
};

const DeleteUserById = async (id) => {
  const queryString = 'DELETE FROM users WHERE user_id = ?';
  try {
    const results = await query(queryString, [id]);
    return results.affectedRows > 0; // Check if any row was affected
  } catch (error) {
    throw error;
  }
};


const AddNewUser = async (user) => {
  const { name, email, company, Telephone, password, date } = user;
  const queryString = 'INSERT INTO users (name, email, company, Telephone, password, date) VALUES (?, ?, ?, ?, ?, ?)';
  try {
    const results = await query(queryString, [name, email, company, Telephone, password, date]);
    return results.insertId; // Return the ID of the newly inserted user
  } catch (error) {
    throw error;
  }
};


module.exports = {
  GetUserById,
  GetListOfUsers,
  DeleteUserById,
  AddNewUser
};