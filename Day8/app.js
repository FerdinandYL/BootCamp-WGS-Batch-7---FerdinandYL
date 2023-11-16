const services = require('./services/services');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(morgan('dev'))
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render('home', {title:"home",nama:"Ferdinand"})
})
app.post('/contact', (req,res)=>{
    let contact = {'nama':req.body.nama, 'telepon':req.body.telepon, 'email':req.body.email};
    services.checkFile();
    let contacts = services.getContacts();
    if(req.body.method == 'update'){
        contacts.splice(req.body.id, 1, contact);
        services.setContacts(contacts);
        services.saveContact();
        res.redirect('contact', {title:"Contact", contacts:services.getContacts()})
    } else {
        contacts.push(contact);
        services.setContacts(contacts);
        services.saveContact();
        res.redirect('contact');
    }
})
app.get('/contact', (req,res)=>{
    services.checkFile();
    let contacts = services.getContacts();
    if(req.query.id != null){
        res.render('detail', {title:"Detail Contact", contact:contacts[req.query.id]})
    }else if(req.query.update != null){
        res.render('update', {title:"Update Contact", contact:contacts[req.query.update], id:req.query.update})
    }else if(req.query.delete != null){
        contacts.splice(req.query.delete, 1);
        services.setContacts(contacts);
        services.saveContact();
        res.render('contact', {title:"Deleted Contact", contacts:contacts})
    }else {
        res.render('contact',{title:"Contacts", contacts:contacts});
    }
})
app.get('/about', (req,res)=>{
    res.render('about', {title:"About Page"})
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port : ${PORT}`);
})