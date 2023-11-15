const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.get('/', (req,res)=>{
    contact = [
        {
            nama:"Agus",
            nomor:"085794158004"
        },
        {
            nama:"Budi",
            nomor:"082256986547"
        },
        {
            nama:"Cecep",
            nomor:"081534679824"
        },
    ]
    res.render('home', {title:"home",nama:"Ferdinand"})
})
app.get('/contact', (req,res)=>{
    res.render('contact',{title:"Contacts"})
})
app.get('/about', (req,res)=>{
    res.render('about', {title:"About Page"})
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port : ${PORT}`);
})