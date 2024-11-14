const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/students', (req,res)=>{
const name = req.query.name;
  const email = req.query.email;

  if (name && email) {
    res.send(`Name: ${name}, Email: ${email}`);
  } else {
    res.send("Name or Email not provided in query");
  }})

app.post('/students', (req, res) => {
  res.send(req.body);
  
});

app.listen(3002, () => {
  console.log(`Server is running on http://localhost:3002/`);
});
