const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Add this line
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());  // Enable CORS

app.get('/api/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
