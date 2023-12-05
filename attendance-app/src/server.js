const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'attendance-app',
    password: 'admin',
    port: '5432',
});

app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const query = 'SELECT password FROM public."Users" WHERE email = $1';
  const values = [email];

  try {
    const result = await pool.query(query, values);
    
    if (bcrypt.compare(password, result.rows[0].password)) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});