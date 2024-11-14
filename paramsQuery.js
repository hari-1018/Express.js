const express = require('express');
const app = express();

app.use(express.json());

// Route with req.params
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Route with req.query
app.get('/search', (req, res) => {
  res.send(`Search Query: ${req.query.term}`);
});

// Route with req.body
app.post('/data', (req, res) => {
  res.send(`Received Data: ${JSON.stringify(req.body)}`);
});

app.listen(3100, () => {
  console.log('Server is running on http://localhost:3100/');
});
