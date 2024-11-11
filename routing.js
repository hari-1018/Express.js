const express = require('express');
const path = require('path')
const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/products', (req,res)=>{
    res.sendFile(path.join(__dirname, 'products.html'));
})

app.get('/cart', (req,res)=>{
    res.sendFile(path.join(__dirname, 'cart.html'));
})

app.post('/cart', (req,res)=>{
    res.send('Cart Created');
})

app.put('/cart', (req,res)=>{
    res.send('Cart Updated');
})

app.delete('/cart', (req,res)=>{
    res.send('Cart Deleted');
})

app.get('/payment', (req,res)=>{
    res.send('This is Payment Page');
})

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}/`)
})