const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/students', (req,res)=>{
    res.send(req.query.age)
})

app.post('/students', (req, res) => {
  res.send(req.body.name);
  
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
