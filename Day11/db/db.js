const { Client } = require('pg');

// Connection configuration
const dbConfig = {
  user: 'admin',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: '5432',
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

// Connect to the database
client.connect();

// Create operation
async function createUser(nama, telepon, email) {
  const sqlQuery = 'INSERT INTO contact_details (nama, telepon, email) VALUES ($1, $2, $3)';
  const values = [nama, telepon, email];

  try {
    await client.query(sqlQuery, values);
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
}

// Read operation
async function getUserById(userId) {
  const sqlQuery = 'SELECT * FROM contact_details WHERE id = $1';
  const values = [userId];

  try {
    const result = await client.query(sqlQuery, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error retrieving user:', error.message);
    throw error;
  }
}

async function getUsers() {
  const sqlQuery = 'SELECT * FROM contact_details ORDER BY id ASC';

  try {
    const result = await client.query(sqlQuery);
    return result.rows;
  } catch (error) {
    console.error('Error retrieving user:', error.message);
    throw error;
  }
}

// Update operation
async function updateUser(userId, newNama, newTelepon, newEmail) {
  const sqlQuery = 'UPDATE contact_details SET nama = $2, telepon = $3, email = $4 WHERE id = $1';
  const values = [userId, newNama, newTelepon, newEmail];

  try {
    await client.query(sqlQuery, values);
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
}

// Delete operation
async function deleteUser(userId) {
  const sqlQuery = 'DELETE FROM contact_details WHERE id = $1';
  const values = [userId];

  try {
    await client.query(sqlQuery, values);
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
}

// Close the connection when done
async function closeConnection() {
  await client.end();
}

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  closeConnection,
};
