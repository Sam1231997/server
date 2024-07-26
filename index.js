const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a mock response' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
