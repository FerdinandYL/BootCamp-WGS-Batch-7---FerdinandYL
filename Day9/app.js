const services = require('./services/services');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult } = require('express-validator');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(morgan('dev'))
app.use(express.static("public"));

// ===== POST =====
app.post('/contact',
    [   
        body('telepon').isMobilePhone('id-ID').withMessage('Nomor HP yang anda masukan salah!'),
        body('email').isEmail().withMessage('Email yang anda masukan salah!')
    ],
    (req,res)=>{
        // create contact to add/update or saved as lastInputedData
        let lastInput = services.createContact(req.body.nama, req.body.telepon, req.body.email);
        
        // error checking and assigning error message
        const check_result = validationResult(req);
        if(!check_result.isEmpty()){
            let ERROR_MSG = '';
            if (check_result.array().length > 1) {
                ERROR_MSG = 'Nomor telepon dan Email yang anda masukan salah!!!';
            } else {
                ERROR_MSG = check_result.array().map(error=>error.msg)[0];
                console.log(ERROR_MSG);
            }
            //error routing
            if(req.body.method == 'add'){
                res.render(`contact`, {title:'ErrorAdd!', error_msg:ERROR_MSG, lastInput:lastInput, contacts:services.getContacts()});
            } else if(req.body.method == 'update'){
                res.render(`update`, {title:'ErrorUpdate!', error_msg:ERROR_MSG, lastInput:lastInput, id:req.body.id, contact:lastInput});
            }
        } else {
            if(req.body.method == 'add'){
                services.addContact(lastInput);
            } else if(req.body.method == 'update'){
                services.updateContact(req.body.id, lastInput);
            }
            res.redirect('/contact');
        }
    }
)

// ===== GET =====
// HOME
app.get('/', (req,res)=>{
    res.render('home', {title:"home",nama:"Ferdinand"})
})

// Contact
app.get('/contact', (req,res)=>{
    
    //routing detail
    if(req.query.id != null){
        res.render('detail', {title:'Details',contact:services.getContacts()[req.query.id]})
    }

    //routing delete
    else if(req.query.delete != null){
        services.deleteContact(req.query.delete);
        res.redirect('contact');
    }

    //routing update
    else if(req.query.update != null){
        res.render('update', {title:'Update',contact:services.getContacts()[req.query.update], id:req.query.update})
    }
    
    //routing main contacts page
    else {
        res.render('contact',{title:'Contacts', contacts:services.getContacts()})
    }
})

//About
app.get('/about', (req,res)=>{
    res.render('about', {title:"About Page"})
})
// ===== ===== =====

app.listen(PORT, ()=>{
    console.log(`Example app listening on port : ${PORT}`);
})