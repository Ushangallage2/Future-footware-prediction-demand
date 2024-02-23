const bcrypt = require('bcrypt');
const { db } = require('../db'); // Adjust the path to your database connection file

const username = 'user4'; // Set the desired username
const plainPassword = 'admin'; // Set the desired password

const saltRounds = 10; // Number of salt rounds for bcrypt hashing

// Hash the password
bcrypt.hash(plainPassword, saltRounds, async (err, hash) => {
    if (err) {
        // Handle the error
        console.error(err);
    } else {
        try {
            // Insert the user into the database with the hashed password
            const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
            await db.query(insertQuery, [username, hash]);
            console.log('User inserted successfully.');
        } catch (dbError) {
            console.error('Database error:', dbError);
        }
    }
});  
