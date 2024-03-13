const { db } = require('../db');
const util = require('util');
const fs = require('fs').promises;
const query = util.promisify(db.query).bind(db);




const updateUserImage = async (id, image) => {
    const sql = "UPDATE users SET profileImage = ? WHERE id = ?";
    try {
      await query(sql, [ image ,id ]);
      return { status: 'Success' };
    } catch (error) {
      console.log('Error updating profile image:', error);
      throw new Error('Internal Server Error');
    }
  };



  const getProfImageById = async (id) => {
    const queryString = 'SELECT profileImage FROM users WHERE id = ?';
  
    try {
      const result = await query(queryString, [id]);
      if (result.length > 0) {
        return result[0].profileImage;
      } else {
        throw new Error('Image not found');
      }
    } catch (error) {
      console.log('Error fetching image by id:', error);
      throw new Error('Internal Server Error');
    }
  };


  module.exports = {
    updateUserImage,getProfImageById}