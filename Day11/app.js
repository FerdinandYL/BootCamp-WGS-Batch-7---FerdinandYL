const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult } = require('express-validator');
const db = require('./db/db');
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
    async (req, res) => {
        try {
            // create contact to add/update or saved as lastInputedData
            let lastInput = {nama:req.body.nama, telepon:req.body.telepon, email:req.body.email};

            // error checking and assigning error message
            const check_result = validationResult(req);
            if (!check_result.isEmpty()) {
                let ERROR_MSG = '';
                if (check_result.array().length > 1) {
                    ERROR_MSG = 'Nomor telepon dan Email yang anda masukan salah!!!';
                } else {
                    ERROR_MSG = check_result.array().map(error => error.msg)[0];
                    console.log(ERROR_MSG);
                }
                // error routing
                if (req.body.method == 'add') {
                    const contacts = await db.getUsers();
                    res.render(`contact`, { title: 'ErrorAdd!', error_msg: ERROR_MSG, lastInput: lastInput, contacts: contacts });
                } else if (req.body.method == 'update') {
                    res.render(`update`, { title: 'ErrorUpdate!', error_msg: ERROR_MSG, lastInput: lastInput, id: req.body.id, contact: lastInput });
                }
            } else {
                if (req.body.method == 'add') {
                    await db.createUser(req.body.nama, req.body.telepon, req.body.email);
                } else if (req.body.method == 'update') {
                    await db.updateUser(req.body.id, req.body.nama, req.body.telepon, req.body.email);
                }
                res.redirect('/contact');
            }
        } catch (error) {
            console.error('Error processing contact form:', error);
            res.status(500).send('Internal Server Error');
        }
    }
)

// ===== GET =====
// HOME
app.get('/', (req, res) => {
    res.render('home', { title: "home", nama: "Ferdinand" })
})

// Contact
app.get('/contact', async (req, res) => {
    try {
        // routing detail
        if (req.query.id != null) {
            const contact = await db.getUserById(req.query.id);
            res.render('detail', { title: 'Details', contact: contact });
        }

        // routing delete
        else if (req.query.delete != null) {
            await db.deleteUser(req.query.delete);
            res.redirect('contact');
        }

        // routing update
        else if (req.query.update != null) {
            const contact = await db.getUserById(req.query.update);
            res.render('update', { title: 'Update', contact: contact, id: req.query.update});
        }

        // routing main contacts page
        else {
            const contacts = await db.getUsers();
            res.render('contact', { title: 'Contacts', contacts: contacts });
        }
    } catch (error) {
        console.error('Error processing contact page:', error);
        res.status(500).send('Internal Server Error');
    }
})

// About
app.get('/about', (req, res) => {
    res.render('about', { title: "About Page" })
})
// ===== ===== =====

app.listen(PORT, () => {
    console.log(`Example app listening on port : ${PORT}`);
})