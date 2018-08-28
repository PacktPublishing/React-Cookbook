// Dependencies
import Sequelize from 'sequelize';

// Db Connection
import { db } from './db';

// This will remove the extra response
const queryType = {
  type: Sequelize.QueryTypes.SELECT
};

// Login
export function login(username, password, callback) {
  db.query(`
    SELECT id, username, email, fullName
    FROM users
    WHERE username = '${username}' AND password = '${password}'
  `, queryType).then(data => callback(data));
}
