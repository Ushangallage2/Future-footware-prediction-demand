/*const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const LoginNow = async (authData) => {
  const { username, password } = authData;

  try {
    // Create a connection pool
    const pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Ushan421@',
      database: process.env.DB_NAME || 'fdps',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Use a parameterized query to retrieve user information
    const [rows] = await connection.execute(
      'SELECT username, password FROM users WHERE username = ?',
      [username]
    );

    // Check if any matching user is found
    if (rows.length > 0) {
      const hashedPassword = rows[0].password;

      // Compare the entered password with the stored hashed password using bcrypt
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        return {
          status: 'success',
          user: {
            username: rows[0].username,
          }
        };
      } else {
        return { status: 'fail1', message: 'Invalid credentials' };
      }
    } else {
      return { status: 'fail2', message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('LoginNow Error:', error);
    throw new Error('Authentication failed. Please try again.');
  } finally {
    // Release the connection back to the pool
    if (connection) connection.release();
  }
};

module.exports = { LoginNow };



const bcrypt = require('bcrypt');
const { db } = require('../db');
const util = require('util');
const query = util.promisify(db.query).bind(db);

const LoginNow = async (authData) => {
  const { username, password } = authData;
  const queryString = 'SELECT username, password FROM users WHERE username = ? '

  try {
    const results = await query(queryString, [username]);

    console.log('Results:', results); // Log the results array

    if (results.length > 0) {
      const hashedPassword = results[0].password;

      console.log('Hashed Password:', hashedPassword); // Log the hashed password

      // Compare the entered password with the stored hashed password using bcrypt
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      console.log('Password Match:', passwordMatch); // Log the password match result

      if (passwordMatch) {
        return {
          status: 'success',
          user: {
            username: results[0].username,
           
          }
        };
      } else {
        return { status: 'fail1', message: 'Invalid credentials' };
      }
    } else {
      return { status: 'fail2', message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('LoginNow Error:', error);
    throw new Error('Authentication failed. Please try again.');
  }
};

module.exports = { LoginNow };

/*const LoginNow = async (authData) => {
  const { username, password } = authData;
  console.log('Username:', username); // Log the username

  const queryString = 'SELECT username, password FROM users WHERE username = ?';

  try {
    const results = await query(queryString, [username]);

    console.log('Results:', results); // Log the results array

    if (results.length > 0) {
      const hashedPassword = results[0].password;

      console.log('Hashed Password:', hashedPassword); // Log the hashed password

      // Compare the entered password with the stored hashed password using bcrypt
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      console.log('Password Match:', passwordMatch); // Log the password match result

      if (passwordMatch) {
        return {
          status: 'success',
          user: {
            username: results[0].username,
          }
        };
      } else {
        return { status: 'fail1', message: 'Invalid credentials' };
      }
    } else {
      return { status: 'fail2', message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('LoginNow Error:', error);
    throw new Error('Authentication failed. Please try again.');
  }
};

module.exports = { LoginNow };


------------------------------------------------------
const { db } = require("../db");
const util = require("util");
const query = util.promisify(db.query).bind(db);



const LoginNow = async (authData) => {
  const { username, password } = authData;
  const queryString = 'Select username , password from users where username = ? and password = ?';
  try {
    const results = await query(queryString, [username, password]);
    console.log(results)
    if(results != null){
      return 'success';
    }else {
      return 'fail';
    }
    //return results; 

  } catch (error) {
    throw error;
  }
};



module.exports = { LoginNow };

--------------------------------------*/
// Auth.js
// const { db } = require('../db');
// const util = require('util');
// const bcrypt = require('bcrypt');
// const query = util.promisify(db.query).bind(db);
// const jwt = require('jsonwebtoken')




// const LoginNow = async (authData) => {
//   const username = authData.userName;
//   const password = authData.passWord;

//   //console.log("line 198");
//   const queryString = 'SELECT username, password,role FROM users WHERE username = ?';

//   try {
//     const results = await query(queryString, [username]);
//     console.log("Result: ",results);
//     if (results.length > 0) {
//       const hashedPassword = results[0].password;

//       // Compare the entered password with the stored hashed password using bcrypt
//       const passwordMatch = await bcrypt.compare(password, hashedPassword);

//       if (passwordMatch) {
//       const accessToken = jwt.sign({username:username ,role:results[0].role}, 'secret',{expiresIn:"24h"});
//         return {
//           status: 'success',
//           user: {
//             username: results[0].username,
//             token: accessToken
//           }
          
          
//         };
//       } else {
//         return { status: 'fail', message: 'Invalid credentials' };
//       }
//     } else {
//       return { status: 'fail', message: 'Invalid Username' };
//     }
//   } catch (error) {
//     console.error('LoginNow Error:', error);
//     throw new Error('Authentication failed. Please try again.');
//   }
// };
// module.exports = { LoginNow, };
/*const checkCredentials = async (username, password) => {
  const queryString = 'SELECT username, password FROM users WHERE username = ?';

  try {
    const results = await query(queryString, [username]);

    if (results.length > 0) {
      const hashedPassword = results[0].password;

      // Compare the entered password with the stored hashed password using bcrypt
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      return passwordMatch ? 'success' : 'fail';
    } else {
      return 'fail';
    }
  } catch (error) {
    throw error;
  }
};*/
// const { db } = require('../db');
// const util = require('util');
// const bcrypt = require('bcrypt');
// const query = util.promisify(db.query).bind(db);
// const jwt = require('jsonwebtoken')




// const LoginNow = async (authData) => {
//   const username = authData.userName;
//   const password = authData.passWord;

//   //console.log("line 198");
//   const queryString = 'SELECT username, password,role FROM users WHERE username = ?';

//   try {
//     const results = await query(queryString, [username]);
//     console.log("Result: ",results);
//     if (results.length > 0) {
//       const hashedPassword = results[0].password;

//       // Compare the entered password with the stored hashed password using bcrypt
//       const passwordMatch = await bcrypt.compare(password, hashedPassword);

//       if (passwordMatch) {
//       const accessToken = jwt.sign({username:username ,role:results[0].role}, 'secret',{expiresIn:"24h"});
//         return {
//           status: 'success',
//           user: {
//             username: results[0].username,
//             token: accessToken
//           }
          
          
//         };
//       } else {
//         return { status: 'fail', message: 'Invalid credentials' };
//       }
//     } else {
//       return { status: 'fail', message: 'Invalid Username' };
//     }
//   } catch (error) {
//     console.error('LoginNow Error:', error);
//     throw new Error('Authentication failed. Please try again.');
//   }
// };
// module.exports = { LoginNow, };

//-----------//
const { db } = require('../db');
const util = require('util');
const bcrypt = require('bcrypt');
const query = util.promisify(db.query).bind(db);
const jwt = require('jsonwebtoken');

const LoginNow = async (authData) => {
  const username = authData.userName;
  const password = authData.passWord;

  const queryString = 'SELECT username, password, role, userlock, status FROM users WHERE username = ?';

  try {
    const results = await query(queryString, [username]);

    let { userlock, status } = results.length > 0 ? results[0] : { userlock: 0, status: 0 };

    // Check if the account is already locked
    if (status === 3) {
      return {
        status: 'fail',
        message: 'Account is locked. Contact the administration for recovery.',
        attemptsLeft: 0, // Account is already locked, so no attempts left
      };
    }

    // Check if the account is locked due to too many attempts
    if (userlock >= 5) {
      status = 3; // Change status to 3 if userlock count reaches 5
      await query('UPDATE users SET status = 3 WHERE username = ?', [username]);
      return {
        status: 'fail',
        message: 'Account is locked. Contact the administration for recovery.',
        attemptsLeft: 0, // Account is locked, so no attempts left
      };
    }

    // Compare the entered password with the stored hashed password using bcrypt
    const passwordMatch = results.length > 0 ? await bcrypt.compare(password, results[0].password) : false;

    if (passwordMatch) {
      const accessToken = jwt.sign({ username: username, role: results[0].role }, 'secret', { expiresIn: "24h" });

      // Reset userlock count upon successful login
      if (userlock > 0) {
        await query('UPDATE users SET userlock = 0 WHERE username = ?', [username]);
      }

      return {
        status: 'success',
        user: {
          username: results[0].username,
          token: accessToken
        },
        attemptsLeft: 0, // Successful login, so no attempts left
      };
    } else {
      // Increment userlock count upon unsuccessful password attempt
      if (results.length > 0) {
        await query('UPDATE users SET userlock = userlock + 1 WHERE username = ?', [username]);
      } else {
        // Increment general attemptsLeft count if both username and password are incorrect
        await query('UPDATE general_attempts SET attemptsLeft = attemptsLeft + 1');
      }

      const attemptsLeft = results.length > 0 ? 4 - userlock : await getGeneralAttemptsLeft();

      if (attemptsLeft === 5) {
        return {
          status: 'fail',
          message: 'No attempts left. Contact the administration.',
          attemptsLeft: 0, // No attempts left
        };
      }

      return {
        status: 'fail',
        message: 'Invalid credentials',
        attemptsLeft: attemptsLeft,
      };
    }
  } catch (error) {
    console.log('LoginNow Error:', error);
    throw new Error('Authentication failed. Please try again.');
  }
};

const getGeneralAttemptsLeft = async () => {
  const result = await query('SELECT attemptsLeft FROM general_attempts');
  return result.length > 0 ? result[0].attemptsLeft : 0;
};

module.exports = { LoginNow };
