const PORT = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('70339233');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
