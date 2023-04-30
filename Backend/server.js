const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.json())
console.log('joy')

// Endpoint to insert data into aushad table
app.get('/api/all', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'medical',
      database: 'stark'
    });
    const [rows, fields] = await connection.execute('SELECT * FROM stark_8');
    res.json(rows);
    console.log('joy');
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: 'Error retrieving data' });
  } finally {
    if (connection) {
      connection.end();
    }
  }
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
