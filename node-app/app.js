const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js 👋' });
});

app.listen(3001, '127.0.0.1', () => {
  console.log('Node running on 3001');
});
