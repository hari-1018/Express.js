const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res) => {
    res.send('Introduction to Express.js')
})

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}/`)
})