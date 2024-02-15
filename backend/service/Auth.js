const { db } = require("../db");
const util = require("util");
const query = util.promisify(db.query).bind(db);

const LoginNow = async (authData) => {
  const { email, password } = authData;
  const queryString = 'Select email,password from users where email = ? and password = ?';
  try {
    const results = await query(queryString, [email, password]);
    if(results.length > 0){
      return "success";
    }else{
      return "failure";
    }
    //return results; // Return the ID of the newly inserted user
  } catch (error) {
    throw error;
  }
};

module.exports = {
  LoginNow
};