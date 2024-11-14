const express = require('express');
const app = express();
const PORT = 3005;

const simpleLogger = (req, res, next) => {
  console.log('A request was made!');
  next(); 
};

app.use(simpleLogger);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
