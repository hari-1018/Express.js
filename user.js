const express = require('express');
const app = express();
const port = 3001;

app.use(express.json()); 
let users = [];

const findUserById = (id) => users.find((user) => user.id === id);

const generateId = () => (users.length ? users[users.length - 1].id + 1 : 1);

app.post('/users', (req, res) => {
  const { name, email, username } = req.body;
  
  if (!name || !email || !username) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newUser = {
    id: generateId(),
    name,
    email,
    username,
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = findUserById(Number(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'User is Not Found' });
  }
  
  res.json(user);
});


app.put('/users/:id', (req, res) => {
  const user = findUserById(Number(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'User is Not Found' });
  }
  
  const { name, email, username } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  if (username) user.username = username;
  
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex((user) => user.id === Number(req.params.id));
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User is Not Found' });
  }
  
  users.splice(userIndex, 1);
  res.status(204).send(); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
